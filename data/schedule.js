/* ---------------------------------------------------------------------------
 * Mountain Crest Girls Wrestling — team schedule
 * ---------------------------------------------------------------------------
 * THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE CALENDAR.
 * The home page and the Schedule page both read from it.
 *
 * Each event looks like this:
 *
 *   {
 *     date:    "2026-12-05",   // required, YYYY-MM-DD
 *     endDate: "2026-12-06",   // optional, for multi-day tournaments
 *     time:    "9:00 AM",      // optional, leave "" or omit if TBD
 *     title:   "Mustang Duals",
 *     type:    "tournament",   // "dual" | "tournament" | "event"
 *     location:"Mountain Crest HS",
 *     home:    true,           // true = home, false = away, omit for neutral
 *     notes:   "Weigh-ins 7:30 AM"   // optional
 *   }
 *
 * Keep the list in date order (the site sorts it anyway, but it is easier to read).
 * NOTE: the events below are PLACEHOLDERS for the 2026-27 season — replace the
 * dates, times and opponents with the schedule from the athletic office.
 * ------------------------------------------------------------------------- */

window.MCW_SEASON = "2026-27 Season";

window.MCW_SCHEDULE = [
  {
    date: "2026-10-19",
    time: "6:00 PM",
    title: "Parent & Athlete Preseason Meeting",
    type: "event",
    location: "Mountain Crest HS — Commons",
    home: true,
    notes: "Paperwork, fees, season expectations. Athletes and a parent/guardian both attend."
  },
  {
    date: "2026-10-26",
    time: "3:30 PM",
    title: "First Official Practice",
    type: "event",
    location: "Mountain Crest HS — Wrestling Room",
    home: true,
    notes: "Physical, registration and concussion forms must be cleared before stepping on the mat."
  },
  {
    date: "2026-11-04",
    time: "3:30 PM",
    title: "Skin Checks & Weight Certification",
    type: "event",
    location: "Mountain Crest HS — Wrestling Room",
    home: true,
    notes: "Required before the first competition."
  },
  {
    date: "2026-11-18",
    time: "6:00 PM",
    title: "Bear River",
    type: "dual",
    location: "Mountain Crest HS — Main Gym",
    home: true,
    notes: "Season opener. JV matches follow varsity."
  },
  {
    date: "2026-12-02",
    time: "6:00 PM",
    title: "Logan",
    type: "dual",
    location: "Logan HS",
    home: false
  },
  {
    date: "2026-12-05",
    time: "9:00 AM",
    title: "Mustang Girls Invitational",
    type: "tournament",
    location: "Mountain Crest HS",
    home: true,
    notes: "Weigh-ins 7:30 AM. Volunteers needed — sign up in sportsYou."
  },
  {
    date: "2026-12-09",
    time: "6:00 PM",
    title: "Green Canyon",
    type: "dual",
    location: "Mountain Crest HS — Main Gym",
    home: true
  },
  {
    date: "2026-12-11",
    endDate: "2026-12-12",
    time: "8:00 AM",
    title: "Rocky Mountain Rumble (2-day)",
    type: "tournament",
    location: "Ogden, UT",
    notes: "Bus departs 5:45 AM Friday. Overnight — travel forms required."
  },
  {
    date: "2026-12-16",
    time: "6:00 PM",
    title: "Sky View",
    type: "dual",
    location: "Sky View HS",
    home: false
  },
  {
    date: "2027-01-06",
    time: "6:00 PM",
    title: "Ridgeline",
    type: "dual",
    location: "Mountain Crest HS — Main Gym",
    home: true,
    notes: "Youth Night — youth wrestlers in club gear get in free."
  },
  {
    date: "2027-01-09",
    time: "9:00 AM",
    title: "Cache Valley Girls Classic",
    type: "tournament",
    location: "Ridgeline HS",
    notes: "Weigh-ins 7:30 AM."
  },
  {
    date: "2027-01-13",
    time: "6:00 PM",
    title: "Bear River",
    type: "dual",
    location: "Bear River HS",
    home: false
  },
  {
    date: "2027-01-16",
    time: "9:00 AM",
    title: "Northern Utah Invitational",
    type: "tournament",
    location: "Box Elder HS"
  },
  {
    date: "2027-01-20",
    time: "6:00 PM",
    title: "Logan",
    type: "dual",
    location: "Mountain Crest HS — Main Gym",
    home: true,
    notes: "Senior Night — recognition 15 minutes before the first match."
  },
  {
    date: "2027-01-27",
    time: "6:00 PM",
    title: "Region Duals",
    type: "dual",
    location: "Sky View HS",
    home: false
  },
  {
    date: "2027-01-30",
    time: "9:00 AM",
    title: "Region Championships",
    type: "tournament",
    location: "Green Canyon HS",
    notes: "Placement here sets state seeding."
  },
  {
    date: "2027-02-05",
    endDate: "2027-02-06",
    time: "9:00 AM",
    title: "UHSAA State Championships",
    type: "tournament",
    location: "UCCU Center, Orem",
    notes: "Two-day tournament. Ticket and session info posted in sportsYou."
  },
  {
    date: "2027-02-17",
    time: "6:00 PM",
    title: "Team Awards Banquet",
    type: "event",
    location: "Mountain Crest HS — Commons",
    home: true,
    notes: "Potluck. Families welcome — end-of-season awards and senior send-off."
  },
  {
    date: "2027-03-02",
    time: "3:30 PM",
    title: "Offseason Lifting Begins",
    type: "event",
    location: "Mountain Crest HS — Weight Room",
    home: true,
    notes: "Tuesday/Thursday through May. Open to all returning and incoming wrestlers."
  }
];
