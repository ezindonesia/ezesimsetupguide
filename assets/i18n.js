/* ez eSIM support site — i18n, shared chrome, page modules. 6 languages: ja en vi id zh(繁體) ko */
(function () {
  "use strict";
  var cfg = window.EZ || {};

  /* ---------- translations ---------- */
  var T = {
    ja: {
      nav_home: "ホーム", nav_guide: "設定", nav_dev: "対応端末", nav_use: "データ確認", tb_guide: "設定", tb_dev: "対応端末", tb_use: "データ確認",
      btn_support: "WhatsAppで問い合わせ", btn_plans: "プランを見る",
      home_h1: "eSIMを設定する", home_sub: "購入後はここから。手順どおりに進めるだけです。", home_pick: "お使いのスマホは？",
      row_guide_t: "設定ガイド", row_guide_s: "iPhoneとAndroidの手順", row_dev_t: "対応端末", row_dev_s: "お使いの機種を検索", row_use_t: "データ確認", row_use_s: "残りのデータ量をチェック",
      help_t: "ご不明な点はありませんか？", help_s: "ご注文番号をご用意のうえご連絡ください。",
      guide_h1: "eSIMの設定手順", wifi: "先にWi-Fiに接続してください。", keep_open: "画面は閉じないでください。", r_h: "オフのままだと通信できません。",
      i1: "QRコード下の「iOSユーザー」をタップ", i2: "「続ける」をタップ", i3: "インストール完了まで待つ", i4: "ラベルを選ぶ（例：Travel）", i5: "モバイル通信にTravelを選ぶ", i6: "データローミングをオン",
      a1: "QRコード下の「Androidユーザー」をタップ", a2: "「追加」をタップ", a3: "ダウンロード中", a4: "eSIMがオンになっていることを確認", a5: "モバイルデータにeSIMを選ぶ", a6: "データローミングをオン",
      done_t: "これで完了です", done_s: "繋がらないときはWhatsAppでご連絡ください。",
      dev_h1: "対応端末", dev_ph: "機種名で検索（例：iPhone 15）", dev_ok: "対応しています", dev_no: "一覧にありません。設定に「eSIMを追加」があれば使えます。", dev_lock: "SIMロック解除済みの端末が必要です。購入前にキャリアで確認を。", dev_all: "一部抜粋・随時更新", dev_other: "その他",
      use_h1: "データ残量の確認", use_reset: "渡航前に統計をリセット。他の回線との合算を防げます。", use_q1: "残量が実際と合わない", use_a1: "反映に数分かかることがあります。少し待ってから確認を。", use_q2: "「データ使用量」が見つからない", use_a2: "機種により名称が異なります。見つからなければサポートへ。", use_top: "追加チャージはプランにより異なります。サポートへ。"
    },
    en: {
      nav_home: "Home", nav_guide: "eSIM Set up", nav_dev: "Support eSIM Phones", nav_use: "Check data usage", tb_guide: "Setup", tb_dev: "Phones", tb_use: "Data",
      btn_support: "Chat on WhatsApp", btn_plans: "View plans",
      home_h1: "Set up your eSIM", home_sub: "Start here after you buy. Just follow the steps.", home_pick: "Which phone do you have?",
      row_guide_t: "Setup guide", row_guide_s: "Steps for iPhone and Android", row_dev_t: "eSIM Support Phones", row_dev_s: "Search your model", row_use_t: "Check your data usage", row_use_s: "See what's left",
      help_t: "Any questions?", help_s: "Have your order number ready.",
      guide_h1: "eSIM setup steps", wifi: "Connect to Wi-Fi first.", keep_open: "Keep this screen open.", r_h: "If it's off, you won't connect.",
      i1: "Tap “iOS users” under the QR code", i2: "Tap “Continue”", i3: "Wait for the install to finish", i4: "Pick a label (e.g. Travel)", i5: "Choose Travel for mobile data", i6: "Turn on Data Roaming",
      a1: "Tap “Android users” under the QR code", a2: "Tap “Add”", a3: "Wait for the download", a4: "Check the eSIM is on", a5: "Choose the eSIM for mobile data", a6: "Turn on Data Roaming",
      done_t: "You're all set", done_s: "Not connecting? Message us on WhatsApp.",
      dev_h1: "eSIM Support Phones", dev_ph: "Search your phone (e.g. iPhone 15)", dev_ok: "Supported", dev_no: "Not on the list. If Settings shows “Add eSIM”, it works.", dev_lock: "Your phone must be SIM-unlocked. Ask your carrier before you buy.", dev_all: "Partial list, updated regularly", dev_other: "Others",
      use_h1: "Check your data usage", use_reset: "Before your trip, reset the statistics so other lines aren't added in.", use_q1: "The number looks wrong", use_a1: "It can take a few minutes to update. Wait a moment and check again.", use_q2: "I can't find “Data usage”", use_a2: "The name varies by phone. If you can't find it, contact support.", use_top: "Top-up depends on your plan. Ask support."
    },
    id: {
      nav_home: "Beranda", nav_guide: "Setup", nav_dev: "Perangkat", nav_use: "Kuota", tb_guide: "Setup", tb_dev: "Perangkat", tb_use: "Kuota",
      btn_support: "Hubungi via WhatsApp", btn_plans: "Lihat paket",
      home_h1: "Atur eSIM Anda", home_sub: "Mulai dari sini setelah membeli. Cukup ikuti langkahnya.", home_pick: "Pakai ponsel apa?",
      row_guide_t: "Panduan setup", row_guide_s: "Langkah untuk iPhone dan Android", row_dev_t: "Perangkat", row_dev_s: "Cari ponsel Anda", row_use_t: "Cek kuota", row_use_s: "Lihat sisa data",
      help_t: "Ada pertanyaan?", help_s: "Siapkan nomor pesanan saat menghubungi kami.",
      guide_h1: "Langkah setup eSIM", wifi: "Sambungkan ke Wi-Fi dulu.", keep_open: "Jangan tutup layar.", r_h: "Jika mati, tidak akan terhubung.",
      i1: "Ketuk “iOS users” di bawah kode QR", i2: "Ketuk “Lanjutkan”", i3: "Tunggu instalasi selesai", i4: "Pilih label (mis. Travel)", i5: "Pilih Travel untuk data seluler", i6: "Aktifkan Roaming Data",
      a1: "Ketuk “Android users” di bawah kode QR", a2: "Ketuk “Tambah”", a3: "Tunggu unduhan selesai", a4: "Pastikan eSIM aktif", a5: "Pilih eSIM untuk data seluler", a6: "Aktifkan Roaming Data",
      done_t: "Selesai", done_s: "Belum terhubung? Chat kami lewat WhatsApp.",
      dev_h1: "Perangkat yang didukung", dev_ph: "Cari ponsel (mis. iPhone 15)", dev_ok: "Didukung", dev_no: "Tidak ada di daftar. Jika Pengaturan punya “Tambah eSIM”, tetap bisa dipakai.", dev_lock: "Ponsel harus bebas SIM lock. Tanyakan ke operator sebelum membeli.", dev_all: "Daftar sebagian, diperbarui berkala", dev_other: "Lainnya",
      use_h1: "Cek sisa kuota", use_reset: "Sebelum berangkat, reset statistik agar tidak tercampur dengan jalur lain.", use_q1: "Sisa kuota tidak sesuai", use_a1: "Pembaruan bisa tertunda beberapa menit. Tunggu lalu cek lagi.", use_q2: "Menu “Data usage” tidak ketemu", use_a2: "Nama menu beda tiap perangkat. Jika tidak ketemu, hubungi support.", use_top: "Top-up tergantung paket Anda. Tanyakan ke support."
    },
  };
  var LANGS = [["id", "Bahasa Indonesia", "id"], ["en", "English", "en"], ["ja", "日本語", "ja"]];
  var lang = "en";
  var hooks = [];

  /* ---------- icons ---------- */
  function ic(p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>"; }
  var I = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24zM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74 1.96.84 2.55.9 3.14.74.9-.19 1.46-.86 1.67-1.45.2-.58.2-1.08.14-1.18-.06-.1-.23-.17-.48-.29-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48z"/></svg>',
    apple: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>',
    android: '<svg viewBox="2.4 0 19.2 23" fill="currentColor" aria-hidden="true"><path d="M6.2 9.5h11.6v8.2a1.3 1.3 0 0 1-1.3 1.3H15v2.3a1.2 1.2 0 0 1-2.4 0V19h-1.2v2.3a1.2 1.2 0 0 1-2.4 0V19H7.5a1.3 1.3 0 0 1-1.3-1.3zM3.6 9.7a1.2 1.2 0 0 1 2.4 0v5.2a1.2 1.2 0 0 1-2.4 0zm14.4 0a1.2 1.2 0 0 1 2.4 0v5.2a1.2 1.2 0 0 1-2.4 0zM6.4 8.5a5.6 5.6 0 0 1 11.2 0zM8.7 3.1l-1.1-1.7a.4.4 0 0 1 .7-.4l1.1 1.7a5.6 5.6 0 0 1 4.2 0L14.7 1a.4.4 0 0 1 .7.4l-1.1 1.7M9.4 6.3a.55.55 0 1 0 0 1.1.55.55 0 0 0 0-1.1zm5.2 0a.55.55 0 1 0 0 1.1.55.55 0 0 0 0-1.1z" fill-rule="evenodd"/></svg>',
    globe: ic('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 4 5.6 4 9s-1.2 6.4-4 9c-2.8-2.6-4-5.6-4-9s1.2-6.4 4-9z"/>'),
    home: ic('<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>'),
    steps: ic('<path d="M12 3v12m0 0l-4-4m4 4l4-4"/><path d="M4 17v3h16v-3"/>'),
    phone: ic('<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>'),
    chart: ic('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    chev: ic('<path d="M9 5l7 7-7 7"/>'),
    search: ic('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'),
    check: ic('<circle cx="12" cy="12" r="10"/><path d="M7.5 12.5l3 3 6-6.5"/>'),
    info: ic('<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7.5v.5"/>'),
    wifi: ic('<path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0"/><circle cx="12" cy="19.5" r="1" fill="currentColor"/>'),
    chat: ic('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>')
  };

  /* ---------- schematic phone illustrations (language-independent) ---------- */
  var NAVY = "#002954", RED = "#DE2137", MIST = "#EDF1F7", GREY = "#c3cee0", OK = "#18794e";
  function frame(inner) {
    return '<svg viewBox="0 0 120 220" aria-hidden="true"><rect x="3" y="3" width="114" height="214" rx="20" fill="#fff" stroke="' + NAVY + '" stroke-width="3"/><rect x="10" y="10" width="100" height="200" rx="14" fill="' + MIST + '"/><rect x="46" y="15" width="28" height="6" rx="3" fill="' + NAVY + '"/>' + inner + "</svg>";
  }
  function rows(n, hl, y0, gap, extra) {
    var s = "";
    for (var i = 0; i < n; i++) {
      var y = y0 + i * gap, on = i === hl;
      s += '<rect x="16" y="' + y + '" width="88" height="30" rx="9" fill="#fff"' + (on ? ' stroke="' + RED + '" stroke-width="2.5"' : "") + "/>";
      s += '<rect x="26" y="' + (y + 12) + '" width="' + (on ? 44 : 36) + '" height="5" rx="2.5" fill="' + (on ? NAVY : GREY) + '"/>';
      if (extra) s += extra(i, y, on);
    }
    return s;
  }
  var QRBITS = "1011010110101101001011010011010110110";
  function finder(x, y) {
    return '<rect x="' + x + '" y="' + y + '" width="22" height="22" rx="3" fill="' + NAVY + '"/><rect x="' + (x + 4) + '" y="' + (y + 4) + '" width="14" height="14" rx="1.5" fill="#fff"/><rect x="' + (x + 7.5) + '" y="' + (y + 7.5) + '" width="7" height="7" rx="1" fill="' + NAVY + '"/>';
  }
  function qr() {
    var s = '<rect x="24" y="40" width="72" height="72" rx="8" fill="#fff"/>', k = 0, x0 = 30, y0 = 46, c = 6;
    s += finder(x0, y0) + finder(x0 + 36, y0) + finder(x0, y0 + 36);
    for (var r = 0; r < 10; r++) for (var q = 0; q < 10; q++) {
      var inF = (r < 4 && q < 4) || (r < 4 && q > 5) || (r > 5 && q < 4);
      if (inF) continue;
      if (QRBITS.charAt(k++ % QRBITS.length) === "1") s += '<rect x="' + (x0 + q * c) + '" y="' + (y0 + r * c) + '" width="5" height="5" rx="1" fill="' + NAVY + '"/>';
    }
    return s + '<rect x="22" y="128" width="76" height="28" rx="14" fill="' + RED + '"/><rect x="42" y="139" width="36" height="5" rx="2.5" fill="#fff"/>';
  }
  var P = {
    qr: function () { return qr(); },
    prompt: function () {
      return '<rect x="16" y="64" width="88" height="88" rx="12" fill="#fff"/><rect x="30" y="80" width="60" height="5" rx="2.5" fill="' + GREY + '"/><rect x="38" y="94" width="44" height="5" rx="2.5" fill="' + GREY + '"/><rect x="16" y="116" width="88" height="1.5" fill="' + MIST + '"/><rect x="26" y="134" width="24" height="5" rx="2.5" fill="' + GREY + '"/><rect x="60" y="126" width="38" height="20" rx="10" fill="' + RED + '"/><rect x="70" y="134" width="18" height="4" rx="2" fill="#fff"/>';
    },
    loading: function () {
      return '<circle cx="60" cy="96" r="22" fill="none" stroke="#cfd8e6" stroke-width="7"/><path d="M60 74a22 22 0 0 1 22 22" fill="none" stroke="' + RED + '" stroke-width="7" stroke-linecap="round"/><rect x="24" y="148" width="72" height="9" rx="4.5" fill="#cfd8e6"/><rect x="24" y="148" width="44" height="9" rx="4.5" fill="' + NAVY + '"/>';
    },
    list: function (hl) {
      return rows(4, hl, 40, 40, function (i, y, on) { return on ? '<circle cx="91" cy="' + (y + 15) + '" r="6" fill="' + RED + '"/><path d="M88 ' + (y + 15) + 'l2 2 4-4" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' : ""; });
    },
    toggle: function () {
      return rows(3, 2, 54, 42, function (i, y, on) {
        return '<rect x="72" y="' + (y + 8) + '" width="26" height="14" rx="7" fill="' + (on ? OK : "#cfd8e6") + '"/><circle cx="' + (on ? 91 : 79) + '" cy="' + (y + 15) + '" r="5" fill="#fff"/>';
      });
    },
    scan: function () {
      var c = 'stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"';
      return '<rect x="16" y="44" width="88" height="124" rx="10" fill="' + NAVY + '"/><path d="M36 76v-10h10M84 66h10v10M94 108v10H84M46 118H36v-10" ' + c + '/><rect x="38" y="91" width="44" height="3" rx="1.5" fill="' + RED + '"/>';
    },
    add: function () {
      return rows(3, -1, 40, 40) + '<rect x="16" y="160" width="88" height="30" rx="9" fill="#fff" stroke="' + RED + '" stroke-width="2.5"/><circle cx="34" cy="175" r="8" fill="' + RED + '"/><path d="M34 171v8M30 175h8" stroke="#fff" stroke-width="2" stroke-linecap="round"/><rect x="48" y="172" width="38" height="5" rx="2.5" fill="' + NAVY + '"/>';
    }
  };
  function phone(kind, hl) { return frame(P[kind](hl)); }

  /* ---------- helpers ---------- */
  function t(k) { return (T[lang] && T[lang][k]) || T.en[k] || ""; }
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function detect() {
    var q = (location.search.match(/[?&]lang=(\w+)/) || [])[1];
    if (q && T[q]) return q;
    try { var s = localStorage.getItem("ez_lang"); if (s && T[s]) return s; } catch (e) {}
    var df = (cfg && cfg.defaultLang) || "vi";
    return T[df] ? df : "en";
  }

  /* ---------- shared chrome ---------- */
  var page = document.body.dataset.page;
  var NAV = [["index.html", "home", "nav_home", I.home, "nav_home"], ["guide.html", "guide", "nav_guide", I.steps, "tb_guide"], ["devices.html", "dev", "nav_dev", I.phone, "tb_dev"], ["usage.html", "use", "nav_use", I.chart, "tb_use"]];

  function chrome() {
    var h = '<div class="wrap"><a class="logo" href="index.html"><img src="assets/img/logo-color.png" alt="ez eSIM"></a><nav class="dnav" aria-label="Main">';
    NAV.forEach(function (n) { h += '<a href="' + n[0] + '"' + (page === n[1] ? ' aria-current="page"' : "") + ' data-i18n="' + n[2] + '"></a>'; });
    h += '</nav><div class="langwrap"><button class="langbtn" type="button" aria-haspopup="true" aria-expanded="false" id="langbtn" aria-label="Language">' + I.globe + '</button><ul class="langmenu" id="langmenu" role="menu" hidden>';
    LANGS.forEach(function (l) { h += '<li role="none"><button role="menuitemradio" aria-checked="false" data-lang="' + l[0] + '">' + l[1] + "</button></li>"; });
    h += '</ul></div><button class="burger" type="button" id="burger" aria-label="Menu" aria-expanded="false" aria-controls="navmenu"><i></i><i></i><i></i></button></div>';
    h += '<nav class="navmenu" id="navmenu" aria-label="Menu" hidden><div class="wrap">';
    NAV.forEach(function (n) { h += '<a href="' + n[0] + '"' + (page === n[1] ? ' aria-current="page"' : "") + ">" + n[3] + '<span data-i18n="' + n[2] + '"></span></a>'; });
    h += '<div class="navcta"><a class="btn wa" href="' + (cfg.waUrl || "#") + '">' + I.wa + '<span data-i18n="btn_support"></span></a><a class="btn ghost" href="' + (cfg.plansUrl || "#") + '" data-i18n="btn_plans"></a></div></div></nav>';
    $("#hdr").innerHTML = h;

    var tb = "";
    NAV.forEach(function (n) { tb += '<a href="' + n[0] + '"' + (page === n[1] ? ' aria-current="page"' : "") + ">" + n[3] + '<span data-i18n="' + n[4] + '"></span></a>'; });
    $("#tabbar").innerHTML = tb;

    $("#ftr").innerHTML = '<div class="wrap"><img src="assets/img/logo-white.png" alt="ez eSIM"><span>© ' + new Date().getFullYear() + " ez eSIM</span></div>";

    var hs = $("#help");
    if (hs) hs.innerHTML = '<div class="help"><h2 data-i18n="help_t"></h2><a class="btn wa" href="' + (cfg.waUrl || "#") + '" target="_blank" rel="noopener">' + I.wa + '<span data-i18n="btn_support"></span></a></div>';

    var bg = $("#burger"), nm = $("#navmenu");
    function navClose() { nm.hidden = true; bg.setAttribute("aria-expanded", "false"); bg.classList.remove("on"); }
    bg.addEventListener("click", function (e) { e.stopPropagation(); var o = nm.hidden; nm.hidden = !o; bg.setAttribute("aria-expanded", o ? "true" : "false"); bg.classList.toggle("on", o); $("#langmenu").hidden = true; });
    document.addEventListener("click", function (e) { if (!e.target.closest("#navmenu")) navClose(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") navClose(); });
    var btn = $("#langbtn"), menu = $("#langmenu");
    btn.addEventListener("click", function (e) { e.stopPropagation(); var open = menu.hidden; menu.hidden = !open; navClose(); btn.setAttribute("aria-expanded", open ? "true" : "false"); });
    document.addEventListener("click", function () { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); } });
    menu.addEventListener("click", function (e) { var b = e.target.closest("[data-lang]"); if (b) setLang(b.dataset.lang); });
  }

  function setLang(l) {
    lang = l;
    var meta = LANGS.filter(function (x) { return x[0] === l; })[0];
    document.documentElement.lang = meta[2];
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll("#langmenu [data-lang]").forEach(function (b) { b.setAttribute("aria-checked", b.dataset.lang === l ? "true" : "false"); });
    var tk = { guide: "guide_h1", dev: "dev_h1", use: "use_h1" }[page];
    document.title = (tk ? t(tk) + " | " : "") + "ez eSIM";
    try { localStorage.setItem("ez_lang", l); } catch (e) {}
    hooks.forEach(function (f) { f(); });
  }

  /* ---------- lightbox (tap a real screenshot to enlarge) ---------- */
  function lightbox(src) {
    var lb = document.createElement("div");
    lb.className = "lb"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true");
    lb.innerHTML = '<img src="' + src + '" alt="">';
    function close() { lb.remove(); document.removeEventListener("keydown", key); }
    function key(e) { if (e.key === "Escape") close(); }
    lb.addEventListener("click", close); document.addEventListener("keydown", key);
    document.body.appendChild(lb);
  }

  /* ---------- page: guide ---------- */
  var STEPS = {
    ios: [["img", "assets/setup/ios-1.webp"], ["img", "assets/setup/ios-2.webp"], ["img", "assets/setup/ios-3.webp"], ["img", "assets/setup/ios-4.webp"], ["img", "assets/setup/ios-5.webp"], ["img", "assets/setup/ios-6.webp"]],
    android: [["img", "assets/setup/android-1.webp"], ["img", "assets/setup/android-2.webp"], ["img", "assets/setup/android-3.webp"], ["img", "assets/setup/android-4.webp"], ["img", "assets/setup/android-5.webp"], ["img", "assets/setup/android-6.webp"]]
  };
  var HINTS = { ios: { 3: "keep_open", 6: "r_h" }, android: { 3: "keep_open", 6: "r_h" } };
  function guide() {
    var os = /android/i.test(navigator.userAgent) ? "android" : "ios";
    if (location.hash === "#android") os = "android"; else if (location.hash === "#ios") os = "ios";
    var list = $("#steps"), seg = $("#seg");
    function render() {
      var pre = os === "ios" ? "i" : "a", h = "";
      STEPS[os].forEach(function (s, i) {
        var n = i + 1, hk = HINTS[os][n];
        var real = s[0] === "img", ttl = esc(t(pre + n));
        h += '<li class="slide' + (real ? " real" : "") + '"><div class="top"><span class="n">' + n + "</span><div><h3>" + ttl + "</h3>" +
          (hk ? '<p class="hint' + (hk === "r_h" ? " warn" : "") + '">' + esc(t(hk)) + "</p>" : "") +
          '</div></div><div class="ph">' + (real ? '<button type="button" class="zoom" data-src="' + s[1] + '" aria-label="' + ttl + '"><img src="' + s[1] + '" alt="" loading="lazy"></button>' : phone(s[0], s[1])) + "</div></li>";
      });
      list.innerHTML = h; list.classList.add("car"); list.scrollLeft = 0; buildNav();
      seg.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-selected", b.dataset.os === os ? "true" : "false"); });
    }
    var nav = document.createElement("div"); nav.className = "carnav"; nav.id = "carnav"; list.parentNode.insertBefore(nav, list.nextSibling);
    var cur = 0;
    function slides() { return list.querySelectorAll(".slide"); }
    function go(i) { var sl = slides(); i = Math.max(0, Math.min(sl.length - 1, i)); list.scrollTo({ left: sl[i].offsetLeft - (list.clientWidth - sl[i].offsetWidth) / 2, behavior: "smooth" }); }
    function mark(i) {
      cur = i; var ds = nav.querySelectorAll(".dot");
      ds.forEach(function (x, k) { x.classList.toggle("on", k === i); });
      nav.querySelector(".prev").disabled = i === 0; nav.querySelector(".next").disabled = i === ds.length - 1;
      nav.querySelector(".cnt").textContent = (i + 1) + " / " + ds.length;
    }
    function buildNav() {
      var n = slides().length, h = '<button type="button" class="prev" aria-label="Previous">' + I.chev + '</button><div class="dots">';
      for (var k = 0; k < n; k++) h += '<button type="button" class="dot" data-i="' + k + '" aria-label="' + (k + 1) + '"></button>';
      nav.innerHTML = h + '</div><span class="cnt"></span><button type="button" class="next" aria-label="Next">' + I.chev + "</button>"; mark(0);
    }
    nav.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.classList.contains("prev")) go(cur - 1); else if (b.classList.contains("next")) go(cur + 1); else if (b.dataset.i) go(+b.dataset.i);
    });
    var tick;
    list.addEventListener("scroll", function () {
      clearTimeout(tick); tick = setTimeout(function () {
        var sl = slides(), c = list.scrollLeft + list.clientWidth / 2, best = 0, bd = 1e9;
        sl.forEach(function (x, k) { var dd = Math.abs(x.offsetLeft + x.offsetWidth / 2 - c); if (dd < bd) { bd = dd; best = k; } });
        mark(best);
      }, 40);
    });
    list.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") go(cur + 1); else if (e.key === "ArrowLeft") go(cur - 1); });
    list.tabIndex = 0;
    list.addEventListener("click", function (e) {
      var z = e.target.closest(".zoom"); if (z) lightbox(z.dataset.src);
    });
    seg.addEventListener("click", function (e) {
      var b = e.target.closest("[data-os]"); if (!b) return;
      os = b.dataset.os; try { history.replaceState(null, "", "#" + os); } catch (x) {}
      render();
    });
    $("#done").innerHTML = I.check + "<div><b>" + "</b><span></span></div>";
    function doneText() { var d = $("#done div"); d.innerHTML = "<b>" + esc(t("done_t")) + "</b><span>" + esc(t("done_s")) + "</span>"; }
    hooks.push(render, doneText);
  }

  /* ---------- page: devices ---------- */
  var DEV = [
    ["Apple", [["iPhone 17 / 17 Pro", ["iphone17"]], ["iPhone 16 / 16 Pro", ["iphone16"]], ["iPhone 15", ["iphone15"]], ["iPhone 14", ["iphone14"]], ["iPhone 13", ["iphone13"]], ["iPhone SE (3rd gen)", ["iphonese3", "iphonese"]], ["iPad Pro / Air", ["ipadpro", "ipadair"]]]],
    ["Samsung", [["Galaxy S25", ["galaxys25"]], ["Galaxy S24", ["galaxys24"]], ["Galaxy Z Fold", ["galaxyzfold", "zfold"]], ["Galaxy Z Flip", ["galaxyzflip", "zflip"]]]],
    ["Google", [["Pixel 9", ["pixel9"]], ["Pixel 8", ["pixel8"]], ["Pixel 7", ["pixel7"]], ["Pixel Fold", ["pixelfold"]]]],
    ["other", [["Sony Xperia 1", ["xperia1"]], ["Sony Xperia 10", ["xperia10"]]]]
  ];
  function norm(s) { return s.toLowerCase().replace(/[\s\-_/()]/g, ""); }
  function devices() {
    var box = $("#groups"), inp = $("#q"), v = $("#verdict");
    function render() {
      var q = norm(inp.value), any = false, h = "";
      DEV.forEach(function (g) {
        h += '<section class="grp"><h2>' + esc(g[0] === "other" ? t("dev_other") : g[0]) + '</h2><ul class="chips">';
        g[1].forEach(function (d) {
          var hit = q.length > 1 && d[1].some(function (k) { return k.indexOf(q) > -1 || (q.indexOf(k) > -1); });
          if (hit) any = true;
          h += '<li class="' + (q.length > 1 ? (hit ? "hit" : "dim") : "") + '">' + esc(d[0]) + "</li>";
        });
        h += "</ul></section>";
      });
      box.innerHTML = h;
      if (q.length > 1) {
        v.className = "verdict " + (any ? "ok" : "no");
        v.innerHTML = (any ? I.check : I.info) + "<span>" + esc(any ? t("dev_ok") : t("dev_no")) + "</span>";
      } else { v.className = "verdict"; v.innerHTML = ""; }
    }
    inp.addEventListener("input", render);
    hooks.push(render);
  }

  /* ---------- page: usage ---------- */
  var USE = {
    ios: { path: ["Settings", "Cellular", "Current Period"], imgs: ["assets/usage/ios-1.webp", "assets/usage/ios-2.webp", "assets/usage/ios-3.webp"] },
    samsung: { path: ["Settings", "Connections", "Data usage", "Mobile data usage"], imgs: ["assets/usage/samsung-1.webp", "assets/usage/samsung-2.webp", "assets/usage/samsung-3.webp"] }
  };
  function usage() {
    var os = /android/i.test(navigator.userAgent) ? "samsung" : "ios", seg = $("#seg");
    function render() {
      var u = USE[os], p = "";
      u.path.forEach(function (s, i) { p += (i ? '<li class="sep" aria-hidden="true">›</li>' : "") + '<li class="' + (i === u.path.length - 1 ? "last" : "") + '">' + esc(s) + "</li>"; });
      $("#path").innerHTML = p;
      $("#strip").innerHTML = u.imgs.map(function (f) { return '<img src="' + (/\.\w+$/.test(f) ? f : (cfg.usageImgBase || "") + f + ".webp") + '" alt="" loading="lazy">'; }).join("");
      seg.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-selected", b.dataset.os === os ? "true" : "false"); });
    }
    seg.addEventListener("click", function (e) { var b = e.target.closest("[data-os]"); if (b) { os = b.dataset.os; render(); } });
    hooks.push(render);
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-icon]").forEach(function (el) { el.innerHTML = I[el.dataset.icon] || ""; });
    chrome();
    if (page === "guide") guide();
    if (page === "dev") devices();
    if (page === "use") usage();
    setLang(detect());
  });
})();
