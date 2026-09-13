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
 *     placers: [
 *       { name: "Jane Doe", weight: "120", place: 1, record: "38-3" },
 *       { name: "Ann Roe",  weight: "145", place: 2 }
 *     ]
 *   }
 *
 * place: 1 = state champion, 2 = runner-up, and so on.
 *
 * SOURCING NOTE FOR COACHES: the results below were compiled from published
 * news coverage (Deseret News, KSL, The Herald Journal, Cache Valley Daily).
 * Team titles and scores are well documented. The individual lists are the
 * champions those articles named — they are NOT full top-six placer lists, and
 * 2024 and 2025 individual results were not published in a form that could be
 * compiled. Please check them against the official UHSAA/Trackwrestling
 * brackets and add the missing placers.
 * ------------------------------------------------------------------------- */

window.MCW_RESULTS = [
  {
    season: "2025-26",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    teamScore: "195.5",
    notes: "Fifth team title in six seasons — won on depth by two points over Ridgeline "
         + "at the UCCU Center in Orem. Individual placers beyond the finalists below still "
         + "need to be added.",
    placers: [
      { name: "Sydney Reisner", weight: "100", place: 2 },
      { name: "Autumn Radmall", weight: "120", place: 2 },
      { name: "Maggi Budge", weight: "155", place: 2 }
    ]
  },
  {
    season: "2024-25",
    classification: "4A",
    teamFinish: "2nd",
    teamTitle: false,
    notes: "Bear River won the 4A title with 303 points, ending Mountain Crest's four-year run. "
         + "Individual placers for this season still need to be added.",
    placers: []
  },
  {
    season: "2023-24",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    teamScore: "266",
    notes: "Fourth straight team title, ahead of Bear River (234) and Uintah (219), at the "
         + "UCCU Center in Orem. Additional 2024 champions and placers still need to be added.",
    placers: [
      { name: "Brooke Keller", weight: "190", place: 1 }
    ]
  },
  {
    season: "2022-23",
    classification: "4A",
    teamFinish: "1st — State Champions",
    teamTitle: true,
    notes: "Eight Mustangs reached the finals and seven won titles.",
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
         + "eight individual champions.",
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
         + "427 points to Bear River's 171 and crowned six individual champions.",
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
