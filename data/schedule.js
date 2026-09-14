/* ---------------------------------------------------------------------------
 * Mountain Crest Girls Wrestling — 2026-27 team schedule
 * ---------------------------------------------------------------------------
 * THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE CALENDAR.
 * The home page and the Schedule page both read from it.
 *
 * Each event looks like this:
 *
 *   {
 *     date:    "2026-12-09",   // required, YYYY-MM-DD
 *     endDate: "2026-12-10",   // optional, for multi-day tournaments
 *     time:    "6:00 PM",      // optional, leave out if TBD
 *     title:   "Ridgeline",    // away duals get "at " added automatically
 *     type:    "dual",         // "dual" | "tournament" | "event"
 *     location:"Mountain Crest HS",
 *     home:    true,           // true = home, false = away, omit for neutral
 *     notes:   "Senior Night"  // optional
 *   }
 *
 * Source: the team workbook schedule tab (MC Girls Wrestling Workbook 2026-27,
 * updated Sept 11, 2026) and the Oct 15 parent meeting handout. Start times are
 * only listed where the workbook gives one — add the rest as they are set.
 * ------------------------------------------------------------------------- */

window.MCW_SEASON = "2026-27 Season";

window.MCW_SCHEDULE = [
  {
    date: "2026-10-15",
    time: "6:30 PM",
    title: "Parent & Athlete Meeting",
    type: "event",
    notes: "6:30 to 8:00 pm. Our season kickoff — values, schedule, fees, paperwork and how "
         + "families can help. Please bring at least one parent or guardian. Location posted in sportsYou."
  },
  {
    date: "2026-11-09",
    title: "First Day of Practice",
    type: "event",
    location: "Mountain Crest HS",
    notes: "Registration, a current sports physical and school paperwork must be cleared first."
  },
  {
    date: "2026-11-18",
    time: "5:30 PM",
    title: "Team Auction",
    type: "event",
    notes: "5:30 to 9:00 pm. Our main fundraiser — every family pitches in."
  },
  {
    date: "2026-11-24",
    time: "6:00 PM",
    title: "Inter-Squad Meet",
    type: "event",
    location: "Mountain Crest HS",
    notes: "First time in front of a crowd. Family and friends welcome."
  },
  {
    date: "2026-12-02",
    title: "Deseret Peak (boys and girls)",
    type: "dual",
    location: "Deseret Peak Complex",
    home: false,
    notes: "First meet of the season."
  },
  {
    date: "2026-12-04",
    endDate: "2026-12-05",
    title: "Northridge Tournament",
    type: "tournament",
    location: "Northridge HS, Layton"
  },
  {
    date: "2026-12-09",
    title: "Ridgeline",
    type: "dual",
    location: "Mountain Crest HS",
    home: true
  },
  {
    date: "2026-12-12",
    title: "Bear River Duals",
    type: "tournament",
    location: "Bear River HS"
  },
  {
    date: "2026-12-18",
    endDate: "2026-12-19",
    title: "Christmas Clash",
    type: "tournament",
    location: "Western Sports Arena, Farmington"
  },
  {
    date: "2027-01-02",
    title: "MC Filly Invitational",
    type: "tournament",
    location: "Mountain Crest HS",
    home: true,
    notes: "We host. Volunteers needed all day — sign up in sportsYou."
  },
  {
    date: "2027-01-06",
    title: "Stansbury (boys and girls)",
    type: "dual",
    location: "Mountain Crest HS",
    home: true
  },
  {
    date: "2027-01-08",
    endDate: "2027-01-09",
    title: "Best of the West or Ridgeline",
    type: "tournament",
    notes: "Still being decided — confirmed in sportsYou once it is set."
  },
  {
    date: "2027-01-12",
    title: "Bear River",
    type: "dual",
    location: "Mountain Crest HS",
    home: true
  },
  {
    date: "2027-01-14",
    title: "Sky View — Senior Night",
    type: "dual",
    location: "Mountain Crest HS",
    home: true,
    notes: "Senior recognition before the first match."
  },
  {
    date: "2027-01-15",
    endDate: "2027-01-16",
    title: "Madison, Idaho, or a weekend off",
    type: "tournament",
    location: "Madison HS, Idaho",
    notes: "Still being decided — confirmed in sportsYou once it is set."
  },
  {
    date: "2027-01-19",
    title: "Box Elder",
    type: "dual",
    location: "Box Elder HS",
    home: false
  },
  {
    date: "2027-01-21",
    title: "Tooele",
    type: "dual",
    location: "Tooele HS",
    home: false
  },
  {
    date: "2027-01-22",
    endDate: "2027-01-23",
    title: "Rockwell Rumble",
    type: "tournament",
    location: "Western Sports Park"
  },
  {
    date: "2027-01-28",
    title: "Green Canyon",
    type: "dual",
    location: "Green Canyon HS",
    home: false
  },
  {
    date: "2027-02-05",
    endDate: "2027-02-06",
    title: "4A Divisionals",
    type: "tournament",
    notes: "Qualifies wrestlers for the state tournament."
  },
  {
    date: "2027-02-19",
    endDate: "2027-02-20",
    title: "UHSAA State Championships",
    type: "tournament",
    location: "Utah Valley University, Orem",
    notes: "The whole team travels. Session and ticket details posted in sportsYou."
  }
];
