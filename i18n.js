/* 表示言語の切り替え（日本語 / English / 한국어）
 * 日本語はページに書いてある文をそのまま使い、英語・韓国語はここに持つ。
 * 選んだ言語はこの端末に保存し、?lang=en のようにURLでも指定できる。
 */
(function () {
  var Q = { ja: '業務　困りごと　相談', en: 'workflow  problems  help', ko: '업무  고민  상담' };

  var D = {
    en: {
      'meta.title': 'Yumeno Kimoto | Freelance Engineer in Yamaguchi, Japan (Workflow Improvement & AI-Driven Development)',
      'meta.desc': 'Portfolio of Yumeno Kimoto, a freelance engineer based in Yamaguchi, Japan, who helps companies improve and automate their workflows fully remotely — from requirements definition to Google Apps Script automation and AI-driven development of business tools, document search (RAG) and dashboards.',
      'h1': 'Yumeno Kimoto | Freelance Engineer in Yamaguchi, Japan (Workflow Improvement & AI-Driven Development)',
      'pill': 'For recruiters',
      'tab.all': 'All', 'tab.works': 'Works', 'tab.person': 'People', 'tab.img': 'Images', 'tab.video': 'Videos',
      'tab.more': 'More ▾', 'tab.tools': 'Tools ▾', 'tab.faq': 'FAQ', 'tab.contact': 'Contact',
      'a.suggest': 'Search suggestions', 'a.replay': 'Clear and search again',
      'suggest': '<li>workflow  problems  help<b>  where to ask</b></li><li>workflow  problems  help<b>  who to hire</b></li><li>workflow  problems  help<b>  so tedious</b></li><li><span class="dot" aria-hidden="true"></span><span style="flex:1">workflow  problems  help<b>  Yumeno Kimoto</b></span><span class="tag">Person</span></li>',
      'found': 'Found <span class="one">1</span> person matching <b>workflow  problems  help</b>!<br><a href="#results" class="ul go-link">Scroll down</a>',
      'tips.h': 'Search tips:',
      'tips.1': 'It’s fine if your problem is still a little vague',
      'tips.2': '“So tedious” is a perfectly good search term',
      'tips.3': 'Built with AI <span class="serif" style="font-size:16px">＝＝≠</span> no thinking involved',
      'tips.4': 'Still can’t find it? <a href="#contact" class="ul">Just ask her directly</a>',
      'searching': 'Searching<span class="dots"><span>.</span><span>.</span><span>.</span></span>',
      'a.fish': 'Illustration of Yumeno Kimoto’s business card being fished out of a pond of problems',
      'svg.pond': 'Pond of problems', 'svg.role': 'Workflow × AI-driven dev', 'svg.works': 'works',
      'note.app': 'yumeno search is Yumeno Kimoto’s portfolio for job applications. It is not a real search service.',
      'scroll': '<span class="bob" aria-hidden="true">↓</span>Scroll',
      'stats': 'About 1 person and 3 works found (0.27 seconds)',
      'crumb': 'yumeno-kimoto › person',
      'sub': 'Yumeno Kimoto — turning everyday work problems into tools that work',
      'lead': 'I sort out <span class="mk">workflow</span> <span class="mk">problems</span> and turn them into tools people actually use, handling everything from requirements definition to design and implementation with AI-driven development. Based in Yamaguchi, Japan, I work fully remotely to help companies streamline and automate their operations. No problem is too small — feel free to ask for <span class="mk">help</span>.',
      'sl.career': 'Career', 'sl.skills': 'What I can do', 'sl.tech': 'Tech I use',
      'a.card': 'About Yumeno Kimoto', 'a.photo': 'Photo of Yumeno Kimoto',
      'card': '<dt>Role</dt><dd>Freelance engineer — workflow improvement & AI-driven development</dd><dt>Hours</dt><dd>About 40 hrs/week, fully remote (negotiable)</dd><dt>Based in</dt><dd>Yamaguchi, Japan</dd><dt>Strengths</dt><dd>Requirements definition, workflow automation</dd><dt>Path</dt><dd>Accounting-system implementation consultant → in-house DX → independent development</dd>',
      'works.sub': 'Works (updated regularly)',
      'w1.kind': 'RAG / Document search', 'w1.title': 'Internal Document Search Assistant',
      'w1.desc': 'Answers questions about company policies, citing the source documents and exact passages. <span class="mk">If no source can be found, it does not answer.</span>',
      'w1.note': 'A mock that runs on fixed dummy data',
      'w2.kind': 'Instagram analytics',
      'w2.desc': 'Analyzes why a Reel performed well from both the numbers and the video itself. <span class="mk">Metrics are collected automatically every morning</span>, and it goes as far as scoring and suggesting improvements.',
      'w2.note': 'The demo uses data from a fictional account',
      'w3.kind': 'Analytics dashboard',
      'w3.desc': 'A dashboard that lets a hair salon <span class="mk">see how it’s doing on a single screen</span>, based on booking and customer data.',
      'w3.note': 'The first load may take a moment',
      'demo': 'View demo ↗',
      'a.w1': 'Thumbnail of the Internal Document Search Assistant: answers questions about company policies with sources',
      'a.w2': 'Thumbnail of Reels Insight: AI scores Reels before and after posting and shows what to fix',
      'a.w3': 'Thumbnail of Salon Insight: automating data analysis for a hair salon',
      'faq.h': 'People also search for',
      'faq': '<div><h3>Yumeno Kimoto  what she can do for you</h3><p>Organizing workflows and defining requirements / Automation with Google Apps Script and spreadsheets / Analytics tools and document search (RAG) with the Claude and Gemini APIs / Streamlit dashboards / WordPress websites</p></div><div><h3>Yumeno Kimoto  building with AI</h3><p>I decide what to build, how far to take it and how to verify it, and do much of the implementation together with AI. The document search assistant, for example, is designed not to answer without a source, and I kept a record of each decision and how it was tested.</p></div><div><h3>Yumeno Kimoto  career</h3><p>After working as an implementation consultant for packaged software and on in-house DX and workflow improvement, I have been designing and building business tools independently since August 2026. <a class="ul" href="#profile">More</a></p></div><div><h3>Yumeno Kimoto  availability</h3><p>About 40 hours a week, fully remote.</p></div>',
      'contact.sub': 'Search again — with your own problem',
      'contact.note': 'Just describe what’s bothering you, as it is.',
      'f.body': 'What can I help with?', 'f.ph': 'e.g. I want to make our monthly reporting easier',
      'f.name': 'Name', 'f.mail': 'Email', 'f.send': 'Send', 'f.reply': 'I’ll reply to the email address you enter.',
      'pager': 'This is the only result',
      'legal': 'yumeno search is Yumeno Kimoto’s portfolio. It is not a real search service.',
      'back': '← Back to results',
      'kicker': 'Person / Freelance engineer in Yamaguchi, Japan — workflow improvement & AI-driven development',
      'plead': 'My work is understanding how a business runs and using technology to make it run better. After gaining experience in requirements definition and client communication as an implementation consultant, I worked on workflow improvement through in-house DX. Now, based in Yamaguchi, Japan, I build business tools with AI-driven development.',
      'career.sub': 'Work history',
      'career': '<li><span class="when">2026.08 —</span><div class="what"><p class="role">Independent developer / Freelance</p><p class="d">Designing and developing business tools. Since September 2026, studying AI-driven development at a school while putting it into practice.</p></div></li><li><span class="when">2026.02 — 07</span><div class="what"><p class="role">Operating company — In-house DX & workflow improvement</p><p class="d">Systematized travel-expense claims with an official LINE account and Google Forms, <span class="mk">cutting monthly work time by 50%</span>.</p></div></li><li><span class="when">2023.09 — 2025.12</span><div class="what"><p class="role">Software company — Implementation consultant</p><p class="d">Handled packaged-software implementations end to end: requirements definition, client communication and project management through data migration, environment setup, testing and maintenance.</p></div></li>',
      'skills': '<li><span class="serif">1</span>Organizing workflows and defining requirements</li><li><span class="serif">2</span>Workflow automation with Google Apps Script, spreadsheets and more</li><li><span class="serif">3</span>Analytics tools and document search (RAG) built on various APIs</li><li><span class="serif">4</span>Dashboard development with Streamlit</li><li><span class="serif">5</span>Website production with WordPress</li>',
      'ws.h': 'How I work', 'ws.p': 'About 40 hours a week, fully remote.',
      'cta': 'Contact Yumeno', 'seeworks': 'See works',
      // form
      'e.body': 'Please describe what you need help with.', 'e.bodyLen': 'Please keep it within 2,000 characters.',
      'e.name': 'Please enter your name.', 'e.mail': 'Please enter your email address.', 'e.mailFmt': 'Please check the email address format.',
      's.notReady': 'The form isn’t ready yet. Please try again later.',
      's.sending': 'Sending…',
      's.ok': 'Sent. I’ll read your message and get back to you at the email address you entered.',
      's.busy': 'Too many messages right now. Please try again a little later.',
      's.invalid': 'Please check what you entered and try again.',
      's.fail': 'Your message may not have been sent. Please try again later.',
      's.net': 'Your message may not have been sent. Please check your connection and try again.'
    },

    ko: {
      'meta.title': '키모토 유메노｜일본 야마구치현의 프리랜서 엔지니어 (업무 개선·AI 주도 개발)',
      'meta.desc': '일본 야마구치현을 거점으로 풀 리모트로 업무 개선·효율화를 지원하는 프리랜서 엔지니어 키모토 유메노의 포트폴리오. 요건 정의부터 Google Apps Script를 활용한 자동화, AI 주도 개발로 만드는 업무 도구·사내 문서 검색(RAG)·대시보드까지 담당합니다.',
      'h1': '키모토 유메노｜일본 야마구치현의 프리랜서 엔지니어 (업무 개선·AI 주도 개발)',
      'pill': '채용 담당자분께',
      'tab.all': '전체', 'tab.works': '실적', 'tab.person': '인물', 'tab.img': '이미지', 'tab.video': '동영상',
      'tab.more': '더보기 ▾', 'tab.tools': '도구 ▾', 'tab.faq': '자주 묻는 질문', 'tab.contact': '상담하기',
      'a.suggest': '검색 추천어', 'a.replay': '지우고 다시 검색하기',
      'suggest': '<li>업무  고민  상담<b>  어디에</b></li><li>업무  고민  상담<b>  누구에게 맡길까</b></li><li>업무  고민  상담<b>  귀찮아</b></li><li><span class="dot" aria-hidden="true"></span><span style="flex:1">업무  고민  상담<b>  키모토 유메노</b></span><span class="tag">인물</span></li>',
      'found': '<b>업무  고민  상담</b>에 일치하는 사람을 <span class="one">1</span>명 찾았습니다!<br><a href="#results" class="ul go-link">스크롤해 주세요</a>',
      'tips.h': '검색 팁:',
      'tips.1': '고민이 아직 막연해도 괜찮아요',
      'tips.2': '‘귀찮다’도 훌륭한 검색어예요',
      'tips.3': 'AI로 만들었다 <span class="serif" style="font-size:16px">＝＝≠</span> 생각을 안 했다',
      'tips.4': '그래도 못 찾겠다면 <a href="#contact" class="ul">본인에게 직접 물어보는 게 빨라요</a>',
      'searching': '검색 중<span class="dots"><span>.</span><span>.</span><span>.</span></span>',
      'a.fish': '고민의 연못에서 키모토 유메노의 명함이 낚여 올라오는 일러스트',
      'svg.pond': '고민의 연못', 'svg.role': '업무 개선·AI 주도 개발', 'svg.works': '실적',
      'note.app': 'yumeno search는 키모토 유메노의 지원용 포트폴리오입니다. 실제 검색 서비스가 아닙니다.',
      'scroll': '<span class="bob" aria-hidden="true">↓</span>스크롤',
      'stats': '약 1명·실적 3건을 찾았습니다 (0.27초)',
      'crumb': 'yumeno-kimoto › 인물',
      'sub': '키모토 유메노 ─ 업무의 고민을 쓸 수 있는 도구로 바꾸는 사람',
      'lead': '<span class="mk">업무</span>의 <span class="mk">고민</span>을 정리해 실제로 쓸 수 있는 도구로 바꾸는 일을 하고 있습니다. 요건 정의부터 설계·구현까지 AI 주도 개발로 담당합니다. 일본 야마구치현을 거점으로 풀 리모트로 기업의 업무 효율화·자동화를 돕고 있습니다. 작은 일이라도 부담 없이 <span class="mk">상담</span>해 주세요.',
      'sl.career': '경력', 'sl.skills': '할 수 있는 일', 'sl.tech': '사용 기술',
      'a.card': '키모토 유메노 소개', 'a.photo': '키모토 유메노의 사진',
      'card': '<dt>직함</dt><dd>업무 개선·AI 주도 개발 프리랜서</dd><dt>가동</dt><dd>주 40시간 정도·풀 리모트 (협의 가능)</dd><dt>거점</dt><dd>일본 야마구치현</dd><dt>강점</dt><dd>요건 정의·업무 자동화</dd><dt>경력</dt><dd>회계 시스템 도입 컨설턴트 → 사내 DX → 개인 개발</dd>',
      'works.sub': '실적 (수시 업데이트)',
      'w1.kind': 'RAG / 문서 검색', 'w1.title': '사내 문서 검색 어시스턴트',
      'w1.desc': '사내 규정에 관한 질문에 근거가 되는 문서와 해당 부분을 함께 제시해 답합니다. <span class="mk">근거를 찾지 못한 질문에는 답하지 않습니다.</span>',
      'w1.note': '고정된 더미 데이터로 동작하는 목업입니다',
      'w2.kind': 'Instagram 분석',
      'w2.desc': '릴스가 잘된 이유를 수치와 영상 내용 양쪽에서 분석합니다. <span class="mk">수치는 매일 아침 자동으로 수집하고</span>, 채점과 개선안까지 제시합니다.',
      'w2.note': '데모는 가상 계정의 데이터입니다',
      'w3.kind': '데이터 분석 대시보드',
      'w3.desc': '미용실의 예약·고객 데이터를 바탕으로 <span class="mk">살롱의 상황을 한 화면에서 확인할 수 있는</span> 대시보드입니다.',
      'w3.note': '처음 표시될 때 시간이 걸릴 수 있습니다',
      'demo': '데모 보기 ↗',
      'a.w1': '사내 문서 검색 어시스턴트 썸네일: 사내 규정에 관한 질문에 근거와 함께 답한다',
      'a.w2': 'Reels Insight 썸네일: 게시 전후의 릴스 영상을 AI가 채점하고 고칠 점을 알려준다',
      'a.w3': 'Salon Insight 썸네일: 미용실 데이터 분석 자동화 프로젝트',
      'faq.h': '다른 사람들이 함께 검색한 항목',
      'faq': '<div><h3>키모토 유메노  맡길 수 있는 일</h3><p>업무 정리와 요건 정의／Google Apps Script·스프레드시트를 활용한 자동화／Claude·Gemini API를 활용한 분석 도구, 문서 검색(RAG)／Streamlit 대시보드／WordPress 사이트 제작</p></div><div><h3>키모토 유메노  AI와 함께 만든다는 것</h3><p>무엇을 만들지, 어디까지 만들지, 어떻게 검증할지는 제가 정하고, 구현의 상당 부분을 AI와 함께 진행합니다. 사내 문서 검색에서는 근거가 없는 질문에는 답하지 않도록 설계하고, 판단 기록과 검증 방법도 남겼습니다.</p></div><div><h3>키모토 유메노  경력</h3><p>패키지 소프트웨어 도입 컨설턴트, 사내 DX·업무 개선을 거쳐 2026년 8월부터 개인으로 업무 도구를 설계·개발하고 있습니다. <a class="ul" href="#profile">자세히</a></p></div><div><h3>키모토 유메노  가동 시간</h3><p>주 40시간 정도, 풀 리모트로 가동할 수 있습니다.</p></div>',
      'contact.sub': '당신의 고민으로 다시 검색하기',
      'contact.note': '지금 고민하고 있는 것을 그대로 적어 주세요.',
      'f.body': '상담 내용', 'f.ph': '예: 매달 하는 집계 작업을 편하게 하고 싶어요',
      'f.name': '성함', 'f.mail': '이메일 주소', 'f.send': '이 내용으로 상담하기', 'f.reply': '입력하신 이메일 주소로 답장드립니다.',
      'pager': '검색 결과는 이 1건뿐입니다',
      'legal': 'yumeno search는 키모토 유메노의 포트폴리오입니다. 실제 검색 서비스가 아닙니다.',
      'back': '← 검색 결과로 돌아가기',
      'kicker': '인물 ／ 일본 야마구치현의 업무 개선·AI 주도 개발 프리랜서 엔지니어',
      'plead': '업무를 이해하고, 기술로 더 나은 형태로 바꾸는 일을 하고 있습니다. 도입 컨설턴트로서 요건 정의와 고객 협의를 경험한 뒤 사내 DX로 업무 개선에 힘썼고, 현재는 일본 야마구치현을 거점으로 AI 주도 개발로 업무 도구를 만들고 있습니다.',
      'career.sub': '경력',
      'career': '<li><span class="when">2026.08 —</span><div class="what"><p class="role">개인 개발·프리랜서</p><p class="d">업무 도구 설계·개발. 2026년 9월부터 스쿨에서 AI 주도 개발을 본격적으로 배우며 실천 중.</p></div></li><li><span class="when">2026.02 — 07</span><div class="what"><p class="role">사업 회사　사내 DX·업무 개선</p><p class="d">공식 LINE과 Google 폼으로 교통비 정산을 시스템화하여 <span class="mk">월간 작업 시간을 50% 절감</span>.</p></div></li><li><span class="when">2023.09 — 2025.12</span><div class="what"><p class="role">소프트웨어 회사　도입 컨설턴트</p><p class="d">패키지 소프트웨어 도입에서 요건 정의·고객 협의·진척 관리부터 데이터 이전·환경 구축·테스트·운영 유지보수까지 일관되게 담당.</p></div></li>',
      'skills': '<li><span class="serif">1</span>업무 정리와 요건 정의</li><li><span class="serif">2</span>Google Apps Script·스프레드시트 등을 활용한 업무 자동화</li><li><span class="serif">3</span>각종 API를 활용한 분석 도구, 문서 검색(RAG) 개발</li><li><span class="serif">4</span>Streamlit 대시보드 개발</li><li><span class="serif">5</span>WordPress 사이트 제작</li>',
      'ws.h': '일하는 방식', 'ws.p': '주 40시간 정도, 풀 리모트로 가동할 수 있습니다.',
      'cta': '이 사람에게 상담하기', 'seeworks': '실적 보기',
      'e.body': '상담 내용을 적어 주세요.', 'e.bodyLen': '2,000자 이내로 부탁드립니다.',
      'e.name': '성함을 입력해 주세요.', 'e.mail': '이메일 주소를 입력해 주세요.', 'e.mailFmt': '이메일 주소 형식을 확인해 주세요.',
      's.notReady': '아직 전송 준비 중입니다. 잠시 후 다시 시도해 주세요.',
      's.sending': '전송 중…',
      's.ok': '전송했습니다. 내용을 확인한 뒤 입력하신 이메일 주소로 연락드리겠습니다.',
      's.busy': '지금 전송이 몰려 있습니다. 잠시 후 다시 시도해 주세요.',
      's.invalid': '입력 내용을 확인한 뒤 다시 시도해 주세요.',
      's.fail': '전송되지 않았을 수 있습니다. 잠시 후 다시 시도해 주세요.',
      's.net': '전송되지 않았을 수 있습니다. 통신 환경을 확인한 뒤 다시 시도해 주세요.'
    },

    ja: {
      'e.body': 'ご相談内容を書いてください。', 'e.bodyLen': '2000文字以内でお願いします。',
      'e.name': 'お名前を入力してください。', 'e.mail': 'メールアドレスを入力してください。', 'e.mailFmt': 'メールアドレスの形式を確認してください。',
      's.notReady': '送信先の準備中のため、まだ送れません。お手数ですが時間をおいてお試しください。',
      's.sending': '送信しています…',
      's.ok': '送信しました。内容を確認して、ご入力のメールアドレスにご連絡します。',
      's.busy': 'ただいま送信が集中しています。時間をおいてもう一度お試しください。',
      's.invalid': '入力内容を確認して、もう一度お試しください。',
      's.fail': '送信できなかった可能性があります。時間をおいてもう一度お試しください。',
      's.net': '送信できなかった可能性があります。通信環境を確認して、もう一度お試しください。'
    }
  };

  var LANGS = ['ja', 'en', 'ko'];
  var htmlNodes = document.querySelectorAll('[data-i18n]');
  var attrNodes = document.querySelectorAll('[data-i18n-attr]');
  var metaDesc = document.querySelector('meta[name="description"]');

  // 日本語の原文をページから控えておく
  htmlNodes.forEach(function (el) { D.ja[el.getAttribute('data-i18n')] = el.innerHTML; });
  attrNodes.forEach(function (el) {
    el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
      var p = pair.split(':'); D.ja[p[1]] = el.getAttribute(p[0]);
    });
  });
  D.ja['meta.title'] = document.title;
  D.ja['meta.desc'] = metaDesc ? metaDesc.content : '';

  var current = 'ja';
  var listeners = [];

  function t(key) { return (D[current] && D[current][key] != null) ? D[current][key] : D.ja[key]; }

  function apply(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'ja';
    current = lang;
    document.documentElement.lang = lang;
    htmlNodes.forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v != null) el.innerHTML = v;
    });
    attrNodes.forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); var v = t(p[1]); if (v != null) el.setAttribute(p[0], v);
      });
    });
    document.title = t('meta.title');
    if (metaDesc) metaDesc.content = t('meta.desc');
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem('lang', lang); } catch (_) {}
    listeners.forEach(function (fn) { fn(lang); });
  }

  function initial() {
    var m = /[?&]lang=(ja|en|ko)\b/.exec(location.search);
    if (m) return m[1];
    try { var s = localStorage.getItem('lang'); if (LANGS.indexOf(s) !== -1) return s; } catch (_) {}
    var n = (navigator.language || 'ja').toLowerCase();
    if (n.indexOf('ja') === 0) return 'ja';
    if (n.indexOf('ko') === 0) return 'ko';
    return 'en';
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });

  window.I18N = {
    t: t,
    query: function () { return Q[current]; },
    lang: function () { return current; },
    onChange: function (fn) { listeners.push(fn); }
  };

  var first = initial();
  if (first !== 'ja') apply(first); else apply('ja');
})();
