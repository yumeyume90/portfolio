/**
 * ポートフォリオ（yumeno search）の相談フォーム受け口
 *
 * - 通知先は、このスクリプトを動かしているGoogleアカウント本人のアドレス。
 *   コードにもページにもメールアドレスは書かない。
 * - 受け付けた内容は、テキストのメールで通知し、スプレッドシートにも記録する。
 *
 * 初回だけ: エディタで setup を実行 → 権限を許可 → ウェブアプリとしてデプロイ
 *   （実行ユーザー: 自分 / アクセスできるユーザー: 全員）
 */

var LIMITS = {
  message: 2000,
  name: 50,
  email: 254,
  minElapsedMs: 3000,     // ページを開いてから3秒未満の送信はボットとみなす
  perHourTotal: 20,       // 全体で1時間あたりの受付上限
  perHourPerEmail: 3      // 同じメールアドレスからの1時間あたりの上限
};
var MAIL_RE = /^[^\s@<>"',;:()\[\]\\]+@[^\s@<>"',;:()\[\]\\]+\.[^\s@<>"',;:()\[\]\\]+$/;

/** 初回に一度だけ手動で実行する：記録用のスプレッドシートを作る */
function setup() {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('SHEET_ID')) {
    Logger.log('記録用シートは作成済みです: ' + SpreadsheetApp.openById(props.getProperty('SHEET_ID')).getUrl());
    return;
  }
  var ss = SpreadsheetApp.create('ポートフォリオ 相談フォーム記録');
  ss.getSheets()[0].appendRow(['受付日時', 'お名前', 'メールアドレス', 'ご相談内容', '結果']);
  props.setProperty('SHEET_ID', ss.getId());
  Logger.log('記録用シートを作成しました: ' + ss.getUrl());
}

function doPost(e) {
  try {
    var data = parse_(e);
    if (!data) return json_({ ok: false, error: 'invalid' });

    // ボット対策：見えない欄に入力がある／開いてすぐの送信は、成功したふりをして捨てる
    if (data.website || Number(data.elapsed) < LIMITS.minElapsedMs) {
      return json_({ ok: true });
    }

    var name = clean_(data.name, LIMITS.name, false);
    var email = clean_(data.email, LIMITS.email, false).toLowerCase();
    var message = clean_(data.message, LIMITS.message, true);
    if (!name || !message || !MAIL_RE.test(email)) return json_({ ok: false, error: 'invalid' });

    if (!allow_(email)) return json_({ ok: false, error: 'busy' });

    var owner = Session.getEffectiveUser().getEmail();
    MailApp.sendEmail({
      to: owner,
      replyTo: email,
      name: 'yumeno search',
      subject: '【ポートフォリオ】相談が届きました（' + name + ' 様）',
      body: [
        'ポートフォリオの相談フォームから送信がありました。',
        'このメールに返信すると、相手のアドレスに届きます。',
        '',
        'お名前: ' + name,
        'メールアドレス: ' + email,
        '受付日時: ' + Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm'),
        '',
        '--- ご相談内容 ---',
        message
      ].join('\n')
    });

    log_([new Date(), name, email, message, '通知済み']);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'server' });
  }
}

/** 誤ってブラウザで開かれたとき用。何も返さない */
function doGet() {
  return json_({ ok: false, error: 'method' });
}

function parse_(e) {
  if (!e || !e.postData || !e.postData.contents) return null;
  if (e.postData.contents.length > 20000) return null;
  try {
    var d = JSON.parse(e.postData.contents);
    return (d && typeof d === 'object') ? d : null;
  } catch (_) {
    return null;
  }
}

/** 文字列化・制御文字の除去・長さ制限。複数行を許すのは本文だけ */
function clean_(v, max, multiline) {
  var s = String(v == null ? '' : v);
  s = multiline
    ? s.replace(/\r\n?/g, '\n').replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, '')
    : s.replace(/[\u0000-\u001F\u007F]/g, ' ');
  s = s.trim();
  return s.length > max ? '' : s;
}

/** 1時間あたりの受付数を数えて、上限を超えたら断る */
function allow_(email) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return false;
  try {
    var cache = CacheService.getScriptCache();
    var hour = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyyMMddHH');
    var kAll = 'all_' + hour;
    var kMe = 'mail_' + hour + '_' + Utilities.base64EncodeWebSafe(
      Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, email)).slice(0, 16);
    var all = Number(cache.get(kAll) || 0);
    var me = Number(cache.get(kMe) || 0);
    if (all >= LIMITS.perHourTotal || me >= LIMITS.perHourPerEmail) return false;
    cache.put(kAll, String(all + 1), 3600);
    cache.put(kMe, String(me + 1), 3600);
    return true;
  } finally {
    lock.releaseLock();
  }
}

/** シートに記録。先頭が = + - @ の値は数式として動かないように ' を付ける */
function log_(row) {
  var id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  if (!id) return;
  var safe = row.map(function (v) {
    return (typeof v === 'string' && /^[=+\-@\t\r]/.test(v)) ? "'" + v : v;
  });
  SpreadsheetApp.openById(id).getSheets()[0].appendRow(safe);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
