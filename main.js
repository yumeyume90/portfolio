(function () {
  var T = window.I18N.t;
  function Q() { return window.I18N.query(); }
  var typed = document.getElementById('typed');
  var suggest = document.getElementById('suggest');
  var foundEls = document.querySelectorAll('[data-found]');
  var searchingEls = document.querySelectorAll('[data-searching]');
  var mainView = document.getElementById('main-view');
  var profView = document.getElementById('profile-view');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var t1, t2;

  function setPhase(phase) {
    var found = phase === 'found';
    foundEls.forEach(function (el) { el.hidden = !found; });
    searchingEls.forEach(function (el) { el.hidden = found; });
    suggest.hidden = phase !== 'suggest';
  }

  // 01 検索語を1文字ずつ入力 → 予測候補 → 見つかりました → 名刺が釣れる
  function start() {
    clearInterval(t1); clearTimeout(t2);
    var n = 0;
    typed.textContent = '';
    setPhase('typing');
    t1 = setInterval(function () {
      n++;
      var q = Q();
      typed.textContent = q.slice(0, n);
      if (n >= q.length) {
        clearInterval(t1);
        setPhase('suggest');
        t2 = setTimeout(function () { setPhase('found'); }, 1700);
      }
    }, 130);
  }
  function finish() { clearInterval(t1); clearTimeout(t2); typed.textContent = Q(); setPhase('found'); }

  document.getElementById('replay').addEventListener('click', function () { reduce ? finish() : start(); });
  document.getElementById('top-form').addEventListener('submit', function (e) {
    e.preventDefault(); finish();
    document.getElementById('results').scrollIntoView();
  });
  document.getElementById('res-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('works').scrollIntoView();
  });

  // 画面の切り替え：#profile / #skills / #tech は 03 人物、それ以外は 01・02
  var PROFILE = ['profile', 'skills', 'tech'];
  function route() {
    var h = location.hash.replace('#', '');
    var isProf = PROFILE.indexOf(h) !== -1;
    mainView.hidden = isProf;
    profView.hidden = !isProf;
    if (isProf) {
      if (h === 'profile') window.scrollTo(0, 0);
      else { var p = document.getElementById(h); if (p) p.scrollIntoView(); }
      return;
    }
    var el = h && document.getElementById(h);
    if (el) requestAnimationFrame(function () { el.scrollIntoView(); });
  }
  window.addEventListener('hashchange', route);
  route();

  if (!reduce && !location.hash && window.scrollY < 40) start(); else finish();

  // 相談フォーム → Google Apps Script（送信先のアドレスはGAS側にだけあり、このページには書かない）
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbzv0snWTJ4F5Qe5i6i_FrTxe7n3fyrFDzJ4Vduf1OMY-tGca2p8bpzDOaZem66Rfd8a/exec'; // GASのウェブアプリURL
  var openedAt = Date.now();
  var form = document.getElementById('contact-form');
  var status = document.getElementById('c-status');
  var send = document.getElementById('c-send');
  var hp = document.getElementById('c-website');
  var f = { body: document.getElementById('c-body'), name: document.getElementById('c-name'), mail: document.getElementById('c-mail') };
  var e = { body: document.getElementById('e-body'), name: document.getElementById('e-name'), mail: document.getElementById('e-mail') };
  var MAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function say(text, kind) { status.textContent = text; status.className = 'status ' + (kind || ''); status.hidden = false; }
  Object.keys(f).forEach(function (k) { f[k].addEventListener('input', function () { e[k].textContent = ''; status.hidden = true; }); });

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var body = f.body.value.trim(), name = f.name.value.trim(), mail = f.mail.value.trim();
    var ok = true;
    if (!body) { e.body.textContent = T('e.body'); ok = false; }
    else if (body.length > 2000) { e.body.textContent = T('e.bodyLen'); ok = false; }
    if (!name) { e.name.textContent = T('e.name'); ok = false; }
    if (!mail) { e.mail.textContent = T('e.mail'); ok = false; }
    else if (!MAIL_RE.test(mail) || mail.length > 254) { e.mail.textContent = T('e.mailFmt'); ok = false; }
    if (!ok) { status.hidden = true; return; }

    if (!ENDPOINT) { say(T('s.notReady'), 'ng'); return; }

    send.disabled = true;
    say(T('s.sending'));
    var payload = { message: body, name: name, email: mail, website: hp.value, elapsed: Date.now() - openedAt };
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 20000);
    // text/plain で送る（GASが受け取れる形。余計な事前確認の通信が発生しない）
    fetch(ENDPOINT, { method: 'POST', body: JSON.stringify(payload), headers: { 'Content-Type': 'text/plain;charset=utf-8' }, signal: ctrl ? ctrl.signal : undefined, redirect: 'follow' })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res && res.ok) {
          form.reset(); openedAt = Date.now();
          say(T('s.ok'), 'ok');
        } else if (res && res.error === 'busy') {
          say(T('s.busy'), 'ng');
        } else if (res && res.error === 'invalid') {
          say(T('s.invalid'), 'ng');
        } else {
          say(T('s.fail'), 'ng');
        }
      })
      .catch(function () { say(T('s.net'), 'ng'); })
      .then(function () { clearTimeout(timer); send.disabled = false; });
  });
  // 言語を切り替えたとき：検索語と入力欄・メッセージを差し替える
  var q2 = document.getElementById('q2');
  q2.value = Q();
  window.I18N.onChange(function () {
    q2.value = Q();
    if (!suggest.hidden || !foundEls[0].hidden) finish();
    else if (!reduce) start(); else finish();
    Object.keys(e).forEach(function (k) { e[k].textContent = ''; });
    status.hidden = true;
  });
})();
