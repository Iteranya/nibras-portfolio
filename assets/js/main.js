/* Prestasi ledger — data disalin apa adanya dari Achievement.jpg
   (typo & ketidaksesuaian tingkat di sumber TIDAK diperbaiki; lihat README.md) */
(function () {
  "use strict";

  var DATA = [
    { n: 1,  t: "Medali Emas Tapak Suci Diponegoro Cup",                                              tier: "nasional",  f: "pencak-silat", rank: "emas" },
    { n: 2,  t: "Juara 1 Tapak Suci Diponegoro Cup",                                                   tier: "nasional",  f: "pencak-silat", rank: "juara-1" },
    { n: 3,  t: "Juara 1 Kejurkab IPSI Pelajar Gunungkidul Kelas E",                                   tier: "nasional",  f: "pencak-silat", rank: "juara-1" },
    { n: 4,  t: "Medali Emas Olimpiade Akademik Nasional III Bidang Ekonomi",                          tier: "nasional",  f: "akademik",     rank: "emas" },
    { n: 5,  t: "Medali Emas Olimpiade Akademik Nasional III Bidang Sejarah",                          tier: "nasional",  f: "akademik",     rank: "emas" },
    { n: 6,  t: "Juara 1 Olimpiade Akademik Nasional III Bidang Sejarah Kebudayaan Islam",             tier: "nasional",  f: "akademik",     rank: "juara-1" },
    { n: 7,  t: "Medali Emas Olimpiade Akademik Nasional III Bidang Bahasa Indonesia",                 tier: "nasional",  f: "akademik",     rank: "emas" },
    { n: 8,  t: "Medali Emas Olimpiade Akademik Nasional III Bidang Bahasa Inggris",                   tier: "nasional",  f: "akademik",     rank: "emas" },
    { n: 9,  t: "Medali Emas National Islamic Smart Student Competition Bidang Sejarah Kebudayaan Islam", tier: "nasional", f: "keagamaan", rank: "emas" },
    { n: 10, t: "Medali Emas Kejurnas Tapak Suci Barie Irsyad Championship 3",                         tier: "nasional",  f: "pencak-silat", rank: "emas" },
    { n: 11, t: "Medali Perak Kejuaraan Nasional Tapak Suci Barie Irsyad Championship 2",              tier: "nasional",  f: "pencak-silat", rank: "perak" },
    { n: 12, t: "Medali Perak Olimpiade Akademik Nasional III Bidang Akidah Akhlak",                   tier: "nasional",  f: "keagamaan",    rank: "perak" },
    { n: 13, t: "Medali Perak Olimpiade Akademik Nasional III Bidang Fiqih",                           tier: "nasional",  f: "keagamaan",    rank: "perak" },
    { n: 14, t: "Medali Perak National Islamic Smart Student Competition Bidang Akidah Akhlak",        tier: "nasional",  f: "keagamaan",    rank: "perak" },
    { n: 15, t: "Medali Perunggu Olympiad Bidang MFQ",                                                 tier: "nasional",  f: "keagamaan",    rank: "perunggu" },
    { n: 16, t: "Medali Perunggu Olimpiade Bahasa Bidang Bahasa Arab",                                 tier: "nasional",  f: "bahasa",       rank: "perunggu" },
    { n: 17, t: "Medali Perunggu National Islamic Smart Student Competition Bidang Bahasa Arab",       tier: "nasional",  f: "bahasa",       rank: "perunggu" },
    { n: 18, t: "Medali Perunggu National Islamic Smart Student Competition Bidang Quran Hadist",      tier: "nasional",  f: "keagamaan",    rank: "perunggu" },
    { n: 19, t: "Medali Perunggu Olimpiade Akademik Nasional III Bidang Matematika",                   tier: "nasional",  f: "akademik",     rank: "perunggu" },
    { n: 20, t: "Medali Perunggu Olimpiade PAI Syarif Hidayatullah",                                   tier: "nasional",  f: "keagamaan",    rank: "perunggu" },
    { n: 21, t: "Medali Perunggu POPDA Pencak Silat DIY 2025 Kelas E Putra",                           tier: "provinsi",  f: "pencak-silat", rank: "perunggu" },
    { n: 22, t: "Juara 2 Olympicad Bidang MFQ",                                                        tier: "provinsi",  f: "keagamaan",    rank: "juara-2" },
    { n: 23, t: "Juara 3 Barie Irsyad Cup (Tapak Suci)",                                               tier: "provinsi",  f: "pencak-silat", rank: "juara-3" },
    { n: 24, t: "Medali Emas Kejuaraan Pencak Silat Lawu Competition",                                 tier: "kabupaten", f: "pencak-silat", rank: "emas" },
    { n: 25, t: "Juara 1 Kejurkab IPSI Pelajar Gunungkidul Kelas E",                                   tier: "kabupaten", f: "pencak-silat", rank: "juara-1" },
    { n: 26, t: "Juara 1 Musabaqoh Fahmil Quran",                                                      tier: "kabupaten", f: "keagamaan",    rank: "juara-1" },
    { n: 27, t: "Juara 2 Olimpiade Bahasa Arab",                                                       tier: "kabupaten", f: "bahasa",       rank: "juara-2" },
    { n: 28, t: "Juara 2 Invitasi Pencak Silat Pelajar Gunungkidul 2024",                              tier: "kabupaten", f: "pencak-silat", rank: "juara-2" },
    { n: 29, t: "Juara 2 Kejurkab IPSI Dewasa Kelas C",                                                tier: "kabupaten", f: "pencak-silat", rank: "juara-2" },
    { n: 30, t: "Juara 2 Olympicad Bidang MFQ",                                                        tier: "kabupaten", f: "keagamaan",    rank: "juara-2" },
    { n: 31, t: "Juara 3 Liga Futsal Pelajar Gunungkidul (LFPG)",                                      tier: "kabupaten", f: "olahraga",     rank: "juara-3" },
    { n: 32, t: "Juara 4 (Harapan 1) Pekan Olahraga Pondok Pesantren Kabupaten (POSPEKAB) Tenis Meja Ganda Putra", tier: "kabupaten", f: "olahraga", rank: "juara-4" },
    { n: 33, t: "Juara 4 Sepak Bola Pantai Kabupaten Gunungkidul",                                     tier: "kabupaten", f: "olahraga",     rank: "juara-4" }
  ];

  var TIER_LABEL = { nasional: "Nasional", provinsi: "Provinsi", kabupaten: "Kabupaten" };
  var F_LABEL = {
    "pencak-silat": "Pencak Silat",
    "akademik": "Akademik",
    "keagamaan": "Keagamaan",
    "bahasa": "Bahasa",
    "olahraga": "Olahraga Lain"
  };
  var RANK_LABEL = {
    "emas": "Emas", "perak": "Perak", "perunggu": "Perunggu",
    "juara-1": "Juara 1", "juara-2": "Juara 2", "juara-3": "Juara 3", "juara-4": "Juara 4"
  };
  var RANK_KEY = {
    "emas": "emas", "perak": "perak", "perunggu": "perunggu",
    "juara-1": "lain", "juara-2": "lain", "juara-3": "lain", "juara-4": "lain"
  };

  var list  = document.getElementById("list");
  var count = document.getElementById("count");
  var q     = document.getElementById("q");
  if (!list) return;

  var state = { tier: "all", bidang: "all", q: "" };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function matches(item) {
    if (state.tier !== "all" && item.tier !== state.tier) return false;
    if (state.bidang !== "all" && item.f !== state.bidang) return false;
    if (state.q) {
      var hay = (item.t + " " + TIER_LABEL[item.tier] + " " + F_LABEL[item.f] + " " + RANK_LABEL[item.rank]).toLowerCase();
      if (hay.indexOf(state.q.toLowerCase()) === -1) return false;
    }
    return true;
  }

  function render() {
    var rows = DATA.filter(matches);
    count.textContent = rows.length;

    if (!rows.length) {
      list.innerHTML = '<li class="empty">Tidak ada prestasi yang cocok.</li>';
      return;
    }

    list.innerHTML = rows.map(function (it) {
      return '<li class="row">' +
        '<span class="row__no">' + String(it.n).padStart(2, "0") + '</span>' +
        '<div class="row__body">' +
          '<p class="row__t">' + esc(it.t) + '</p>' +
          '<div class="row__tags">' +
            '<span class="tag tag--tier">Tingkat ' + TIER_LABEL[it.tier] + '</span>' +
            '<span class="tag">' + F_LABEL[it.f] + '</span>' +
          '</div>' +
        '</div>' +
        '<span class="row__rank" data-rank="' + RANK_KEY[it.rank] + '">' + RANK_LABEL[it.rank] + '</span>' +
      '</li>';
    }).join("");
  }

  // tier chips (satu aktif)
  Array.prototype.forEach.call(document.querySelectorAll("[data-tier]"), function (btn) {
    btn.addEventListener("click", function () {
      state.tier = btn.getAttribute("data-tier");
      Array.prototype.forEach.call(document.querySelectorAll("[data-tier]"), function (b) {
        b.classList.toggle("is-on", b === btn);
      });
      render();
    });
  });

  // bidang chips (toggle banyak)
  Array.prototype.forEach.call(document.querySelectorAll("[data-bidang]"), function (btn) {
    btn.addEventListener("click", function () {
      var v = btn.getAttribute("data-bidang");
      var on = btn.classList.contains("is-on");

      if (state.bidang === v) {          // tekan lagi = matikan
        state.bidang = "all";
        btn.classList.remove("is-on");
      } else {
        state.bidang = v;
        Array.prototype.forEach.call(document.querySelectorAll("[data-bidang]"), function (b) {
          b.classList.toggle("is-on", b === btn);
        });
      }
      render();
    });
  });

  if (q) {
    q.addEventListener("input", function () {
      state.q = q.value.trim();
      render();
    });
  }

  render();
})();
