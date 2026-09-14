/* ---------------------------------------------------------------------------
 * Mountain Crest Girls Wrestling — year-by-year state results
 * ---------------------------------------------------------------------------
 * EDIT THIS FILE to update the record book on the Accomplishments page.
 *
 * The UHSAA sanctioned girls wrestling beginning with the 2020-21 school year;
 * the first state championships were held in February 2021. Mountain Crest won
 * the 4A team title that inaugural season and has won five of the first six.
 *
 * A season looks like this:
 *
 *   {
 *     season: "2025-26",
 *     classification: "4A",
 *     teamFinish: "1st — State Champions",
 *     teamTitle: true,              // true = won the team state title
 *     teamScore: "195.5",           // optional
 *     notes: "...",                 // optional
 *     medalists: 11,                // optional — total who placed, if more than are listed
 *     divisional: {                 // optional — the state-qualifying meet
 *       division: "Division B",
 *       finish: "1st",
 *       score: "316",
 *       runnerUp: "Ridgeline, 263",
 *       qualifiers: 20,
 *       location: "Ridgeline HS"
 *     },
 *     placers: [
 *       { name: "Jane Doe", weight: "120", place: 1, record: "38-3" },
 *       { name: "Ann Roe",  weight: "145", place: 2 },
 *       { name: "Sam Poe",  weight: "155", place: 5 },
 *       { name: "Kit Loe",  weight: "190", result: "State finalist" }
 *     ]
 *   }
 *
 * place: 1 = state champion, 2 = runner-up, 3 = third, and so on through 8. List
 * EVERY placer, not just champions — champion rows are highlighted automatically.
 * When a wrestler is known to have placed but the exact finish is not confirmed,
 * leave `place` off and put a short `result` string instead; it prints as-is.
 *
 * SOURCING NOTE FOR COACHES: the results below were compiled from published
 * news coverage (Deseret News, KSL, The Herald Journal, Cache Valley Daily).
 * Team titles and scores are well documented. The individual entries are the
 * wrestlers those articles named — champions, plus the finalists and placers
 * that got a mention. They are NOT complete top-six placer lists for any season:
 * the full brackets live on Trackwrestling and were not reachable. Where an
 * article gave a medal COUNT but no names, that count is in `medalists` so the
 * page shows how many rows are still missing. Please fill in the rest from the
 * official UHSAA/Trackwrestling brackets.
 * ------------------------------------------------------------------------- */

window.MCW_RESULTS = [
  {
    season: "2025-26",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    teamScore: "195.5",
    medalists: 11,
    divisional: {
      division: "Division B",
      finish: "1st",
      score: "316",
      runnerUp: "Ridgeline, 263",
      qualifiers: 20
    },
    notes: "Fifth team title in six seasons, won on depth at the UCCU Center in Orem: "
         + "195.5 to Ridgeline's 193.5, with a tournament-best 11 medalists and four finalists "
         + "but no individual champion. The four runners-up are on the board; the third-place "
         + "finisher, four fifth-place finishers and two sixth-place finishers still need names.",
    placers: [
      { name: "Sydney Reisner", weight: "100", place: 2 },
      { name: "Autumn Radmall", weight: "120", place: 2 },
      { name: "Maggi Budge", weight: "155", place: 2 },
      { name: "Callie Bates", weight: "235", place: 2 }
    ]
  },
  {
    season: "2024-25",
    classification: "4A",
    teamFinish: "2nd",
    teamTitle: false,
    teamScore: "225.5",
    divisional: {
      division: "Division B",
      finish: "1st",
      score: "404.5",
      runnerUp: "Uintah, 367",
      qualifiers: 25
    },
    notes: "Bear River won the 4A title with 303 points to Mountain Crest's 225.5, ahead of "
         + "Uintah (189.5), ending the Mustangs' four-year run. Four Mustangs reached the "
         + "finals; only Bevan's result is confirmed, and the rest of the placers still need "
         + "to be added.",
    placers: [
      { name: "Shelby Bevan", weight: "120", place: 2 },
      { name: "Erin Smith", weight: "135", result: "State finalist" },
      { name: "Maggi Budge", weight: "155", result: "State finalist" },
      { name: "Audrey DeKorver", weight: "190", result: "State finalist" }
    ]
  },
  {
    season: "2023-24",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    teamScore: "266",
    divisional: {
      division: "Division A",
      finish: "1st",
      score: "431.5",
      runnerUp: "Uintah, 321",
      qualifiers: 26,
      location: "Ridgeline HS"
    },
    notes: "Fourth straight team title, ahead of Bear River (234) and Uintah (219), at the "
         + "UCCU Center in Orem. Keller was the only individual champion from Cache Valley. "
         + "The rest of the Mustang placers still need to be added.",
    placers: [
      { name: "Brooke Keller", weight: "190", place: 1, record: "" },
      { name: "Addilyn Baxter", weight: "100", place: 2 },
      { name: "Gracie Howard", weight: "170", result: "Semifinalist — placed" }
    ]
  },
  {
    season: "2022-23",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    notes: "Eight Mustangs reached the finals and seven won titles. The seven champions are "
         + "listed; the rest of the season's placers still need to be added.",
    placers: [
      { name: "Mattee Turnbow", weight: "110", place: 1 },
      { name: "Jacie Shock", weight: "120", place: 1 },
      { name: "Eastyn Nyman", weight: "130", place: 1 },
      { name: "Emmalee White", weight: "145", place: 1 },
      { name: "Gracie Howard", weight: "170", place: 1 },
      { name: "Brooke Keller", weight: "190", place: 1 },
      { name: "Kalie Jensen", weight: "235", place: 1 }
    ]
  },
  {
    season: "2021-22",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    notes: "Second straight team title, won at the Sevier Valley Center in Richfield with "
         + "eight individual champions. Other placers from this tournament still need to be added.",
    placers: [
      { name: "Mattee Turnbow", weight: "105", place: 1 },
      { name: "Jacie Shock", weight: "110", place: 1 },
      { name: "Piper Nix", weight: "120", place: 1 },
      { name: "Eastyn Nyman", weight: "125", place: 1 },
      { name: "Ella Dekorver", weight: "135", place: 1 },
      { name: "Gracie Howard", weight: "155", place: 1 },
      { name: "Teagan Hall", weight: "170", place: 1 },
      { name: "Katelyn Hardy", weight: "190", place: 1 }
    ]
  },
  {
    season: "2020-21",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    teamScore: "427",
    notes: "The first UHSAA-sanctioned girls wrestling season in Utah. Mountain Crest scored "
         + "427 points to Bear River's 171 and crowned six individual champions. Other placers "
         + "from this tournament still need to be added.",
    placers: [
      { name: "Jalise Wakley", weight: "124", place: 1 },
      { name: "Ella Dekorver", weight: "132", place: 1 },
      { name: "Hanna Evans", weight: "140", place: 1 },
      { name: "Brynlie Hansen", weight: "150", place: 1 },
      { name: "Rosa Campos", weight: "170", place: 1 },
      { name: "Sheccid Alvarado", weight: "190", place: 1 }
    ]
  }
];
