/* Mountain Crest Girls Wrestling — shared site behavior */
(function () {
  "use strict";

  /* ---------------- Navigation ---------------- */

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    // Mark the current page in the nav.
    var here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".site-nav a").forEach(function (link) {
      var target = link.getAttribute("href");
      if (target === here) link.setAttribute("aria-current", "page");
    });

    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------------- Dates ---------------- */

  var MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Parse "YYYY-MM-DD" as a local date (avoids the UTC off-by-one day).
  function parseDate(iso) {
    var parts = String(iso).split("-");
    return new Date(+parts[0], +parts[1] - 1, +parts[2]);
  }

  function startOfToday() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }

  function typeLabel(type) {
    if (type === "dual") return "Dual";
    if (type === "tournament") return "Tournament";
    return "Team Event";
  }

  function dateRangeText(ev) {
    var start = parseDate(ev.date);
    var text = DAYS[start.getDay()] + ", " + MONTHS[start.getMonth()] + " " + start.getDate();
    if (ev.endDate) {
      var end = parseDate(ev.endDate);
      text += "–" + (end.getMonth() === start.getMonth()
        ? end.getDate()
        : MONTHS[end.getMonth()] + " " + end.getDate());
    }
    return text;
  }

  function getEvents() {
    var list = (window.MCW_SCHEDULE || []).slice();
    list.sort(function (a, b) { return parseDate(a.date) - parseDate(b.date); });
    return list;
  }

  function upcoming(list) {
    var today = startOfToday();
    return list.filter(function (ev) {
      return parseDate(ev.endDate || ev.date) >= today;
    });
  }

  /* ---------------- Event rendering ---------------- */

  function eventNode(ev, isNext) {
    var start = parseDate(ev.date);

    var row = document.createElement("div");
    row.className = "event" + (isNext ? " is-next" : "");
    row.dataset.type = ev.type || "event";

    var dateBox = document.createElement("div");
    dateBox.className = "event-date";
    dateBox.innerHTML =
      '<span class="dow">' + DAYS[start.getDay()] + "</span>" +
      '<span class="day">' + start.getDate() + "</span>";

    var body = document.createElement("div");
    var title = document.createElement("p");
    title.className = "event-title";
    title.textContent = (ev.type === "dual" && ev.home === false ? "at " : "") + ev.title;

    var metaBits = [dateRangeText(ev)];
    if (ev.time) metaBits.push(ev.time);
    if (ev.location) metaBits.push(ev.location);

    var meta = document.createElement("p");
    meta.className = "event-meta";
    meta.textContent = metaBits.join(" · ");
    body.appendChild(title);
    body.appendChild(meta);

    if (ev.notes) {
      var notes = document.createElement("p");
      notes.className = "event-meta";
      notes.textContent = ev.notes;
      body.appendChild(notes);
    }

    var tags = document.createElement("div");
    tags.className = "event-tags";
    tags.innerHTML = '<span class="tag tag-' + (ev.type || "event") + '">' + typeLabel(ev.type) + "</span>";
    if (ev.home === true) tags.innerHTML += '<span class="tag tag-home">Home</span>';
    else if (ev.home === false) tags.innerHTML += '<span class="tag tag-away">Away</span>';

    row.appendChild(dateBox);
    row.appendChild(body);
    row.appendChild(tags);
    return row;
  }

  /* ---------------- Home page: next events ---------------- */

  function initHomePreview() {
    var host = document.getElementById("home-upcoming");
    if (!host) return;

    var next = upcoming(getEvents()).slice(0, 4);
    if (!next.length) {
      host.innerHTML = '<p class="empty-state">The next season schedule is being finalized — check back soon.</p>';
      return;
    }
    next.forEach(function (ev, i) { host.appendChild(eventNode(ev, i === 0)); });
  }

  /* ---------------- Schedule page ---------------- */

  function initSchedulePage() {
    var host = document.getElementById("schedule-list");
    if (!host) return;

    var all = getEvents();
    var nextEvent = upcoming(all)[0];

    renderNextUp(nextEvent);
    render("all");

    document.querySelectorAll(".filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        render(btn.dataset.filter);
      });
    });

    var download = document.getElementById("download-ics");
    if (download) {
      download.addEventListener("click", function (e) {
        e.preventDefault();
        downloadIcs(all);
      });
    }

    function render(filter) {
      host.innerHTML = "";
      var shown = all.filter(function (ev) {
        if (filter === "all") return true;
        if (filter === "upcoming") return parseDate(ev.endDate || ev.date) >= startOfToday();
        if (filter === "home") return ev.home === true;
        return (ev.type || "event") === filter;
      });

      if (!shown.length) {
        host.innerHTML = '<p class="empty-state">No events match that filter.</p>';
        return;
      }

      var currentMonth = null;
      var group = null;
      shown.forEach(function (ev) {
        var d = parseDate(ev.date);
        var key = d.getFullYear() + "-" + d.getMonth();
        if (key !== currentMonth) {
          currentMonth = key;
          group = document.createElement("section");
          group.className = "month-group";
          var heading = document.createElement("h2");
          heading.textContent = MONTHS[d.getMonth()] + " " + d.getFullYear();
          group.appendChild(heading);
          host.appendChild(group);
        }
        group.appendChild(eventNode(ev, nextEvent && ev === nextEvent));
      });
    }
  }

  function renderNextUp(ev) {
    var box = document.getElementById("next-up");
    if (!box) return;

    if (!ev) {
      box.innerHTML = "<h2>Next Up</h2><p>The season is complete. Offseason dates post here as they are set.</p>";
      return;
    }

    var where = ev.location ? " · " + ev.location : "";
    box.innerHTML =
      "<h2>Next Up</h2>" +
      '<span class="big">' + (ev.type === "dual" && ev.home === false ? "at " : "") + escapeHtml(ev.title) + "</span>" +
      "<p><span class=\"when\">" + dateRangeText(ev) + (ev.time ? " · " + escapeHtml(ev.time) : "") + "</span>" +
      escapeHtml(where) + "</p>" +
      (ev.notes ? "<p>" + escapeHtml(ev.notes) + "</p>" : "");
  }

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- Calendar export (.ics) ---------------- */

  function icsDate(date) {
    var m = String(date.getMonth() + 1).padStart(2, "0");
    var d = String(date.getDate()).padStart(2, "0");
    return "" + date.getFullYear() + m + d;
  }

  function icsEscape(text) {
    return String(text || "").replace(/([,;\\])/g, "\\$1").replace(/\n/g, "\\n");
  }

  function downloadIcs(list) {
    var lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//MCGirlsWrestling.com//Team Schedule//EN",
      "CALSCALE:GREGORIAN",
      "X-WR-CALNAME:Mountain Crest Girls Wrestling"
    ];

    list.forEach(function (ev, i) {
      var start = parseDate(ev.date);
      // All-day events: DTEND is exclusive, so add one day past the last day.
      var last = parseDate(ev.endDate || ev.date);
      var end = new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1);
      var details = [ev.time ? "Start time: " + ev.time : "", ev.notes || ""]
        .filter(Boolean).join("\n");

      lines.push(
        "BEGIN:VEVENT",
        "UID:mcgw-" + ev.date + "-" + i + "@mcgirlswrestling.com",
        "DTSTAMP:" + icsDate(new Date()) + "T000000Z",
        "DTSTART;VALUE=DATE:" + icsDate(start),
        "DTEND;VALUE=DATE:" + icsDate(end),
        "SUMMARY:" + icsEscape((ev.type === "dual" && ev.home === false ? "at " : "") + ev.title),
        "LOCATION:" + icsEscape(ev.location || ""),
        "DESCRIPTION:" + icsEscape(details),
        "END:VEVENT"
      );
    });

    lines.push("END:VCALENDAR");

    var blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "mc-girls-wrestling-schedule.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }


  /* ---------------- Accomplishments: year-by-year results ---------------- */

  var PLACE_NAMES = {
    1: "State Champion", 2: "State Runner-Up", 3: "3rd Place", 4: "4th Place",
    5: "5th Place", 6: "6th Place", 7: "7th Place", 8: "8th Place"
  };

  // A placer may carry a numeric place, or — when the bracket result has not been
  // confirmed — a free-text `result` such as "State finalist".
  function placeLabel(placer) {
    if (placer.place && PLACE_NAMES[placer.place]) return PLACE_NAMES[placer.place];
    if (placer.place) return String(placer.place);
    return placer.result || "Placed";
  }

  function byPlace(a, b) {
    return (a.place || 99) - (b.place || 99);
  }

  function initResultsPage() {
    var host = document.getElementById("results-list");
    var stats = document.getElementById("results-stats");
    if (!host && !stats) return;

    var seasons = (window.MCW_RESULTS || []).slice();
    var totalChamps = 0;
    var totalPlacers = 0;
    var teamTitles = 0;

    seasons.forEach(function (season) {
      var placers = (season.placers || []).slice().sort(byPlace);
      totalChamps += placers.filter(function (p) { return p.place === 1; }).length;
      totalPlacers += season.medalists || placers.length;
      if (season.teamTitle) teamTitles++;

      var block = document.createElement("section");
      block.className = "season-block" + (season.teamTitle ? " is-champ" : "");

      var metaBits = [];
      if (season.classification) metaBits.push(escapeHtml(season.classification));
      if (season.teamFinish) metaBits.push("<strong>" + escapeHtml(season.teamFinish) + "</strong>");
      if (season.teamScore) metaBits.push(escapeHtml(season.teamScore) + " pts");

      var head = document.createElement("div");
      head.className = "season-head";
      head.innerHTML = "<h3>" + escapeHtml(season.season) + "</h3>" +
        (metaBits.length ? '<p class="season-meta">' + metaBits.join(" &middot; ") + "</p>" : "") +
        (season.teamTitle ? '<span class="title-badge">&#127942; Team State Title</span>' : "");
      block.appendChild(head);

      var body = document.createElement("div");
      body.className = "season-body";

      var champs = placers.filter(function (p) { return p.place === 1; });
      var summary = [];
      if (champs.length) summary.push(champs.length + " individual state champion" + (champs.length === 1 ? "" : "s"));
      if (season.medalists) summary.push(season.medalists + " total medalists");
      else if (placers.length) summary.push(placers.length + " placer" + (placers.length === 1 ? "" : "s") + " listed");
      // summary text is generated here (counts + fixed words), so it needs no escaping
      if (summary.length) {
        body.innerHTML += '<p class="champ-heading">' + summary.join(" &middot; ") + "</p>";
      }

      if (placers.length) {
        var rows = placers.map(function (p) {
          return '<tr' + (p.place === 1 ? ' class="is-champion"' : "") + ">" +
            "<td>" + escapeHtml(p.name) + "</td>" +
            "<td>" + (p.weight ? escapeHtml(p.weight) : "&mdash;") + "</td>" +
            '<td class="place-medal">' + escapeHtml(placeLabel(p)) + "</td>" +
            "<td>" + escapeHtml(p.record || "") + "</td></tr>";
        }).join("");
        body.innerHTML +=
          '<div class="table-scroll"><table><thead><tr>' +
          "<th>Wrestler</th><th>Weight</th><th>State Finish</th><th>Record</th>" +
          "</tr></thead><tbody>" + rows + "</tbody></table></div>";
      } else {
        body.innerHTML += '<p class="season-empty">Individual results for this season have not ' +
          "been compiled yet. Send them to the coaching staff and they will be added.</p>";
      }

      if (season.notes) {
        body.innerHTML += '<p class="event-meta" style="margin-top:12px">' + escapeHtml(season.notes) + "</p>";
      }

      block.appendChild(body);
      if (host) host.appendChild(block);
    });

    if (stats) {
      stats.innerHTML =
        statCard(teamTitles, "Team State Titles") +
        statCard(totalChamps, "Individual State Champions") +
        statCard(totalPlacers, "State Medalists on Record") +
        statCard(seasons.length, "Seasons of Girls Wrestling");
    }
  }

  function statCard(num, label) {
    return '<div class="stat"><span class="num">' + num + '</span>' +
      '<span class="label">' + label + "</span></div>";
  }


  /* ---------------- Home: Mustang honor roll ---------------- */

  function initHomeHonors() {
    var host = document.getElementById("home-honors");
    if (!host) return;

    var seasons = window.MCW_RESULTS || [];
    host.innerHTML = seasons.map(function (season) {
      var champs = (season.placers || []).filter(function (p) { return p.place === 1; }).length;
      var detail = [];
      if (champs) detail.push(champs + " individual state champion" + (champs === 1 ? "" : "s"));
      if (season.medalists) detail.push(season.medalists + " medalists");
      if (season.teamScore) detail.push(season.teamScore + " pts");

      var finish = season.teamFinish || "";
      var medal = "";
      var cls = "";
      if (season.teamTitle) {
        medal = "&#127942; ";          // trophy
        cls = " title";
        finish = "4A State Champions";
      } else if (/^2nd/.test(finish)) {
        medal = "&#129352; ";          // second-place medal
        cls = " runner-up";
        finish = "2nd — State Runner-Up";
      } else if (/^3rd/.test(finish)) {
        medal = "&#129353; ";          // third-place medal
        cls = " runner-up";
      }

      return "<li><span class=\"yr\">" + escapeHtml(season.season) + "</span>" +
        '<span class="result' + cls + '">' + medal + escapeHtml(finish) + "</span>" +
        (detail.length ? '<span class="detail">' + detail.join(", ") + "</span>" : "") +
        "</li>";
    }).join("");
  }

  /* ---------------- Boot ---------------- */

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initHomePreview();
    initSchedulePage();
    initResultsPage();
    initHomeHonors();
  });
})();
