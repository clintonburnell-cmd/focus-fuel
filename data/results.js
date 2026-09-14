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
 * SOURCING: 2020-21 through 2024-25 are COMPLETE placer lists, entered from the
 * official state tournament brackets — every Mustang who placed, with weight,
 * place and season record. Team scores and divisional results come from
 * published coverage (Deseret News, KSL, The Herald Journal).
 *
 * The one gap is 2025-26: the brackets for that season have not been entered,
 * so only the four state runners-up are listed against a reported 11 medalists.
 * The `medalists` count on a season is the true number who placed, so wherever
 * it exceeds the number of rows, names are still missing.
 *
 * Two names were normalized from the brackets, which spell them inconsistently:
 * "Addi Baxtor" (2022) is Addilyn Baxter, and "Anna Van huss" is Anna Van Huss.
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
    medalists: 9,
    divisional: {
      division: "Division B",
      finish: "1st",
      score: "404.5",
      runnerUp: "Uintah, 367",
      qualifiers: 25
    },
    notes: "Bear River won the 4A title with 303 points to Mountain Crest's 225.5, ahead of "
         + "Uintah (189.5), ending the Mustangs' four-year run. Four Mustangs reached the finals "
         + "and all four ran into a champion; nine placed in all. Complete placer list from the "
         + "state brackets.",
    placers: [
      { name: "Shelby Bevan", weight: "120", place: 2, record: "20-7" },
      { name: "Erin Smith", weight: "135", place: 2, record: "21-5" },
      { name: "Maggi Budge", weight: "155", place: 2, record: "30-6" },
      { name: "Audrey DeKorver", weight: "190", place: 2, record: "25-9" },
      { name: "Laura Stabile", weight: "170", place: 3, record: "24-16" },
      { name: "Rachael Godfrey", weight: "190", place: 3, record: "17-6" },
      { name: "Amelia Choate", weight: "105", place: 4, record: "24-12" },
      { name: "Addilyn Baxter", weight: "100", place: 5, record: "27-11" },
      { name: "Autumn Radmall", weight: "115", place: 5, record: "22-19" }
    ]
  },
  {
    season: "2023-24",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    teamScore: "266",
    medalists: 10,
    divisional: {
      division: "Division A",
      finish: "1st",
      score: "431.5",
      runnerUp: "Uintah, 321",
      qualifiers: 26,
      location: "Ridgeline HS"
    },
    notes: "Fourth straight team title, ahead of Bear River (234) and Uintah (219), at the "
         + "UCCU Center in Orem. Keller was the only individual champion from Cache Valley, and "
         + "the title came from depth: ten Mustangs on the podium. Complete placer list from the "
         + "state brackets.",
    placers: [
      { name: "Brooke Keller", weight: "190", place: 1, record: "35-8" },
      { name: "Addilyn Baxter", weight: "100", place: 2, record: "26-11" },
      { name: "Hannah Sanders", weight: "100", place: 3, record: "28-14" },
      { name: "Amelia Choate", weight: "105", place: 3, record: "22-8" },
      { name: "Madeline Woolstenhulme", weight: "135", place: 3, record: "30-7" },
      { name: "Gracie Howard", weight: "170", place: 3, record: "18-4" },
      { name: "Shelby Bevan", weight: "110", place: 4, record: "25-13" },
      { name: "Erin Smith", weight: "130", place: 4, record: "22-12" },
      { name: "Rachael Godfrey", weight: "235", place: 4, record: "24-7" },
      { name: "Anna Van Huss", weight: "130", place: 6, record: "26-11" }
    ]
  },
  {
    season: "2022-23",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    medalists: 21,
    notes: "Third straight team title. Eight Mustangs reached the finals and seven won, and "
         + "21 placed in all. Complete placer list from the state brackets.",
    placers: [
      { name: "Mattee Turnbow", weight: "110", place: 1, record: "19-4" },
      { name: "Jacie Shock", weight: "120", place: 1, record: "24-5" },
      { name: "Eastyn Nyman", weight: "130", place: 1, record: "26-2" },
      { name: "Emmalee White", weight: "145", place: 1, record: "14-2" },
      { name: "Gracie Howard", weight: "170", place: 1, record: "26-6" },
      { name: "Brooke Keller", weight: "190", place: 1, record: "6-0" },
      { name: "Kalie Jensen", weight: "235", place: 1, record: "26-10" },
      { name: "Jayci Tolman", weight: "100", place: 2, record: "19-5" },
      { name: "Amelia Choate", weight: "105", place: 3, record: "12-6" },
      { name: "Kaitlin Lofthouse", weight: "125", place: 3, record: "22-3" },
      { name: "Hailee Sharp", weight: "140", place: 3, record: "17-6" },
      { name: "Hadley Glenn", weight: "155", place: 3, record: "12-6" },
      { name: "Shelby Bevan", weight: "105", place: 4, record: "13-10" },
      { name: "Erin Smith", weight: "120", place: 4, record: "22-7" },
      { name: "Maggi Budge", weight: "145", place: 4, record: "14-9" },
      { name: "Addilyn Baxter", weight: "100", place: 5, record: "9-11" },
      { name: "Dani Alexander", weight: "115", place: 5, record: "14-11" },
      { name: "Ally Taylor", weight: "125", place: 5, record: "17-12" },
      { name: "Anna Van Huss", weight: "135", place: 5, record: "21-12" },
      { name: "Sujeili Martinez", weight: "190", place: 5, record: "2-6" },
      { name: "Rachael Godfrey", weight: "235", place: 5, record: "11-14" }
    ]
  },
  {
    season: "2021-22",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    medalists: 25,
    notes: "Second straight team title, won at the Sevier Valley Center in Richfield with eight "
         + "individual champions and 25 placers — including three all-Mustang matches, at 105, "
         + "110 and 190. Complete placer list from the state brackets.",
    placers: [
      { name: "Mattee Turnbow", weight: "105", place: 1, record: "15-7" },
      { name: "Jacie Shock", weight: "110", place: 1, record: "16-3" },
      { name: "Piper Nix", weight: "120", place: 1, record: "13-10" },
      { name: "Eastyn Nyman", weight: "125", place: 1, record: "26-5" },
      { name: "Ella Dekorver", weight: "135", place: 1, record: "16-4" },
      { name: "Gracie Howard", weight: "155", place: 1, record: "20-6" },
      { name: "Teagan Hall", weight: "170", place: 1, record: "16-4" },
      { name: "Katelyn Hardy", weight: "190", place: 1, record: "19-3" },
      { name: "Audrey Rollins", weight: "105", place: 2, record: "6-5" },
      { name: "Brinley Cowley", weight: "110", place: 2, record: "19-8" },
      { name: "Laci Larsen", weight: "140", place: 2, record: "21-7" },
      { name: "Emmalee White", weight: "145", place: 2, record: "15-5" },
      { name: "Brooke Keller", weight: "190", place: 2, record: "16-8" },
      { name: "Shelby Bevan", weight: "100", place: 3, record: "17-8" },
      { name: "Kaitlin Lofthouse", weight: "125", place: 3, record: "16-7" },
      { name: "Jenna McDougal", weight: "145", place: 4, record: "20-7" },
      { name: "Talia Johansen", weight: "155", place: 4, record: "9-8" },
      { name: "Alexandra Vega", weight: "235", place: 4, record: "4-9" },
      { name: "Rylee Turnbow", weight: "115", place: 5, record: "13-11" },
      { name: "Emma Child", weight: "120", place: 5, record: "18-5" },
      { name: "Kaydee Hopkins", weight: "130", place: 5, record: "12-11" },
      { name: "Cadia Bowen", weight: "135", place: 5, record: "8-9" },
      { name: "Addilyn Baxter", weight: "100", place: 6, record: "12-12" },
      { name: "Dakota Andersen", weight: "115", place: 6, record: "14-11" },
      { name: "Brynlie Hansen", weight: "170", place: 6, record: "5-7" }
    ]
  },
  {
    season: "2020-21",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    teamScore: "427",
    medalists: 22,
    notes: "The first UHSAA-sanctioned girls wrestling season in Utah. Mountain Crest scored 427 "
         + "points to Bear River's 171, crowned six individual champions and put 22 wrestlers on "
         + "the podium — including both finalists at 140 and 170. Complete placer list from the "
         + "state brackets.",
    placers: [
      { name: "Jalise Wakley", weight: "124", place: 1, record: "25-3" },
      { name: "Ella Dekorver", weight: "132", place: 1, record: "15-4" },
      { name: "Hanna Evans", weight: "140", place: 1, record: "22-4" },
      { name: "Brynlie Hansen", weight: "150", place: 1, record: "12-6" },
      { name: "Rosa Campos", weight: "170", place: 1, record: "18-5" },
      { name: "Sheccid Alvarado", weight: "190", place: 1, record: "12-9" },
      { name: "Gabriella Norton", weight: "108", place: 2, record: "26-10" },
      { name: "Cristell Flores", weight: "136", place: 2, record: "20-9" },
      { name: "Sophie Longson", weight: "140", place: 2, record: "10-10" },
      { name: "Jenna McDougal", weight: "145", place: 2, record: "15-12" },
      { name: "Talia Johansen", weight: "160", place: 2, record: "17-9" },
      { name: "Audrey Stabile", weight: "170", place: 2, record: "7-10" },
      { name: "Emma Child", weight: "120", place: 3, record: "20-11" },
      { name: "Kaydee Hopkins", weight: "128", place: 3, record: "15-10" },
      { name: "Laci Larsen", weight: "136", place: 3, record: "10-6" },
      { name: "Rylie Geary", weight: "145", place: 3, record: "12-12" },
      { name: "Teagan Hall", weight: "160", place: 3, record: "13-9" },
      { name: "Rylee Turnbow", weight: "115", place: 4, record: "21-13" },
      { name: "Talya Summers", weight: "128", place: 4, record: "1-8" },
      { name: "Sophia Hansen", weight: "245", place: 5, record: "17-8" },
      { name: "Brinley Cowley", weight: "108", place: 6, record: "9-16" },
      { name: "Piper Nix", weight: "120", place: 6, record: "16-18" }
    ]
  }

];
