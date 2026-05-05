/* 鴻瑋光電 — Shared Components v3 */
(function() {
  var path = window.location.pathname.split('/').pop() || 'index.html';

  var navLinks = [
    { href:'index.html',    label:'首頁' },
    { href:'products.html', label:'產品目錄' },
    { href:'about.html',    label:'關於我們' },
    { href:'blog.html',     label:'部落格' },
    { href:'contact.html',  label:'聯絡我們' }
  ];

  function isActive(href) {
    return path === href || path === href.replace('.html','') ||
           (href === 'index.html' && (path === '' || path === '/'));
  }

  var desktopLinks = '';
  for (var i = 0; i < navLinks.length; i++) {
    var l = navLinks[i];
    var active = isActive(l.href);
    desktopLinks += '<a href="' + l.href + '" style="color:' + (active?'#ff5c3a':'#7a90b0') + ';text-decoration:none;font-size:13px;padding:6px 10px;letter-spacing:1px;border-bottom:2px solid ' + (active?'#ff5c3a':'transparent') + ';font-weight:' + (active?'700':'400') + ';transition:color .2s;" onmouseover="if(this.style.color!==\'rgb(255, 92, 58)\')this.style.color=\'#fff\'" onmouseout="if(this.style.color!==\'rgb(255, 92, 58)\')this.style.color=\'#7a90b0\'">' + l.label + '</a>';
  }

  var mobileLinks = '';
  for (var j = 0; j < navLinks.length; j++) {
    var ml = navLinks[j];
    mobileLinks += '<a href="' + ml.href + '" style="font-size:1.8rem;font-weight:900;color:#fff;text-decoration:none;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.07);width:100%;display:block;">' + ml.label + '</a>';
  }

  var LOGO_IMG = '<img src="/logo.png" alt="鴻瑋光電有限公司 LOGO" style="height:40px;width:auto;display:block;" onerror="this.style.display=\'none\'">';
  var BRAND = '<span style="font-family:\'Bebas Neue\',sans-serif;font-size:1.2rem;letter-spacing:3px;color:#fff;">鴻瑋<span style="background:linear-gradient(135deg,#dc3c28,#ff8c50);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">光電</span></span>';

  var navHTML = '<nav id="hw-nav" style="position:fixed;top:0;left:0;right:0;z-index:9000;height:68px;background:rgba(5,13,26,0.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:space-between;padding:0 5%;font-family:\'Noto Sans TC\',sans-serif;">'
    + '<a href="index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;">' + LOGO_IMG + BRAND + '</a>'
    + '<div id="nav-desktop" style="display:flex;gap:20px;align-items:center;">'
    + desktopLinks
    + '<a href="contact.html" style="background:linear-gradient(135deg,#dc3c28,#ff6b3a);color:#fff;padding:9px 20px;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:1px;margin-left:8px;border-radius:4px;box-shadow:0 2px 12px rgba(220,60,40,.35);transition:opacity .2s;" onmouseover="this.style.opacity=\'.85\'" onmouseout="this.style.opacity=\'1\'">立即詢價</a>'
    + '</div>'
    + '<button id="ham-btn" aria-label="選單" style="display:none;background:none;border:none;cursor:pointer;padding:8px;flex-direction:column;gap:5px;align-items:center;justify-content:center;">'
    + '<span style="display:block;width:22px;height:2px;background:#fff;transition:all .3s;border-radius:2px;"></span>'
    + '<span style="display:block;width:22px;height:2px;background:#fff;transition:all .3s;border-radius:2px;"></span>'
    + '<span style="display:block;width:22px;height:2px;background:#fff;transition:all .3s;border-radius:2px;"></span>'
    + '</button>'
    + '</nav>'
    + '<div id="mob-overlay" style="display:none;position:fixed;inset:0;z-index:8999;background:rgba(3,9,18,.97);backdrop-filter:blur(16px);flex-direction:column;align-items:flex-start;justify-content:center;padding:80px 8%;">'
    + mobileLinks
    + '<a href="contact.html" style="margin-top:32px;display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#dc3c28,#ff6b3a);color:#fff;padding:14px 28px;font-size:15px;font-weight:700;text-decoration:none;border-radius:4px;">立即詢價</a>'
    + '</div>';

  var productHTML = ['光纖雷射切割機','CO₂ 雷射切割機','CNC 雕刻機','雷射打標機','雷射焊接機'].map(function(t){
    return '<a href="products.html" style="display:block;font-size:13px;color:#3a5070;text-decoration:none;margin-bottom:10px;transition:color .2s,padding-left .2s;" onmouseover="this.style.color=\'#e8eef8\';this.style.paddingLeft=\'4px\'" onmouseout="this.style.color=\'#3a5070\';this.style.paddingLeft=\'0\'">' + t + '</a>';
  }).join('');

  var companyHTML = [['關於我們','about.html'],['產品目錄','products.html'],['部落格','blog.html'],['聯絡我們','contact.html'],['索取報價','contact.html']].map(function(c){
    return '<a href="' + c[1] + '" style="display:block;font-size:13px;color:#3a5070;text-decoration:none;margin-bottom:10px;transition:color .2s,padding-left .2s;" onmouseover="this.style.color=\'#e8eef8\';this.style.paddingLeft=\'4px\'" onmouseout="this.style.color=\'#3a5070\';this.style.paddingLeft=\'0\'">' + c[0] + '</a>';
  }).join('');

  var footerHTML = '<footer style="background:#030912;border-top:1px solid rgba(255,255,255,.06);font-family:\'Noto Sans TC\',sans-serif;">'
    + '<div style="padding:56px 5% 40px;display:grid;grid-template-columns:2fr 1fr 1fr 1.3fr;gap:40px;">'

    /* Col 1 */
    + '<div>'
    + '<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">' + LOGO_IMG + BRAND + '</div>'
    + '<p style="font-size:13px;color:#3a5070;line-height:1.9;max-width:270px;margin-bottom:20px;">鴻瑋光電有限公司，專業提供雷射切割機、CNC 雕刻機、雷射打標機設備銷售、安裝與售後服務，深耕台灣製造業 14 年。</p>'
    + '<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">'
    + '<div style="display:flex;align-items:flex-start;gap:7px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3a5070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span style="font-size:12px;color:#3a5070;line-height:1.6;">333 桃園市龜山區忠義路一段 1196-1 號</span></div>'
    + '<div style="display:flex;align-items:center;gap:7px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3a5070" stroke-width="1.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6z"/></svg><a href="tel:0935249966" style="font-size:12px;color:#3a5070;text-decoration:none;" onmouseover="this.style.color=\'#ff5c3a\'" onmouseout="this.style.color=\'#3a5070\'">手機：0935-249-966</a></div>'
    + '<div style="display:flex;align-items:center;gap:7px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3a5070" stroke-width="1.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6z"/></svg><a href="tel:0333206808" style="font-size:12px;color:#3a5070;text-decoration:none;" onmouseover="this.style.color=\'#ff5c3a\'" onmouseout="this.style.color=\'#3a5070\'">市話：03-3206808</a></div>'
    + '<div style="display:flex;align-items:center;gap:7px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3a5070" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg><span style="font-size:12px;color:#3a5070;">傳真：03-3206108</span></div>'
    + '<div style="display:flex;align-items:center;gap:7px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3a5070" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span style="font-size:12px;color:#3a5070;">週一～週五 09:00–18:00</span></div>'
    + '</div>'
    + '<div style="display:flex;gap:10px;">'
    + '<a href="https://www.facebook.com/share/18PykxSWuE/" target="_blank" style="width:34px;height:34px;background:#071223;border:1px solid rgba(255,255,255,.08);border-radius:6px;display:flex;align-items:center;justify-content:center;transition:border-color .2s;" onmouseover="this.style.borderColor=\'#1877F2\'" onmouseout="this.style.borderColor=\'rgba(255,255,255,.08)\'"><svg width="14" height="14" viewBox="0 0 24 24" fill="#7a90b0"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>'
    + '<a href="https://line.me/ti/p/8VNv8wLvRM" target="_blank" style="width:34px;height:34px;background:#071223;border:1px solid rgba(255,255,255,.08);border-radius:6px;display:flex;align-items:center;justify-content:center;transition:border-color .2s;" onmouseover="this.style.borderColor=\'#06C755\'" onmouseout="this.style.borderColor=\'rgba(255,255,255,.08)\'"><svg width="14" height="14" viewBox="0 0 24 24" fill="#7a90b0"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967C23.418 14.024 24 12.304 24 10.304z"/></svg></a>'
    + '</div>'
    + '</div>'

    /* Col 2: Products */
    + '<div><div style="font-family:\'Share Tech Mono\',monospace;font-size:11px;color:#1a3a5a;letter-spacing:3px;margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.05);">PRODUCTS</div>' + productHTML + '</div>'

    /* Col 3: Company */
    + '<div><div style="font-family:\'Share Tech Mono\',monospace;font-size:11px;color:#1a3a5a;letter-spacing:3px;margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.05);">COMPANY</div>' + companyHTML + '</div>'

    /* Col 4: Contact */
    + '<div>'
    + '<div style="font-family:\'Share Tech Mono\',monospace;font-size:11px;color:#1a3a5a;letter-spacing:3px;margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.05);">CONTACT</div>'
    + '<div style="margin-bottom:12px;"><div style="font-size:11px;color:#1a3a5a;font-family:monospace;margin-bottom:3px;">手機</div><a href="tel:0935249966" style="font-size:20px;font-weight:900;display:block;text-decoration:none;background:linear-gradient(135deg,#dc3c28,#ff8c50);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">0935-249-966</a></div>'
    + '<div style="margin-bottom:10px;"><div style="font-size:11px;color:#1a3a5a;font-family:monospace;margin-bottom:3px;">市話</div><a href="tel:0333206808" style="font-size:15px;font-weight:700;color:#e8eef8;text-decoration:none;transition:color .2s;" onmouseover="this.style.color=\'#ff5c3a\'" onmouseout="this.style.color=\'#e8eef8\'">03-3206808</a></div>'
    + '<div style="margin-bottom:16px;"><div style="font-size:11px;color:#1a3a5a;font-family:monospace;margin-bottom:3px;">傳真</div><span style="font-size:14px;color:#3a5070;">03-3206108</span></div>'
    + '<a href="https://line.me/ti/p/8VNv8wLvRM" target="_blank" style="display:flex;align-items:center;justify-content:center;gap:6px;background:#06C755;color:#fff;padding:10px 14px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:700;transition:opacity .2s;" onmouseover="this.style.opacity=\'.88\'" onmouseout="this.style.opacity=\'1\'"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967C23.418 14.024 24 12.304 24 10.304z"/></svg>LINE 立即詢問</a>'
    + '<div style="display:flex;align-items:center;gap:6px;margin-top:10px;"><div style="width:7px;height:7px;border-radius:50%;background:#22c55e;box-shadow:0 0 8px #22c55e;animation:pulse2 2s infinite;flex-shrink:0;"></div><span style="font-size:11px;color:#3a5070;font-family:monospace;">週一至週五 09:00–18:00</span></div>'
    + '</div>'

    + '</div>'
    + '<div style="border-top:1px solid rgba(255,255,255,.05);padding:18px 5%;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">'
    + '<div style="font-size:12px;color:#1a3a5a;font-family:monospace;">© 2026 鴻瑋光電有限公司 · 保留所有權利</div>'
    + '<div style="font-size:12px;color:#1a3a5a;font-family:monospace;">Design by <a href="https://peggyportfolio.netlify.app/" target="_blank" style="color:#ff5c3a;text-decoration:none;">Peggy Lu · 曜呂數位</a></div>'
    + '</div>'
    + '</footer>';

  function inject() {
    document.querySelectorAll('nav:not(#hw-nav), footer').forEach(function(el) { el.remove(); });
    if (!document.getElementById('hw-nav')) {
      document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    var pc = document.querySelector('.page-content');
    if (pc && !pc.style.paddingTop) pc.style.paddingTop = '68px';

    var ham = document.getElementById('ham-btn');
    var overlay = document.getElementById('mob-overlay');
    var desktop = document.getElementById('nav-desktop');
    var open = false;

    function closeMenu() {
      open = false; overlay.style.display = 'none'; document.body.style.overflow = '';
      var spans = ham.querySelectorAll('span');
      spans[0].style.transform = ''; spans[1].style.opacity = ''; spans[2].style.transform = '';
    }

    ham.addEventListener('click', function() {
      open = !open;
      overlay.style.display = open ? 'flex' : 'none';
      document.body.style.overflow = open ? 'hidden' : '';
      var spans = ham.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else { closeMenu(); }
    });

    overlay.addEventListener('click', function(e) { if (e.target === overlay) closeMenu(); });
    overlay.querySelectorAll('a').forEach(function(a) { a.addEventListener('click', closeMenu); });

    function checkWidth() {
      if (window.innerWidth <= 768) {
        ham.style.display = 'flex'; desktop.style.display = 'none';
      } else {
        ham.style.display = 'none'; desktop.style.display = 'flex';
        if (open) closeMenu();
      }
    }
    window.addEventListener('resize', checkWidth);
    checkWidth();

    window.addEventListener('scroll', function() {
      var nav = document.getElementById('hw-nav');
      if (nav) nav.style.boxShadow = window.scrollY > 40 ? '0 2px 24px rgba(0,0,0,.6)' : 'none';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
