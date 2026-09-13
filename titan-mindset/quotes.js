/* Titan Mindset quote library.
   Each person: { id, name, role: "coach" | "wrestler", affiliation, bio, quotes: [{ text, source, themes }] }
   themes: grit, grace, effort, attitude, gratitude, resilience, belief, discipline.
   Quotes come from published interviews, articles, talks, and well-known quote collections; the
   source field says where each one was found. To add a quote, append to the person's quotes array
   (or add a new person with a unique id). Both the app and the push server read this file. */
const TITAN_MINDSET_QUOTES = [
  {
    "id": "dan-gable",
    "name": "Dan Gable",
    "role": "coach",
    "affiliation": "University of Iowa · 1972 Olympic champion",
    "bio": "Undefeated 1972 Olympic gold medalist who coached Iowa to 15 NCAA team titles and is widely regarded as the most influential figure in American wrestling.",
    "quotes": [
      {
        "text": "More enduringly than any other sport, wrestling teaches self-control and pride. Some have wrestled without great skill. None have wrestled without pride.",
        "source": "Widely attributed (BrainyQuote)",
        "themes": [
          "attitude",
          "grace"
        ]
      },
      {
        "text": "Talent is everywhere, winning attitude is not.",
        "source": "Coaching Wrestling Successfully (1998)",
        "themes": [
          "attitude"
        ]
      },
      {
        "text": "There's always ways of motivating yourself to higher levels. Write about it, dream about it. But after that, turn it into action. Don't just dream.",
        "source": "Widely attributed (BrainyQuote)",
        "themes": [
          "effort",
          "discipline"
        ]
      },
      {
        "text": "I shoot, I score. He shoots, I score.",
        "source": "Widely attributed; cited by Spencer Lee",
        "themes": [
          "belief",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "cael-sanderson",
    "name": "Cael Sanderson",
    "role": "coach",
    "affiliation": "Penn State · 2004 Olympic champion",
    "bio": "Went 159-0 at Iowa State, won 2004 Olympic gold, and built Penn State into the dominant dynasty of modern college wrestling with more than a dozen NCAA team titles.",
    "quotes": [
      {
        "text": "As a coach, I've learned that the greatest thing I can do for my athletes is to share my passion for the sport and competition.",
        "source": "BrainyQuote",
        "themes": [
          "attitude",
          "grace"
        ]
      },
      {
        "text": "Attack life and wrestling. Never be satisfied with where you're at.",
        "source": "BrainyQuote",
        "themes": [
          "attitude",
          "effort"
        ]
      },
      {
        "text": "It's all in the mind and the way you choose to deal with it.",
        "source": "BrainyQuote",
        "themes": [
          "attitude"
        ]
      },
      {
        "text": "If you're once a competitor, you're always a competitor.",
        "source": "BrainyQuote",
        "themes": [
          "attitude"
        ]
      },
      {
        "text": "Anyone can wrestle until they are tired.",
        "source": "AZQuotes, QuoteFancy",
        "themes": [
          "effort",
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Unless you continually work, evolve, and innovate, you'll learn a quick and painful lesson from someone who has.",
        "source": "AZQuotes, QuoteFancy",
        "themes": [
          "effort",
          "discipline"
        ]
      },
      {
        "text": "You can win this thing on one leg, but it's going to be hard to do that on one leg and with a bad attitude.",
        "source": "Deseret News / Onward State",
        "themes": [
          "attitude",
          "resilience"
        ]
      },
      {
        "text": "For me the question is: did I honestly do enough with the ability I was born with?",
        "source": "Cael Sanderson interview",
        "themes": [
          "effort",
          "gratitude"
        ]
      },
      {
        "text": "The foundation for success is based on gratitude. Everything, peace of mind, happiness, getting the most out of what you have, springs off of the word gratitude.",
        "source": "National Wrestling Hall of Fame, 'Sanderson says foundation for success is based on gratitude'",
        "themes": [
          "gratitude",
          "belief"
        ]
      },
      {
        "text": "True gratitude is based on all things, success and failure.",
        "source": "National Wrestling Hall of Fame",
        "themes": [
          "gratitude",
          "resilience",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "john-smith",
    "name": "John Smith",
    "role": "coach",
    "affiliation": "Oklahoma State · two-time Olympic champion",
    "bio": "Six-time world and Olympic champion who coached Oklahoma State for 33 years, winning five NCAA team titles before retiring in 2024.",
    "quotes": [
      {
        "text": "In wrestling, you have to be hard; you have to be tough, and you have to be able to bounce back.",
        "source": "Oklahoma State University 'True Grit' feature / NWHOF.org",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Embrace it. Embrace the challenge of it. I never was afraid of that expectation. It drove me. It excited me. It gave me a reason to be doing what I was doing.",
        "source": "Oklahoma State Athletics press conference transcript",
        "themes": [
          "attitude",
          "belief"
        ]
      },
      {
        "text": "it was just a level of motivation and just saying, I can do this. [...] made me believe that this is where I belong. This is a chance, this is an opportunity for me to capitalize on everything I've ever wanted in wrestling.",
        "source": "Oklahoma State University Athletics (okstate.com)",
        "themes": [
          "belief",
          "gratitude"
        ],
        "url": "https://okstate.com/news/2024/4/15/cowboy-wrestling-john-smith-press-conference-transcript"
      },
      {
        "text": "There came a point in my career where that wasn't enough. I wanted to be the greatest pound-for-pound wrestler in the world.",
        "source": "Oklahoma State Athletics press conference transcript",
        "themes": [
          "attitude",
          "belief"
        ]
      },
      {
        "text": "Win or lose, you will never regret working hard, making sacrifices, being disciplined, or focusing too much.",
        "source": "AZQuotes",
        "themes": [
          "effort",
          "discipline"
        ]
      },
      {
        "text": "Success is measured by what we have done to prepare for competition.",
        "source": "Oklahoma State University Athletics",
        "themes": [
          "discipline",
          "effort"
        ]
      }
    ]
  },
  {
    "id": "tom-brands",
    "name": "Tom Brands",
    "role": "coach",
    "affiliation": "University of Iowa · 1996 Olympic champion",
    "bio": "1996 Olympic gold medalist and three-time NCAA champion who has led the Iowa Hawkeyes since 2006, winning four NCAA team titles.",
    "quotes": [
      {
        "text": "Wrestling at Iowa is a lifestyle. It's practiced every day in the classroom, in the household, in the community, and on the mat.",
        "source": "HawkeyeSports.com head coach bio",
        "themes": [
          "discipline"
        ]
      },
      {
        "text": "You don't like where you're at, go control what you can control and make it go your way, and I've got to do the same.",
        "source": "Post-NCAA comments reported by Tanner Lafever (2026)",
        "themes": [
          "attitude",
          "resilience"
        ]
      },
      {
        "text": "Let them look into my eyes and see the fire and the passion. Let them know what winning is all about.",
        "source": "FloWrestling, 'Top 20 Best Lines from Terry Brands Film'",
        "themes": [
          "attitude"
        ]
      },
      {
        "text": "Any way you've got to get the job done, you do that with attitude, accountability, work ethic, pizzazz, and all the things that go with Hawkeye wrestling.",
        "source": "Iowa media day press conference",
        "themes": [
          "attitude",
          "effort"
        ]
      }
    ]
  },
  {
    "id": "terry-brands",
    "name": "Terry Brands",
    "role": "coach",
    "affiliation": "University of Iowa associate head coach · two-time world champion",
    "bio": "Two-time world champion and 2000 Olympic bronze medalist known for his relentless intensity as Iowa's longtime associate head coach.",
    "quotes": [
      {
        "text": "Nothing was going to derail what I had set out to do, except me.",
        "source": "FloWrestling, 'The BEST Tom and Terry Brands Quotes of All-Time'",
        "themes": [
          "discipline",
          "belief",
          "grit"
        ]
      },
      {
        "text": "teaching our men to terrorize on the mat, yet be perfect gentlemen in society.",
        "source": "Iowa Wrestling Hall of Fame",
        "themes": [
          "grit",
          "grace",
          "attitude"
        ],
        "url": "https://www.iowawrestlinghalloffame.com/inductee/terry-brands"
      },
      {
        "text": "If you don't want it to happen again, don't let it happen again. Figure it out, buddy.",
        "source": "FloWrestling, 'Top 20 Best Lines from Terry Brands Film'",
        "themes": [
          "resilience",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "j-robinson",
    "name": "J Robinson",
    "role": "coach",
    "affiliation": "University of Minnesota · 1972 Olympian",
    "bio": "Army Ranger, 1972 Olympian, and longtime Gable assistant who coached Minnesota for 30 years and won the program's first three NCAA team championships.",
    "quotes": [
      {
        "text": "There's four parts to being a good athlete: technique, strength, endurance, and mental attitude. Everybody wants to do the technique part because it's easy. Strength training is a little bit harder, and endurance training is the hardest of all.",
        "source": "Bring Me The News interview",
        "themes": [
          "effort",
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "tom-ryan",
    "name": "Tom Ryan",
    "role": "coach",
    "affiliation": "Ohio State",
    "bio": "Ohio State head coach since 2006 who led the Buckeyes to the 2015 NCAA team title and wrote the book Chosen Suffering.",
    "quotes": [
      {
        "text": "Chosen suffering is a fancy word for love, because you will suffer the most for the things you love the most.",
        "source": "The Learning Leader Show, episode 637 (May 2025)",
        "themes": [
          "effort",
          "attitude"
        ]
      },
      {
        "text": "The sport of wrestling is about chosen suffering. It's choosing the hard thing time and time again, being able to execute under the toughest conditions.",
        "source": "Jim Harshaw Jr. podcast feature",
        "themes": [
          "effort",
          "discipline",
          "grit"
        ]
      },
      {
        "text": "Chosen suffering, going the extra mile, is something I've seen in everyone I've been around who has excelled at life and wrestling.",
        "source": "FloWrestling feature on Tom Ryan",
        "themes": [
          "effort",
          "grit"
        ]
      },
      {
        "text": "[...] I have to bring some hard things into my life because when things are going great I can be really soft.",
        "source": "Authority Magazine (Medium), interview by Chad Silverstein",
        "themes": [
          "discipline"
        ],
        "url": "https://medium.com/authority-magazine/building-champions-ohio-states-wrestling-program-under-the-lens-of-head-coach-tom-ryan-54ef8cbcc4f4"
      }
    ]
  },
  {
    "id": "cary-kolat",
    "name": "Cary Kolat",
    "role": "coach",
    "affiliation": "U.S. Naval Academy · 2000 Olympian",
    "bio": "Undefeated Pennsylvania high school legend, two-time NCAA champion, world medalist, and 2000 Olympian who has coached Navy since 2020.",
    "quotes": [
      {
        "text": "I think winning is important. [...] But the most important part is, how do I get there? [...] the character building and all that stuff comes through the process of getting there",
        "source": "Wrestling Snacks Newsletter",
        "themes": [
          "discipline",
          "attitude"
        ],
        "url": "https://www.wrestlingsnacks.com/p/cary-kolat-interview"
      }
    ]
  },
  {
    "id": "kevin-dresser",
    "name": "Kevin Dresser",
    "role": "coach",
    "affiliation": "Iowa State",
    "bio": "1986 NCAA champion at Iowa who rebuilt Virginia Tech and then Iowa State into national contenders.",
    "quotes": [
      {
        "text": "The biggest asset you have is confidence.",
        "source": "Iowa State Daily",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "My love of the sport, followed by my desire to win, and then the drive and work ethic to make it happen, are the keys to my success.",
        "source": "Iowa Wrestling Hall of Fame inductee page",
        "themes": [
          "effort",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "pat-popolizio",
    "name": "Pat Popolizio",
    "role": "coach",
    "affiliation": "NC State",
    "bio": "Oklahoma State All-American who turned Binghamton and then NC State into national contenders and made the Wolfpack an ACC powerhouse.",
    "quotes": [
      {
        "text": "You get in the heat of the battle with the work these guys do in that room. It builds a bond that is like nothing else these guys are going to see in their lifetime.",
        "source": "On3",
        "themes": [
          "effort",
          "gratitude",
          "grace"
        ]
      },
      {
        "text": "They weren't training to be 25th in the country. The commitment was there. The guys didn't question the training. They went out and earned the right to win.",
        "source": "On3",
        "themes": [
          "effort",
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "zeke-jones",
    "name": "Zeke Jones",
    "role": "coach",
    "affiliation": "Arizona State · 1992 Olympic silver medalist",
    "bio": "1991 world champion and 1992 Olympic silver medalist who coached the 2012 U.S. Olympic freestyle team and has led Arizona State since 2014.",
    "quotes": [
      {
        "text": "Don't walk into the wrestling room if you don't expect to get thrown on your head every once in a while. Been getting back up for over 45 years.",
        "source": "Zeke Jones on X",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "I think when you talk about losing a tough match, it's like anything else: It makes you stronger, it makes you better.",
        "source": "The Arizona State Press",
        "themes": [
          "resilience",
          "attitude"
        ],
        "url": "https://www.statepress.com/article/2017/02/spsports-asu-head-coach-zeke-jones"
      },
      {
        "text": "The thing I have learned most is that there are many paths to the top of the mountain.",
        "source": "Sun Devil Athletics Q&A (April 2016)",
        "themes": [
          "attitude",
          "belief"
        ]
      }
    ]
  },
  {
    "id": "bill-zadick",
    "name": "Bill Zadick",
    "role": "coach",
    "affiliation": "USA Wrestling national freestyle coach · 2006 world champion",
    "bio": "1996 NCAA champion at Iowa and 2006 world champion who has led the U.S. men's freestyle program since 2016.",
    "quotes": [
      {
        "text": "You can't take things for granted. You have to seize your opportunities when they come.",
        "source": "HawkeyeSports.com, 'Bill Zadick Wins Gold' (Sept 2006)",
        "themes": [
          "gratitude",
          "attitude",
          "grace"
        ]
      },
      {
        "text": "It is what everybody trains for. I felt good about my performance. There are always things you can do better.",
        "source": "HawkeyeSports.com (Sept 2006)",
        "themes": [
          "attitude",
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "terry-steiner",
    "name": "Terry Steiner",
    "role": "coach",
    "affiliation": "USA Wrestling women's national team head coach",
    "bio": "1993 NCAA champion at Iowa who has coached the U.S. women's national team since 2002, building it into an Olympic and world power.",
    "quotes": [
      {
        "text": "Naysayers out there aren't looking for a reason to support you. They're looking for the one reason not to. It's not fair, and it's not right, but that's the reality of it.",
        "source": "The Gazette",
        "themes": [
          "resilience",
          "attitude",
          "grit"
        ]
      }
    ]
  },
  {
    "id": "kevin-jackson",
    "name": "Kevin Jackson",
    "role": "coach",
    "affiliation": "1992 Olympic champion · former Iowa State head coach",
    "bio": "1992 Olympic gold medalist and two-time world champion who coached Iowa State and served as USA Wrestling's national freestyle coach.",
    "quotes": [
      {
        "text": "I won my first world championship in 1991, and that really reaffirmed for me that I was who I thought I was. I had always believed that I was the best wrestler in my weight class",
        "source": "University of Michigan Athletics (mgoblue.com)",
        "themes": [
          "belief"
        ],
        "url": "https://mgoblue.com/news/2024/8/6/wrestling-my-medal-moment-kevin-jackson"
      },
      {
        "text": "I never thought about a legacy, but I do know that when you can leave your imprint on someone for the better, it's a good way to live.",
        "source": "UFC.com, 'Kevin Jackson Is Grateful To Give Back'",
        "themes": [
          "gratitude",
          "attitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "mark-manning",
    "name": "Mark Manning",
    "role": "coach",
    "affiliation": "University of Nebraska",
    "bio": "Nebraska head coach since 2000 and 2025 NCAA Tournament Coach of the Year who has coached more than 40 All-Americans.",
    "quotes": [
      {
        "text": "[...] that discipline and that work ethic and that ability to focus when you don't really want to provides a lot of good lessons for you later on in life.",
        "source": "SDPB (South Dakota Public Broadcasting), podcast transcript",
        "themes": [
          "discipline"
        ],
        "url": "https://www.sdpb.org/podcast/in-play-with-craig-mattick/2024-01-02/in-play-with-craig-mattick-mark-manning"
      },
      {
        "text": "We're about building, we're not about buying.",
        "source": "Hurrdat Sports / Hail Varsity",
        "themes": [
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "alexander-karelin",
    "name": "Alexander Karelin",
    "role": "wrestler",
    "affiliation": "Russia · three-time Olympic Greco-Roman champion",
    "bio": "Siberian super-heavyweight who went 13 years unbeaten in international Greco-Roman wrestling and is widely regarded as the greatest wrestler of all time.",
    "quotes": [
      {
        "text": "I never thought of quitting. It just never crossed my mind. They would have had to carry me out on a stretcher for me to quit.",
        "source": "Olympics.com athlete profile; The National",
        "themes": [
          "resilience",
          "discipline",
          "grit"
        ]
      },
      {
        "text": "He explained to me it's the process of overcoming obstacles. I was moved by his philosophy.",
        "source": "On coach Viktor Kuznetsov; The National",
        "themes": [
          "resilience",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "abdulrashid-sadulaev",
    "name": "Abdulrashid Sadulaev",
    "role": "wrestler",
    "affiliation": "Russia · two-time Olympic freestyle champion",
    "bio": "Nicknamed the Russian Tank, the Dagestani freestyler has dominated the upper weights for a decade with two Olympic golds and six world titles.",
    "quotes": [
      {
        "text": "Of course I expected it. Because of the work I did, it had to be like this.",
        "source": "Sports Illustrated, 'The Tank of Dagestan' (Aug 2016), after winning Rio gold",
        "themes": [
          "effort",
          "belief"
        ]
      }
    ]
  },
  {
    "id": "saori-yoshida",
    "name": "Saori Yoshida",
    "role": "wrestler",
    "affiliation": "Japan · three-time Olympic champion · 13-time world champion",
    "bio": "Japan's unbeaten warrior who won 16 consecutive world and Olympic titles and became a national icon before retiring in 2019.",
    "quotes": [
      {
        "text": "If I wrestle the way I can, I won't lose.",
        "source": "Olympics.com, 'Saori Yoshida, Japan's unbeaten warrior'",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "I am not settling for three golds in a row. I now want to try for a fourth.",
        "source": "Olympics.com",
        "themes": [
          "attitude",
          "effort"
        ]
      }
    ]
  },
  {
    "id": "kaori-icho",
    "name": "Kaori Icho",
    "role": "wrestler",
    "affiliation": "Japan · four-time Olympic champion",
    "bio": "The first woman in any sport to win individual gold at four consecutive Olympics, known for a quiet, perfectionist pursuit of her own ideal of wrestling.",
    "quotes": [
      {
        "text": "My goal, my only goal, is to get [...] closer to the image in my head of what wrestling can be",
        "source": "United World Wrestling, by Tim Foley",
        "themes": [
          "discipline",
          "attitude"
        ],
        "url": "https://uww.org/article/kaori-icho-pursuing-her-own-perfection"
      },
      {
        "text": "I'm only now seeing that improvement is what gives me satisfaction and puts a smile on my face.",
        "source": "United World Wrestling",
        "themes": [
          "attitude",
          "gratitude",
          "grace"
        ]
      },
      {
        "text": "Whatever happens at the Games, I just want to give my all right through to the very end.",
        "source": "Olympics.com",
        "themes": [
          "effort",
          "grit"
        ]
      },
      {
        "text": "I'm adamant about winning.",
        "source": "Olympics.com, before her Rio 2016 final",
        "themes": [
          "belief"
        ]
      }
    ]
  },
  {
    "id": "hassan-yazdani",
    "name": "Hassan Yazdani",
    "role": "wrestler",
    "affiliation": "Iran · 2016 Olympic champion · four-time world champion",
    "bio": "Known in Iran as The Greatest, the Juybar-born freestyler won Olympic gold at Rio 2016 and became famous for his rivalry with David Taylor.",
    "quotes": [
      {
        "text": "I need to appreciate Taylor, because he worked as a motivation and inspiration for me to work better and better and become the champion.",
        "source": "Tehran Times, 'Taylor gave me motivation to win gold: Yazdani'",
        "themes": [
          "gratitude",
          "attitude",
          "grace"
        ]
      },
      {
        "text": "For athletes, respect comes from seeing each other's character and their culture. I always think about respecting all my opponents.",
        "source": "Tehran Times interview, quoted on Olympics.com",
        "themes": [
          "attitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "mijain-lopez",
    "name": "Mijaín López",
    "role": "wrestler",
    "affiliation": "Cuba · five-time Olympic Greco-Roman champion",
    "bio": "The Cuban super-heavyweight became the first athlete in any sport to win five straight Olympic golds in the same individual event, retiring on the mat at Paris 2024.",
    "quotes": [
      {
        "text": "To achieve all of these results, one has to love their sport, love their job, and demonstrate to the world that with so little you can achieve great things.",
        "source": "Paris 2024 post-match comments, Olympics.com / France 24",
        "themes": [
          "effort",
          "gratitude",
          "grace"
        ]
      },
      {
        "text": "Everything you have in mind, and want to achieve, can be achieved.",
        "source": "United World Wrestling, 'Lopez confident in his quest for fifth Olympic gold'",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "I'm happy because I achieved what I wanted. It was my dream, and every dream has a beginning and an end.",
        "source": "Olympics.com interview after Paris 2024",
        "themes": [
          "gratitude"
        ]
      },
      {
        "text": "I left a dream on the mat, but I hope it serves as inspiration for all the young people.",
        "source": "Olympics.com, on leaving his shoes on the mat at Paris 2024",
        "themes": [
          "gratitude",
          "attitude",
          "grace"
        ]
      },
      {
        "text": "The reward of a lifetime of working hard with the help of everyone and my family. It is my biggest win.",
        "source": "ESPN, Paris 2024",
        "themes": [
          "gratitude",
          "effort",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "bruce-baumgartner",
    "name": "Bruce Baumgartner",
    "role": "wrestler",
    "affiliation": "USA · two-time Olympic champion · four-time Olympic medalist",
    "bio": "American super-heavyweight who won medals at four straight Olympics, then coached at Edinboro for more than 36 years and now serves as USA Wrestling president.",
    "quotes": [
      {
        "text": "I believe everybody can and will be successful in life ... if they make the choices to do so, and if they put the work in",
        "source": "Sharon Herald",
        "themes": [
          "belief"
        ],
        "url": "https://www.sharonherald.com/sports/a-dedicated-work-ethic-built-baumgartners-self-belief-and-he-became-the-best-in-his/article_485b6f94-a09d-11eb-a24c-f3f313ee9e89.html"
      },
      {
        "text": "The most important part for me was representing the United States and having an opportunity to compete at your best.",
        "source": "Team USA Hall of Fame profile",
        "themes": [
          "gratitude",
          "grace"
        ]
      },
      {
        "text": "I wanted to be part of a program, to grow a program, and help make a difference in athletes' lives.",
        "source": "National Wrestling Hall of Fame",
        "themes": [
          "gratitude",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "lee-kemp",
    "name": "Lee Kemp",
    "role": "wrestler",
    "affiliation": "USA · three-time world freestyle champion",
    "bio": "The first American to win three world freestyle titles, Kemp lost his Olympic chance to the 1980 boycott and became a coach, speaker, and entrepreneur.",
    "quotes": [
      {
        "text": "Perhaps the one singular thing that I gained from wrestling that stands out the most is that wrestling provided me with the opportunity to learn mental toughness.",
        "source": "USA Wrestling, 'Where are they now? Lee Kemp' (2004)",
        "themes": [
          "resilience",
          "discipline",
          "grit"
        ]
      },
      {
        "text": "The thought process I learned and developed in wrestling is the same for achieving excellence in any vocation or discipline.",
        "source": "leekemp.com",
        "themes": [
          "discipline"
        ]
      },
      {
        "text": "I think the biggest thing is the ability to face adversity.",
        "source": "Resilience Leadership Institute podcast",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Wrestling has really enriched my life, even more than I have known at the time.",
        "source": "USA Wrestling (2004)",
        "themes": [
          "gratitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "rulon-gardner",
    "name": "Rulon Gardner",
    "role": "wrestler",
    "affiliation": "USA · 2000 Olympic Greco-Roman champion",
    "bio": "Wyoming dairy farmer's son who ended Alexander Karelin's 13-year unbeaten run in the Miracle on the Mat at Sydney 2000.",
    "quotes": [
      {
        "text": "When did I think I could beat him? About 10 minutes ago. I kept saying, 'I think I can. I think I can.' But it wasn't until it was over that I knew I could.",
        "source": "AP, 'Miracle on the mat: Gardner stuns Karelin' (Sept 2000)",
        "themes": [
          "belief",
          "grit"
        ]
      },
      {
        "text": "I was nervous. I was a little scared. But I had this big, strong, powerful belief in myself.",
        "source": "NBC News",
        "themes": [
          "belief",
          "resilience"
        ]
      }
    ]
  },
  {
    "id": "kurt-angle",
    "name": "Kurt Angle",
    "role": "wrestler",
    "affiliation": "USA · 1996 Olympic freestyle champion",
    "bio": "Pittsburgh-area heavyweight who won the 1996 Olympic freestyle gold with a fractured neck.",
    "quotes": [
      {
        "text": "That Olympic gold made me who I am. I worked very hard to get that, and that's how my life is. I have an incredible work ethic.",
        "source": "Wrestling Inc. interview",
        "themes": [
          "effort",
          "gratitude",
          "grit"
        ]
      },
      {
        "text": "When you can't feel anything, you go as hard as you possibly can.",
        "source": "Wrestling Inc. / 411mania, on the 1996 Olympic Trials",
        "themes": [
          "effort",
          "grit"
        ]
      }
    ]
  },
  {
    "id": "kenny-monday",
    "name": "Kenny Monday",
    "role": "coach",
    "affiliation": "Morgan State · 1988 Olympic champion",
    "bio": "The first Black wrestler to win Olympic gold, Monday now leads the revived Morgan State program, the only Division I wrestling team at an HBCU.",
    "quotes": [
      {
        "text": "Sometimes you come into practice and your body may not perform for you that day, but you've got to go find a win. Whether you go jump rope for a thousand jumps or do some extra stance and motion or some pull-ups, whatever it is, you're going to go find a win.",
        "source": "FloWrestling, 'Kenny Monday Looking To Find Wins While Building At Morgan State'",
        "themes": [
          "effort",
          "attitude",
          "grit"
        ]
      },
      {
        "text": "It's always about accountability, it's about discipline, it's about sacrifice, it's about love, and it's about passion.",
        "source": "WMAR-2 News Baltimore",
        "themes": [
          "discipline",
          "attitude",
          "grace"
        ]
      },
      {
        "text": "My life experience has prepared me for the moment.",
        "source": "Andscape",
        "themes": [
          "belief",
          "gratitude"
        ]
      }
    ]
  },
  {
    "id": "jordan-burroughs",
    "name": "Jordan Burroughs",
    "role": "wrestler",
    "affiliation": "USA · 2012 Olympic champion · six-time world champion",
    "bio": "2012 Olympic gold medalist and the most decorated American men's freestyle wrestler in history, with six world titles.",
    "quotes": [
      {
        "text": "Fall in love with wrestling, not winning. The wrestler not afraid to get scored on is the most dangerous. The momentum doesn't belong to the wrestler who scored last, but to the wrestler willing to wrestle hardest in the next position. The most important point is the next one.",
        "source": "Jordan Burroughs on X (Nov 2022)",
        "themes": [
          "attitude",
          "effort"
        ]
      },
      {
        "text": "In order to be great at anything, you have to have thick skin. You have to have the ability to forget things quickly.",
        "source": "Olympics.com interview (Jan 2025)",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "There's still gold to be had. There's still wins on the table. Moments to be captured.",
        "source": "Olympics.com interview after Rio 2016",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "You want to feel it. The right thing is to feel it and then fight it. Not to ignore it or avoid it.",
        "source": "Olympics.com, on processing a crushing loss",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "I know that I'm a great wrestler regardless of how I perform. And I know that on any given day, I'm still capable of beating the best wrestler in the world.",
        "source": "Olympics.com interview (Jan 2025)",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "I take solace in the fact I love what I do, I'm good at what I do. I've been able to do it at a high level for a long time.",
        "source": "NBC Sports",
        "themes": [
          "gratitude",
          "grace"
        ]
      },
      {
        "text": "Master yourself, and the sky is the limit. Be disciplined in your preparation, or be humbled by your opposition.",
        "source": "BrainyQuote",
        "themes": [
          "discipline",
          "belief"
        ]
      },
      {
        "text": "Discipline, focus, endurance is what it takes to be the greatest at this sport.",
        "source": "BrainyQuote",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "It's become a lot bigger than just winning championships. It's about inspiring hopefully millions at some point in my career.",
        "source": "Jordan Burroughs interview",
        "themes": [
          "gratitude",
          "attitude",
          "grace"
        ]
      },
      {
        "text": "Every single time I get on the mat, every tournament, I get to see what I'm made of, how tough I am, where my desire is, and how hard I've worked.",
        "source": "Jordan Burroughs interview",
        "themes": [
          "grit",
          "effort"
        ]
      },
      {
        "text": "I'm not afraid to tell people what I hope to accomplish and what I believe I'm capable of. I'm ready to take the backlash if I don't accomplish my dreams.",
        "source": "Jordan Burroughs interview",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "I'm getting back to the essence of why I started this, and that's just because I love it.",
        "source": "Olympics.com",
        "themes": [
          "gratitude",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "kyle-dake",
    "name": "Kyle Dake",
    "role": "wrestler",
    "affiliation": "USA · four-time world champion · two-time Olympic bronze medalist",
    "bio": "The first wrestler to win four NCAA titles at four different weight classes, who went on to four world championships and two Olympic bronze medals.",
    "quotes": [
      {
        "text": "Is this helping me achieve my goal? If the answer is yes, then I will do it. If the answer is no, then I probably won't do it. Most people aren't willing to make the necessary sacrifices for greatness.",
        "source": "Olympics.com, 'Kyle Dake reveals the mantra that has taken him to the top'",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "Being able to defend your title is often harder than winning it the first time. It proved to me that the sacrifices and changes I've made in my life have paid off.",
        "source": "The Fight Library interview (Sept 2019)",
        "themes": [
          "effort",
          "gratitude"
        ]
      },
      {
        "text": "If I had realistic expectations, I probably would have been a couple-time All-American at a small school rather than a four-time national champion. That's just the way I was raised, to believe that I could do anything I set my mind to.",
        "source": "Ithaca.com",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "I'm a lot more in tune with my body: how I need to recover, how I need to train, what I need to eat, how I need to manage my stress. All the things that when you're young you think don't matter. You start to realize that it adds up over time.",
        "source": "Onward State (Oct 2024)",
        "themes": [
          "discipline"
        ]
      },
      {
        "text": "I'm doing it because I truly love competing, I love wrestling, and I believe this is what God called me to do.",
        "source": "Kyle Dake interview",
        "themes": [
          "gratitude",
          "belief"
        ]
      },
      {
        "text": "I knew what I had to offer and I knew there was a place I could reach with my wrestling.",
        "source": "Olympic Channel interview via Olympics.com",
        "themes": [
          "belief",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "david-taylor",
    "name": "David Taylor",
    "role": "coach",
    "affiliation": "Oklahoma State head coach · 2020 Olympic champion · three-time world champion",
    "bio": "The Magic Man won Olympic gold in Tokyo and three world titles at 86 kg before becoming head wrestling coach at Oklahoma State.",
    "quotes": [
      {
        "text": "Once you're the best in the world, you are. No one can ever take that from you in your life.",
        "source": "What Got You There podcast, episode 197 (June 2020)",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "Your preparation is going to have such an impact on your performance.",
        "source": "What Got You There podcast, episode 197",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "You've got to want to be here.",
        "source": "Team USA, text to his coach during the Tokyo Olympics",
        "themes": [
          "attitude"
        ]
      },
      {
        "text": "When you step away from it, it gives you a different perspective coming into practice. It created an energy and excitement that I hadn't felt in four years.",
        "source": "Olympics.com, 'Wrestling's Magic Man is back'",
        "themes": [
          "attitude",
          "gratitude",
          "grace"
        ]
      },
      {
        "text": "My motivation is just to go out and dominate someone. That's what I train my whole life to do.",
        "source": "David Taylor interview",
        "themes": [
          "attitude",
          "effort"
        ]
      },
      {
        "text": "We have a collective group of people that want to get better every single day, and we're pushing each other every single day.",
        "source": "David Taylor on Penn State wrestling culture",
        "themes": [
          "effort",
          "attitude"
        ]
      },
      {
        "text": "It's no different than when I was eight years old. From that day moving forward my goal was to step in the tournament and be the best wrestler I possibly could be. That's the only mindset I know.",
        "source": "David Taylor interview",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "My parents have made a lot of sacrifices to provide as many opportunities as they possibly could for me to continue to reach my goals.",
        "source": "David Taylor interview",
        "themes": [
          "gratitude"
        ]
      }
    ]
  },
  {
    "id": "kyle-snyder",
    "name": "Kyle Snyder",
    "role": "wrestler",
    "affiliation": "USA · 2016 Olympic champion · three-time world champion",
    "bio": "Became the youngest American Olympic wrestling champion at 20 in Rio and has since added three world titles and an Olympic silver.",
    "quotes": [
      {
        "text": "In my dream, I was done wrestling and I was looking back at my career and I realized I had never wrestled to my full potential.",
        "source": "USA Today Network, 'Kyle Snyder's dream provides vision'",
        "themes": [
          "effort",
          "belief"
        ]
      },
      {
        "text": "I truly don't care if I win or lose, but I just want to wrestle hard.",
        "source": "NBC Sports (May 2019)",
        "themes": [
          "effort",
          "attitude",
          "grit"
        ]
      },
      {
        "text": "The people that I'm most excited to compete against are the ones that present the toughest challenge. Because that's where I get to really reveal myself as a wrestler.",
        "source": "FOX Sports (Nov 2016)",
        "themes": [
          "attitude",
          "belief"
        ]
      },
      {
        "text": "Outworking your opponent is such an important thing that coaches teach, but it can make you believe that if you feel good, you are not doing enough.",
        "source": "RUDIS, 'Feel Good About Feeling Good'",
        "themes": [
          "discipline"
        ]
      },
      {
        "text": "Make a plan, follow that plan, and you will be ready to compete hard.",
        "source": "RUDIS",
        "themes": [
          "discipline"
        ]
      },
      {
        "text": "I'm not afraid of anybody and I want the best guys to be there.",
        "source": "The Fight Library",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "The only limits we have are the ones we impose on ourselves. If you believe you can achieve something, and you're willing to work for it, there's no reason why you can't make it happen.",
        "source": "Kyle Snyder interview",
        "themes": [
          "belief",
          "effort"
        ]
      },
      {
        "text": "I'm really thankful and grateful that I've even had this opportunity to wrestle, and that my family and friends have been here to share it with them.",
        "source": "Kyle Snyder post-Olympic interview",
        "themes": [
          "gratitude"
        ]
      },
      {
        "text": "I believe God has given me some great gifts and amazing opportunities to glorify Him on the most prominent stages there are in sports.",
        "source": "Team USA, 2018 AAU Sullivan Award speech",
        "themes": [
          "gratitude",
          "belief"
        ]
      }
    ]
  },
  {
    "id": "spencer-lee",
    "name": "Spencer Lee",
    "role": "wrestler",
    "affiliation": "USA · 2024 Olympic silver medalist · three-time NCAA champion",
    "bio": "Won three NCAA titles at Iowa, including one wrestling on two torn ACLs, and earned Olympic silver at Paris 2024.",
    "quotes": [
      {
        "text": "If you think that you can do something, then do it.",
        "source": "UFC.com, 'Spencer Lee: No Excuses, Just Hard Work'",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "One day at a time is my motto. [...] One World Championships, one competition at a time, but all these things are stepping stones and practice for the ultimate goal of the Olympic gold.",
        "source": "Olympics.com (Scott Bregman)",
        "themes": [
          "discipline"
        ],
        "url": "https://www.olympics.com/en/news/spencer-lee-exclusive-interview-wrestling-world-championships"
      },
      {
        "text": "I got beat. I hate when people try to make excuses for me when I got outwrestled and beat.",
        "source": "Hawk Central (April 2023)",
        "themes": [
          "attitude"
        ]
      },
      {
        "text": "I only wrote four things down: four-time, undefeated state champ; four-time, undefeated national champ; and then, I wrote down an obscene amount of world and Olympic gold medals.",
        "source": "Olympics.com (Scott Bregman)",
        "themes": [
          "belief",
          "attitude"
        ],
        "url": "https://www.olympics.com/en/news/spencer-lee-exclusive-interview-wrestling-world-championships"
      },
      {
        "text": "I've never let it get to my head because I've never been satisfied with my career. I want to do better, compete harder, and win more.",
        "source": "Spencer Lee interview",
        "themes": [
          "attitude",
          "effort"
        ]
      }
    ]
  },
  {
    "id": "helen-maroulis",
    "name": "Helen Maroulis",
    "role": "wrestler",
    "affiliation": "USA · 2016 Olympic champion · three-time world champion",
    "bio": "Made history in Rio 2016 by upsetting Saori Yoshida to become the first American woman to win Olympic wrestling gold.",
    "quotes": [
      {
        "text": "Wrestling is my first love, and there's just nothing like it. It's just such a form of therapy and expression for me so I had to come back.",
        "source": "Olympics.com",
        "themes": [
          "gratitude"
        ],
        "url": "https://www.olympics.com/en/news/wrestling-helen-maroulis-interview-wrestling-therapy-expression"
      },
      {
        "text": "The beauty of wrestling is that everyone can have their own style. No match is ever going to look the same.",
        "source": "Olympics.com / IOC News",
        "themes": [
          "attitude"
        ]
      },
      {
        "text": "Be very careful to just be true to yourself. When I stopped trying to be something that I wasn't, I felt like I was freeing myself up to find ways to make it work for myself.",
        "source": "Olympics.com / IOC News, 'Helen Maroulis talks women's wrestling'",
        "themes": [
          "belief",
          "attitude",
          "grace"
        ]
      },
      {
        "text": "I think I just know how fleeting this moment is. So when it's done, it's gone forever. I want to really, really appreciate every moment and maximise as much as I can.",
        "source": "Olympics.com",
        "themes": [
          "gratitude",
          "grace"
        ],
        "url": "https://www.olympics.com/en/news/wrestling-helen-maroulis-interview-wrestling-therapy-expression"
      },
      {
        "text": "Christ is in me, I am enough",
        "source": "Sports Spectrum",
        "themes": [
          "belief",
          "grace"
        ],
        "url": "https://sportsspectrum.com/sports-spectrum/2021/08/03/magazine-wrestler-helen-maroulis-praises-god/"
      },
      {
        "text": "I always say that each Olympics is my last Olympics. I think that just helps me to be really dialed into the present moment.",
        "source": "Helen Maroulis interview",
        "themes": [
          "gratitude",
          "attitude"
        ]
      },
      {
        "text": "It's been three years of injuries and mental health issues and all these things, but it doesn't deter my confidence. I believe this is all part of my journey.",
        "source": "Helen Maroulis interview",
        "themes": [
          "resilience",
          "belief"
        ]
      },
      {
        "text": "The brain and the body are so resilient.",
        "source": "Helen Maroulis interview",
        "themes": [
          "resilience"
        ]
      },
      {
        "text": "If you work on trying to be the best version of yourself, that will always positively impact others. If we're all doing that, we're all raising each other up together.",
        "source": "Helen Maroulis interview",
        "themes": [
          "belief",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "adeline-gray",
    "name": "Adeline Gray",
    "role": "wrestler",
    "affiliation": "USA · six-time world champion · 2020 Olympic silver medalist",
    "bio": "Six-time world champion and Tokyo Olympic silver medalist who returned to elite competition after becoming a mother of twins.",
    "quotes": [
      {
        "text": "I owe a lot to wrestling for showing me that it's okay to show up a little bit weaker and still figure out a way to win. To still show up that day and get better, even if it is 20 steps lower than you thought it was going to be.",
        "source": "NBC Olympics, after the 2024 Olympic Trials",
        "themes": [
          "gratitude",
          "resilience",
          "grit"
        ]
      },
      {
        "text": "I just keep looking back at how far I've come. [...] I've been able to mentally not be broken by this tiny little step that I had to take and just continue to move forward every single time",
        "source": "NBC Olympics",
        "themes": [
          "resilience",
          "gratitude",
          "grit"
        ],
        "url": "https://www.nbcolympics.com/news/adeline-gray-us-wrestling-legend-and-mother-hopes-inspire-others-even-after-olympic-trials"
      },
      {
        "text": "Sports is a place where women can find their voice, feel confident in their bodies, and realize that they could be strong or be whatever they want to be.",
        "source": "Refinery29 interview (Aug 2021)",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "This is a very tough sport that teaches you a lot about yourself.",
        "source": "ESPNW",
        "themes": [
          "resilience"
        ]
      },
      {
        "text": "Not everybody gets to experience being at the top of the world.",
        "source": "Olympics.com podcast interview",
        "themes": [
          "gratitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "gable-steveson",
    "name": "Gable Steveson",
    "role": "wrestler",
    "affiliation": "USA · 2020 Olympic champion · two-time NCAA champion",
    "bio": "Won Olympic heavyweight gold in Tokyo with two takedowns in the final 10 seconds of the final.",
    "quotes": [
      {
        "text": "The best advice I could give anybody after Tokyo is to never give up, because your life can change in a second.",
        "source": "The Guardian interview (Aug 2021)",
        "themes": [
          "resilience",
          "belief",
          "grit"
        ]
      },
      {
        "text": "I knew I had it in me.",
        "source": "KARE 11",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "The roads keep opening, and I'm just so happy that I can go out there and put on my best performance.",
        "source": "The Pat McAfee Show",
        "themes": [
          "gratitude",
          "attitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "bo-nickal",
    "name": "Bo Nickal",
    "role": "wrestler",
    "affiliation": "USA · three-time NCAA champion · Hodge Trophy winner",
    "bio": "Went 120-3 at Penn State with three NCAA titles and a Hodge Trophy before moving to professional MMA.",
    "quotes": [
      {
        "text": "In wrestling there's no one to blame but yourself. If you lose, you can look at the judges, you can look at your opponent, but ultimately it always comes back to you. It's on you to take responsibility, learn, and continue to push forward.",
        "source": "LowKickMMA, 'Bo Nickal: There's No One To Blame But Yourself'",
        "themes": [
          "attitude",
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Every single day, whether I win or lose, I'm always trying to improve and get better. It doesn't matter if I've won ten in a row or I just lost my last one, I'm going to keep pushing to become the best in the world.",
        "source": "LowKickMMA",
        "themes": [
          "effort",
          "attitude"
        ]
      },
      {
        "text": "The toughest challenge in my career has been adjusting my focus from result-oriented to becoming more process-oriented.",
        "source": "Montana Knife Company ambassador interview",
        "themes": [
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "jason-nolf",
    "name": "Jason Nolf",
    "role": "wrestler",
    "affiliation": "USA · three-time NCAA champion · 2024 Olympian",
    "bio": "Won three NCAA titles at Penn State, one of them weeks after a serious knee injury, and later beat Jordan Burroughs to make the 2024 Olympic team.",
    "quotes": [
      {
        "text": "I'm going to do whatever it takes to be able to come back and wrestle, because I want to be the national champ. So whatever it takes, I'm going to do it.",
        "source": "Men's Fitness, 'Jason Nolf Details the Insane Routine That Made Him a 3x Champ'",
        "themes": [
          "effort",
          "resilience",
          "grit"
        ]
      },
      {
        "text": "I was proud that I learned some things from my injury and that I was able to come back with a different mindset: a more grateful mindset.",
        "source": "The Daily Collegian (Jan 2019)",
        "themes": [
          "gratitude",
          "attitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "zain-retherford",
    "name": "Zain Retherford",
    "role": "wrestler",
    "affiliation": "USA · 2023 world champion · three-time NCAA champion",
    "bio": "Won three NCAA titles and two Hodge Trophies at Penn State, then a 2023 world title and a spot on the 2024 Olympic team.",
    "quotes": [
      {
        "text": "Wins and losses in wrestling are like a bouquet of flowers. [...] two weeks later they wither up and die and you have to pick some more flowers.",
        "source": "Olympics.com (Andrew Binner)",
        "themes": [
          "discipline",
          "attitude",
          "grace"
        ],
        "url": "https://www.olympics.com/en/news/zain-retherford-interview-pumpkin-farm-work-harder-than-wrestling"
      },
      {
        "text": "Having fun is crucial, and making mistakes is part of the journey. The key is to make up for those mistakes with effort and attitude.",
        "source": "RUDIS, 'Zain's Champion Mindset'",
        "themes": [
          "effort",
          "attitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "logan-stieber",
    "name": "Logan Stieber",
    "role": "wrestler",
    "affiliation": "USA · four-time NCAA champion · 2016 world champion",
    "bio": "The fourth wrestler ever to win four NCAA Division I titles, who followed it with a 2016 world championship in freestyle.",
    "quotes": [
      {
        "text": "You either win or lose, but we've been working so hard this year. I just wanted to take it one match at a time.",
        "source": "NCAA.com, 'History confirmed' (March 2015)",
        "themes": [
          "effort",
          "discipline"
        ]
      },
      {
        "text": "You don't want to lose; you don't want to relinquish your title. I'm just going to have to work really, really hard.",
        "source": "The Lantern (Ohio State)",
        "themes": [
          "effort",
          "grit"
        ]
      }
    ]
  },
  {
    "id": "tamyra-mensah-stock",
    "name": "Tamyra Mensah-Stock",
    "role": "wrestler",
    "affiliation": "USA · 2020 Olympic champion · two-time world champion",
    "bio": "Became the first Black woman to win Olympic wrestling gold at Tokyo 2020 and is a two-time world champion.",
    "quotes": [
      {
        "text": "You can do it. Nobody is stopping you, except for you.",
        "source": "Post-match interview at Tokyo 2020, reported by Deseret News",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "The mental game is like 90% of wrestling.",
        "source": "Austin Moms, 'Grit and Grace to Gold'",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "I pray that all the practice, the hell that my coaches put me through, pays off. And every single time it does and I get better and better. It's so weird that there is no cap to the limit that I can do.",
        "source": "Post-match interview at Tokyo 2020, reported by Washington Examiner",
        "themes": [
          "gratitude",
          "effort",
          "grace"
        ]
      },
      {
        "text": "These young women are going to look up there and go, 'I can do that. I can see myself.'",
        "source": "Post-match interview at Tokyo 2020, reported by Deseret News",
        "themes": [
          "belief",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "sarah-hildebrandt",
    "name": "Sarah Hildebrandt",
    "role": "wrestler",
    "affiliation": "USA · 2024 Olympic champion · 2020 Olympic bronze medalist",
    "bio": "Won Olympic gold at Paris 2024 after bronze in Tokyo, becoming the second American woman with two Olympic wrestling medals.",
    "quotes": [
      {
        "text": "Can I inspire anyone to be courageous? To step up onto a mat — anything, any passion, and to believe in themselves, the authenticity of themselves, to just trust that?",
        "source": "NBC Olympics, by Dan Levinsohn",
        "themes": [
          "belief",
          "grace"
        ],
        "url": "https://www.nbcolympics.com/news/sarah-hildebrandt-grapples-usa-its-second-wrestling-gold-two-days"
      },
      {
        "text": "I'm gonna smile every moment I can and take every moment in.",
        "source": "NBC Olympics, Paris 2024",
        "themes": [
          "gratitude",
          "attitude",
          "grace"
        ]
      },
      {
        "text": "I knew that if I was going to go try for Paris, that I was going to do it my way, and it was going to be Sarah.",
        "source": "Olympics.com",
        "themes": [
          "belief",
          "attitude"
        ],
        "url": "https://www.olympics.com/en/news/wrestling-sarah-hildebrandt-exclusive-finding-herself-paris-2024"
      }
    ]
  },
  {
    "id": "amit-elor",
    "name": "Amit Elor",
    "role": "wrestler",
    "affiliation": "USA · 2024 Olympic champion · multiple-time world champion",
    "bio": "Won Olympic gold at Paris 2024 at age 20, the youngest American wrestler ever to do so, after back-to-back senior world titles.",
    "quotes": [
      {
        "text": "Trust in the process and believe in yourself, and don't be afraid to try things. Because if you don't try at all, you automatically lose.",
        "source": "CNN (Aug 2024)",
        "themes": [
          "belief",
          "discipline"
        ]
      },
      {
        "text": "This has been my dream since I was a little girl. This is what I want more than anything in the whole world. I think about it every single day.",
        "source": "NBC Bay Area, Paris 2024",
        "themes": [
          "belief",
          "effort"
        ]
      },
      {
        "text": "I think the No. 1 thing that's helped me develop mentally has been experience [...] Those experiences have not only helped me stay focused and solid under pressure, they've also helped me improve as a wrestler and as a person.",
        "source": "CNN, by Ben Morse",
        "themes": [
          "discipline",
          "resilience"
        ],
        "url": "https://www.cnn.com/2024/08/07/sport/amit-elor-wrestling-us-paris-olympics-spt-intl/index.html"
      },
      {
        "text": "When I experience something like that, it just reminds me that everything is worth it.",
        "source": "CNN (Aug 2024)",
        "themes": [
          "gratitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "aaron-brooks",
    "name": "Aaron Brooks",
    "role": "wrestler",
    "affiliation": "USA · 2024 Olympic bronze medalist · four-time NCAA champion",
    "bio": "Won four NCAA titles at Penn State, beat David Taylor to make the 2024 Olympic team, and took bronze in Paris.",
    "quotes": [
      {
        "text": "Knowing that things come and go kind of gives me a sense of peace to just go out there and wrestle and enjoy.",
        "source": "Religion Unplugged, after his 2024 Olympic bronze",
        "themes": [
          "attitude",
          "gratitude",
          "grace"
        ]
      },
      {
        "text": "This platform is great to wrestle on, but it's to glorify God. This stuff comes and goes. I'm blessed with this opportunity, these gifts.",
        "source": "The Daily Collegian, by Ben Serfass",
        "themes": [
          "gratitude",
          "grace"
        ],
        "url": "https://www.collegian.psu.edu/sports/wrestling/penn-state-wrestling-s-aaron-brooks-answers-wake-up-call-to-win-2nd-consecutive-national/article_0a55cfb2-a855-11ec-82df-5b85b2ce5a92.html"
      }
    ]
  },
  {
    "id": "carter-starocci",
    "name": "Carter Starocci",
    "role": "wrestler",
    "affiliation": "USA · first five-time NCAA Division I champion",
    "bio": "Became the first five-time NCAA Division I wrestling champion in 2025, closing his Penn State career with a title at 184 pounds.",
    "quotes": [
      {
        "text": "It's always win or die.",
        "source": "InterMat, 'Carter Starocci's Top Quotes from the 2022-23 Season'",
        "themes": [
          "attitude",
          "grit"
        ]
      },
      {
        "text": "As a competitor, when you toe the line, I believe I'm the baddest dude out there.",
        "source": "InterMat",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "You can take the Penn State wrestling championship logo away, take the name away, take you guys away, put whoever is in front of me, and I'm ready to go. And for me, that's why I do it.",
        "source": "Sports Illustrated (All Penn State), by Mark Wogenrich",
        "themes": [
          "attitude",
          "belief"
        ],
        "url": "https://www.si.com/college/pennstate/wrestling/penn-state-carter-starocci-wins-landmark-5th-title-ncaa-wrestling-championships"
      },
      {
        "text": "I know it's 'five-time champ,' but it's really just another match.",
        "source": "247Sports (March 2025)",
        "themes": [
          "attitude",
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "j-den-cox",
    "name": "J'den Cox",
    "role": "wrestler",
    "affiliation": "USA · two-time world champion · 2016 Olympic bronze medalist",
    "bio": "Won three NCAA titles at Missouri, Olympic bronze in Rio, and back-to-back world championships in 2018 and 2019.",
    "quotes": [
      {
        "text": "The present is the only thing that counts. [...] I have no world titles. I'm not on a team. I have no Olympic medal. I have nothing. Why would I focus on what I already have, when I'm looking to gain?",
        "source": "Olympics.com",
        "themes": [
          "discipline",
          "attitude"
        ],
        "url": "https://olympics.com/en/news/jden-cox-dilemma-wrestling-tokyo-olympics"
      },
      {
        "text": "I sing. I dance. I crack jokes. I'm not worried about the wrestling because I've already done everything it takes to win.",
        "source": "The Maneater",
        "themes": [
          "attitude",
          "discipline",
          "grace"
        ]
      },
      {
        "text": "Wrestling is not what you are willing to do to someone else. Wrestling is what you are willing to do for yourself.",
        "source": "Level Up Wrestling, 'Quotes from J'den Cox at Practice'",
        "themes": [
          "effort"
        ]
      },
      {
        "text": "That's what is important to me about how I'm remembered: who I was, not what I did.",
        "source": "Show Me Mizzou, 'A new arena' (2024)",
        "themes": [
          "attitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "nick-saban",
    "name": "Nick Saban",
    "role": "coach",
    "affiliation": "Alabama football · seven-time national champion",
    "bio": "Won a record seven college football national championships at LSU and Alabama, building his dynasty on a relentless, day-by-day philosophy he called the Process. Not a wrestling coach, but every wrestling room borrows from him.",
    "quotes": [
      {
        "text": "There are two pains in life. There is the pain of discipline and the pain of disappointment. If you can handle the pain of discipline, then you'll never have to deal with the pain of disappointment.",
        "source": "How Good Do You Want to Be? (2005); repeated on ESPN College GameDay (Oct 2024)",
        "themes": [
          "discipline",
          "grit"
        ]
      },
      {
        "text": "Mediocre people don't like high achievers, and high achievers don't like mediocre people.",
        "source": "Alabama spring practice press conference, 2015",
        "themes": [
          "attitude"
        ]
      },
      {
        "text": "One thing about championship teams is that they're resilient. No matter what is thrown at them, no matter how deep the hole, they find a way to bounce back and overcome adversity.",
        "source": "How Good Do You Want to Be? (2005)",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Becoming a champion is not an easy process. It is done by focusing on what it takes to get there and not on getting there.",
        "source": "How Good Do You Want to Be? (2005)",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "The more one emphasizes winning, the less he or she is able to concentrate on what actually causes success.",
        "source": "How Good Do You Want to Be? (2005)",
        "themes": [
          "discipline",
          "attitude"
        ]
      },
      {
        "text": "Don't think about the championship. Think about what you needed to do in this drill, on this play, in this moment. That's the process: let's think about what we can do today, the task at hand.",
        "source": "Saban to his team, quoted in Monte Burke's Saban: The Making of a Coach (2015)",
        "themes": [
          "discipline"
        ]
      },
      {
        "text": "The process is really what you have to do day in and day out to be successful.",
        "source": "Alabama press conference, 2013",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "It's not human nature to be great. It's human nature to survive, to be average and do what you have to do to get by.",
        "source": "60 Minutes interview, CBS (2013)",
        "themes": [
          "effort",
          "attitude"
        ]
      },
      {
        "text": "When you lose, the mindset is much more: I'm willing to change. I want to learn. I don't want to waste a failure.",
        "source": "SEC Media Days, July 2017",
        "themes": [
          "resilience",
          "attitude"
        ]
      },
      {
        "text": "Discipline is not necessarily just punishment [...] It's how do you change somebody's behavior so they have a better chance to be successful.",
        "source": "FootballScoop, by Doug Samuels (quoting AL.com)",
        "themes": [
          "discipline"
        ],
        "url": "http://footballscoop.com/news/nick-saban-explains-how-discipline-works-at-alabama-discipline-is-not-necessarily-just-punishment/"
      },
      {
        "text": "Eliminate the clutter and all the things that are going on outside, and focus on the things that you can control.",
        "source": "Alabama press conference remarks on the Process",
        "themes": [
          "discipline",
          "attitude"
        ]
      },
      {
        "text": "Get where you're going one mile-marker at a time.",
        "source": "Saban on the process of hard work (247Sports quote archive)",
        "themes": [
          "effort",
          "grit",
          "discipline"
        ]
      },
      {
        "text": "Your attitude is critical to success. Having a positive attitude can have a tremendous effect on how you react and respond to challenges, successes, and failures. If you expect things to be difficult, it will always be easier to solve problems, overcome adversity, and have an enthusiastic energy about how you go about and enjoy your work.",
        "source": "How Good Do You Want to Be? (2005)",
        "themes": [
          "attitude",
          "grace"
        ]
      },
      {
        "text": "All that stuff you write about how good we are? All that stuff they hear on ESPN? It's like poison. Like rat poison.",
        "source": "Postgame press conference after Alabama beat Texas A&M, Oct 2017 (ESPN)",
        "themes": [
          "discipline",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "ben-askren",
    "name": "Ben Askren",
    "role": "wrestler",
    "affiliation": "USA · two-time NCAA champion · 2008 Olympian · MMA world champion",
    "bio": "Known as Funky for his unorthodox scrambling style, Askren won two NCAA titles and two Hodge Trophies at Missouri, became an MMA world champion, and now coaches youth wrestlers at his own academy.",
    "quotes": [
      {
        "text": "I just love to compete. I love to put it on the line.",
        "source": "ONE Championship interview",
        "themes": [
          "attitude",
          "grit"
        ]
      },
      {
        "text": "Be ready to fail, be okay with some of the early failures, and just be ready to bounce back, work hard, and keep a positive attitude.",
        "source": "ONE Championship, wrestling tips for beginners",
        "themes": [
          "resilience",
          "effort",
          "attitude"
        ]
      },
      {
        "text": "I got some issue where I can only think forward.",
        "source": "Yahoo Sports, on his 2025 double lung transplant recovery",
        "themes": [
          "resilience",
          "belief",
          "grit"
        ]
      },
      {
        "text": "I am so grateful for all of the support. It was very inspiring to me.",
        "source": "Recovery update reported by CBS Sports",
        "themes": [
          "gratitude",
          "resilience"
        ]
      },
      {
        "text": "I love wrestling, and our goal is to get them to love wrestling too, so by the time they get older they're all-in on the sport.",
        "source": "Interview on Askren Wrestling Academy",
        "themes": [
          "attitude",
          "gratitude"
        ]
      },
      {
        "text": "I love coaching wrestling. I hope to pass the gift on to others.",
        "source": "Interview on coaching at Askren Wrestling Academy",
        "themes": [
          "gratitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "anthony-robles",
    "name": "Anthony Robles",
    "role": "wrestler",
    "affiliation": "Arizona State · 2011 NCAA champion · born with one leg",
    "bio": "Born with one leg, Robles went 36-0 to win the 2011 NCAA title at 125 pounds and now shares his story as an author, speaker, and ESPN analyst. His book and film are both titled Unstoppable.",
    "quotes": [
      {
        "text": "Greatness is not measured by trophies; it's not measured by getting first place. It's just knowing you gave your very best.",
        "source": "Unstoppable; speaking engagements",
        "themes": [
          "effort",
          "grace"
        ]
      },
      {
        "text": "If you're unchallenged, you're unchanged.",
        "source": "AZQuotes",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Nothing is impossible. It's just, how hard are you willing to work towards it, how hard are you willing to fight for it. How bad do you really want it?",
        "source": "Speaking engagement profile",
        "themes": [
          "effort",
          "belief"
        ]
      },
      {
        "text": "You grind through those situations, and you have to learn how to use that negativity and those trying times as motivation, as something that's going to make you stronger in your life.",
        "source": "Interview",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Unstoppable is a mentality that we have to have in life. It means that we never let our challenges become an excuse.",
        "source": "Speaking bio",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "I had to learn to use my disability to my advantage. I had to focus on what I could do.",
        "source": "FloWrestling interview",
        "themes": [
          "attitude",
          "resilience"
        ]
      },
      {
        "text": "Regardless of adversity, you can be unstoppable.",
        "source": "ITG Next interview",
        "themes": [
          "belief"
        ]
      },
      {
        "text": "How well you do is determined by how hard you work, not what anybody else does.",
        "source": "ASU News",
        "themes": [
          "effort",
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "kyle-maynard",
    "name": "Kyle Maynard",
    "role": "wrestler",
    "affiliation": "USA · congenital amputee wrestler · author of No Excuses",
    "bio": "Born without lower arms or legs, Maynard won 36 varsity wrestling matches in high school, wrote the bestselling memoir No Excuses, and became the first quadruple amputee to climb Kilimanjaro without prosthetics.",
    "quotes": [
      {
        "text": "It's not what I can do; it's what I WILL do.",
        "source": "CBN (The 700 Club)",
        "themes": [
          "belief",
          "effort",
          "grace"
        ],
        "url": "https://cbn.com/article/not-selected/kyle-maynard-accepting-no-excuses"
      },
      {
        "text": "There are no worthy excuses.",
        "source": "Liberty University 'No Excuses' speech",
        "themes": [
          "discipline"
        ]
      },
      {
        "text": "Know your limits, but never stop trying to break them.",
        "source": "Big Think interview",
        "themes": [
          "discipline",
          "grit"
        ]
      },
      {
        "text": "Failure is not fun, but I believe it is the only way to go outside our comfort zone and learn how to stand back up.",
        "source": "Positively Positive feature",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Dreams don't have to manifest as you imagined. They just have to set you on a path, because there is always a way.",
        "source": "Interview",
        "themes": [
          "belief",
          "resilience"
        ]
      },
      {
        "text": "I don't think failure is sometimes part of the process. It always is.",
        "source": "Interview",
        "themes": [
          "grit",
          "resilience"
        ]
      }
    ]
  },
  {
    "id": "wade-schalles",
    "name": "Wade Schalles",
    "role": "wrestler",
    "affiliation": "USA · all-time NCAA leader in career pins",
    "bio": "Holder of the Guinness World Record for most career wins and pins in collegiate wrestling history, and later a longtime college coach.",
    "quotes": [
      {
        "text": "If you get down on yourself, you've lost twice.",
        "source": "PennWest University",
        "themes": [
          "resilience",
          "attitude"
        ],
        "url": "https://www.pennwest.edu/about/people-pennwest/schalles.php"
      }
    ]
  },
  {
    "id": "mark-perry",
    "name": "Mark Perry",
    "role": "coach",
    "affiliation": "USA · two-time NCAA champion · college coach",
    "bio": "Two-time NCAA champion at Iowa and longtime college coach who helped build programs at Illinois, Penn State, and Oklahoma State.",
    "quotes": [
      {
        "text": "[...] It's hell, but there's a lot of pride involved in wrestling and it's a lifetime of work.",
        "source": "The Daily Illini",
        "themes": [
          "grit",
          "discipline"
        ],
        "url": "https://dailyillini.com/uncategorized/2013/01/15/mark-perry-wont-stop-until-illinois-gets-to-the-top/"
      }
    ]
  },
  {
    "id": "scott-goodale",
    "name": "Scott Goodale",
    "role": "coach",
    "affiliation": "Rutgers head coach",
    "bio": "Head wrestling coach at Rutgers who built the program into a consistent national contender.",
    "quotes": [
      {
        "text": "Until we win as a team, we ask for nothing. Keep your mouth shut and go to work.",
        "source": "Rutgers Athletics coverage",
        "themes": [
          "discipline",
          "effort"
        ]
      }
    ]
  },
  {
    "id": "kayla-miracle",
    "name": "Kayla Miracle",
    "role": "wrestler",
    "affiliation": "USA · two-time world silver medalist · Olympian",
    "bio": "Two-time world silver medalist and Olympic wrestler known for a relentless, daily-improvement mindset.",
    "quotes": [
      {
        "text": "Thinking about where I am and how far I can go pushes me beyond my comfort zone. I strive to reach a higher level every day and become my best self, not only on the mat but off the mat.",
        "source": "RUDIS athlete feature",
        "themes": [
          "effort",
          "belief"
        ]
      },
      {
        "text": "I just want to get better, 1% every day.",
        "source": "RUDIS athlete feature",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "Those emotions are fine. You just can't let them control you.",
        "source": "Interview on managing competition emotions",
        "themes": [
          "resilience",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "nick-lee",
    "name": "Nick Lee",
    "role": "wrestler",
    "affiliation": "Penn State · two-time NCAA champion",
    "bio": "Two-time NCAA champion for Penn State at 141 pounds who now serves as an assistant coach for the program.",
    "quotes": [
      {
        "text": "Kindness is huge. We weren't allowed to say any curse words. We weren't allowed to use any type of mean words. It is a powerful trait.",
        "source": "Penn State Athletics feature",
        "themes": [
          "attitude",
          "grace"
        ]
      },
      {
        "text": "There's no better time to appreciate it than now. It's really fun whenever you get to experience this stuff with your teammates.",
        "source": "Penn State Athletics feature",
        "themes": [
          "gratitude"
        ]
      }
    ]
  },
  {
    "id": "ed-ruth",
    "name": "Ed Ruth",
    "role": "wrestler",
    "affiliation": "Penn State · three-time NCAA champion",
    "bio": "Penn State's first three-time NCAA champion, compiling a 136-3 career record before competing in MMA.",
    "quotes": [
      {
        "text": "I practice hard and I prepare for the big stage when I'm in the room. All the work I do makes it fun when I go out and perform in a match.",
        "source": "USA Wrestling, TheMat.com",
        "themes": [
          "effort",
          "discipline"
        ]
      },
      {
        "text": "There is always room to improve. I could've scored more points and wrestled better. I just have to keep working.",
        "source": "USA Wrestling, TheMat.com",
        "themes": [
          "discipline",
          "grit"
        ]
      },
      {
        "text": "Wrestling gives you a different level of grittiness. We work hard, and the general attitude is just to never stop working.",
        "source": "Interview",
        "themes": [
          "grit",
          "effort"
        ]
      }
    ]
  },
  {
    "id": "nate-carr",
    "name": "Nate Carr",
    "role": "coach",
    "affiliation": "Iowa State · three-time NCAA champion · 1988 Olympic bronze medalist",
    "bio": "Three-time NCAA champion at Iowa State and 1988 Olympic bronze medalist who now trains wrestlers at the Cyclone Regional Training Center.",
    "quotes": [
      {
        "text": "Every champion needs a cheerleader.",
        "source": "Interview",
        "themes": [
          "gratitude",
          "belief"
        ]
      },
      {
        "text": "My wife was a big part of my success because she encouraged me and believed when others may have doubted.",
        "source": "Interview",
        "themes": [
          "gratitude",
          "belief"
        ]
      }
    ]
  },
  {
    "id": "tony-ramos",
    "name": "Tony Ramos",
    "role": "wrestler",
    "affiliation": "Iowa · 2014 NCAA champion",
    "bio": "2014 NCAA champion for Iowa at 133 pounds who later competed internationally and coached at North Carolina.",
    "quotes": [
      {
        "text": "This is going to be the last run. I'm going to put everything I've got into it, and if it doesn't work out, it doesn't work out.",
        "source": "Hawk Central interview",
        "themes": [
          "effort",
          "belief"
        ]
      },
      {
        "text": "Everyone can be motivated at certain times, but the people who are disciplined are the ones who can do the things they need to, even when they're not motivated. Be disciplined, be true to yourself, and be honest with yourself.",
        "source": "Interview",
        "themes": [
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "kennedy-blades",
    "name": "Kennedy Blades",
    "role": "wrestler",
    "affiliation": "USA · 2024 Olympic silver medalist",
    "bio": "2024 Olympic silver medalist at 76 kg and one of the youngest wrestlers on Team USA in Paris.",
    "quotes": [
      {
        "text": "I've kind of trained my head into thinking, 'You're the champion. Let's get what's yours.'",
        "source": "Interview on pre-Trials visualization",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "If you put your heart into it, you will experience happiness and grace. It will help you through trials and tribulations.",
        "source": "Interview",
        "themes": [
          "belief",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "steve-fraser",
    "name": "Steve Fraser",
    "role": "coach",
    "affiliation": "USA · 1984 Olympic Greco-Roman champion · longtime USA national coach",
    "bio": "The first American to win Olympic gold in Greco-Roman wrestling, who went on to serve 18 years as USA Wrestling's national Greco-Roman coach.",
    "quotes": [
      {
        "text": "Victory, either on a wrestling mat or in life, doesn't just happen. It is earned through hard work, sacrifice, dedication, and planning. And being mentally tough on and off the mat is the key.",
        "source": "Interview promoting his mental toughness program",
        "themes": [
          "discipline",
          "effort",
          "grit"
        ]
      }
    ]
  },
  {
    "id": "coleman-scott",
    "name": "Coleman Scott",
    "role": "coach",
    "affiliation": "USA · 2012 Olympic bronze medalist · 2008 NCAA champion",
    "bio": "2008 NCAA champion at Oklahoma State and 2012 Olympic bronze medalist who coached at North Carolina before founding The Farm wrestling facility.",
    "quotes": [
      {
        "text": "Don't be so stuck in your ways that you become your own biggest obstacle. Be open to change and willing to learn.",
        "source": "Wrestling Snacks interview",
        "themes": [
          "attitude",
          "resilience"
        ]
      },
      {
        "text": "I think you have to figure out your \"why\"—why are you doing this? That \"why\" changes periodically throughout your career",
        "source": "Wrestling Snacks Newsletter",
        "themes": [
          "attitude",
          "belief"
        ],
        "url": "https://www.wrestlingsnacks.com/p/coleman-scott-interview"
      },
      {
        "text": "There's something beautiful about the way wrestling serves as a microcosm for the real world. Grit. Resilience. Strong will. The world is tough, and it takes staying true to who you are to come out victorious.",
        "source": "Wrestling Snacks interview",
        "themes": [
          "grit",
          "resilience"
        ]
      }
    ]
  },
  {
    "id": "vito-arujau",
    "name": "Vito Arujau",
    "role": "wrestler",
    "affiliation": "USA · 2023 world champion",
    "bio": "2023 world champion and multiple-time world medalist who wrestled for Cornell before turning to senior-level freestyle.",
    "quotes": [
      {
        "text": "No award, no piece of medal is my goal. My goal is [...] to be the best wrestler that I can.",
        "source": "EssentiallySports, by Ankit Singh",
        "themes": [
          "effort",
          "belief"
        ],
        "url": "https://www.essentiallysports.com/us-sports-news-olympics-news-wrestling-news-no-piece-of-medal-is-my-goal-world-wrestling-champion-vito-arujau-denounces-the-olympics-as-his-ultimate-ambition/"
      }
    ]
  },
  {
    "id": "mason-parris",
    "name": "Mason Parris",
    "role": "wrestler",
    "affiliation": "Michigan · 2023 NCAA heavyweight champion",
    "bio": "2023 NCAA heavyweight champion for Michigan now pursuing an Olympic gold medal in freestyle.",
    "quotes": [
      {
        "text": "They say it's harder to stay on top than to actually get there. So I really worked a lot harder when I saw that, because I knew I had stuff to prove.",
        "source": "On3 interview",
        "themes": [
          "effort",
          "grit"
        ]
      },
      {
        "text": "A lot of it is just training and staying consistent, staying disciplined, and continuing to do my thing on the mat and find love and enjoy it.",
        "source": "On3 interview",
        "themes": [
          "discipline",
          "gratitude"
        ]
      },
      {
        "text": "Grateful is the main thing that comes to my mind. Just blessed that I have the coaches and the partners and the school, the support system that's behind me. I couldn't have done it without them.",
        "source": "Post-NCAA title interview",
        "themes": [
          "gratitude"
        ]
      }
    ]
  },
  {
    "id": "randy-couture",
    "name": "Randy Couture",
    "role": "wrestler",
    "affiliation": "Oklahoma State · three-time All-American · UFC Hall of Fame",
    "bio": "Three-time Division I All-American wrestler at Oklahoma State who became a UFC Hall of Fame champion, crediting wrestling for his discipline and mental toughness.",
    "quotes": [
      {
        "text": "I want to inspire people. I want someone to look at me and say, because of you, I didn't give up.",
        "source": "Interview",
        "themes": [
          "belief",
          "resilience",
          "grace"
        ]
      },
      {
        "text": "All my life I have been on a quest to redefine my limitations and test myself.",
        "source": "Interview",
        "themes": [
          "grit",
          "belief"
        ]
      }
    ]
  },
  {
    "id": "sean-bormet",
    "name": "Sean Bormet",
    "role": "coach",
    "affiliation": "Michigan head coach",
    "bio": "University of Michigan head wrestling coach and former Michigan All-American known for mentoring All-Americans and Olympians.",
    "quotes": [
      {
        "text": "Wrestling is the ultimate sport for personal growth and accountability. We enjoy helping young people build confidence, toughness, and a competitive edge on and off the mat.",
        "source": "Interview",
        "themes": [
          "belief",
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "kobe-bryant",
    "name": "Kobe Bryant",
    "role": "athlete",
    "affiliation": "Los Angeles Lakers · five-time NBA champion",
    "bio": "A 20-year NBA veteran and five-time champion whose relentless Mamba Mentality became a byword for competitive excellence. Not a wrestler, but every wrestling room quotes him.",
    "quotes": [
      {
        "text": "Job's not finished.",
        "source": "Postgame press conference, 2009 NBA Finals",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "We're not on this stage just because of talent or ability. We're up here because of 4 a.m. We're up here because of two-a-days or five-a-days. We're up here because we had a dream and let nothing stand in our way.",
        "source": "Speech at the 2016 ESPYs",
        "themes": [
          "discipline",
          "grit",
          "effort"
        ]
      },
      {
        "text": "Everything negative, pressure, challenges, is all an opportunity for me to rise.",
        "source": "Widely attributed",
        "themes": [
          "attitude",
          "resilience"
        ]
      },
      {
        "text": "If you want to be great at something, there's a choice you have to make.",
        "source": "Kobe Bryant's Muse, Showtime documentary (2015)",
        "themes": [
          "belief",
          "discipline"
        ]
      },
      {
        "text": "Those times when you get up early and you work hard. Those times when you stay up late and you work hard. Those times when you don't feel like working, you're too tired, you don't want to push yourself, but you do it anyway. That is actually the dream.",
        "source": "Kobe Bryant's Muse (2015)",
        "themes": [
          "effort",
          "grit"
        ]
      },
      {
        "text": "Mamba Mentality is all about focusing on the process and trusting in the hard work when it matters most.",
        "source": "Kobe Bryant's Muse (2015)",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "My brain cannot process failure. It will not process failure.",
        "source": "Kobe Bryant's Muse (2015)",
        "themes": [
          "resilience",
          "belief"
        ]
      },
      {
        "text": "I have self-doubt. I have insecurity. I have fear of failure. We all have self-doubt. You don't deny it, but you also don't capitulate to it. You embrace it.",
        "source": "The Mamba Mentality: How I Play (2018)",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Great things come from hard work and perseverance. No excuses.",
        "source": "Widely cited interview quote",
        "themes": [
          "effort",
          "discipline"
        ]
      },
      {
        "text": "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
        "source": "Widely attributed",
        "themes": [
          "grace",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "michael-jordan",
    "name": "Michael Jordan",
    "role": "athlete",
    "affiliation": "Chicago Bulls · six-time NBA champion",
    "bio": "Six-time NBA champion widely regarded as the greatest basketball player ever, famed for turning repeated failure into fuel for success.",
    "quotes": [
      {
        "text": "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        "source": "Nike 'Failure' commercial (1997), voiced by Jordan",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "I can accept failure. Everyone fails at something. But I can't accept not trying.",
        "source": "I Can't Accept Not Trying (1994)",
        "themes": [
          "grit",
          "effort"
        ]
      },
      {
        "text": "If you're trying to achieve, there will be roadblocks. But obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it.",
        "source": "I Can't Accept Not Trying (1994)",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Never say never. Because limits, like fears, are often just an illusion.",
        "source": "Basketball Hall of Fame induction speech (2009)",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "Some people want it to happen, some wish it would happen, others make it happen.",
        "source": "Widely attributed",
        "themes": [
          "effort",
          "attitude"
        ]
      },
      {
        "text": "Talent wins games, but teamwork and intelligence win championships.",
        "source": "Widely attributed",
        "themes": [
          "attitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "joshua-medcalf",
    "name": "Joshua Medcalf",
    "role": "author",
    "affiliation": "Author of Chop Wood Carry Water",
    "bio": "Mental toughness coach and author whose parable Chop Wood Carry Water teaches athletes to fall in love with the process of becoming great.",
    "quotes": [
      {
        "text": "Everyone wants to be great, until it's time to do what greatness requires.",
        "source": "Chop Wood Carry Water",
        "themes": [
          "grit",
          "discipline"
        ]
      },
      {
        "text": "Focus on true mental toughness. Focus on commitments and controllables. You can't control the results anyway.",
        "source": "Chop Wood Carry Water",
        "themes": [
          "discipline",
          "attitude"
        ]
      },
      {
        "text": "Nothing is a test. Everything is an opportunity to learn and grow.",
        "source": "Chop Wood Carry Water",
        "themes": [
          "attitude",
          "resilience",
          "grace"
        ]
      },
      {
        "text": "Chopping wood and carrying water is the price of admission for the opportunity to reach sustained excellence.",
        "source": "Chop Wood Carry Water",
        "themes": [
          "discipline",
          "grit"
        ]
      },
      {
        "text": "Dream big. Start small. Be ridiculously faithful.",
        "source": "Chop Wood Carry Water",
        "themes": [
          "belief",
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "yui-susaki",
    "name": "Yui Susaki",
    "role": "wrestler",
    "affiliation": "Japan · 2020 Olympic champion",
    "bio": "Japanese freestyle wrestler at 50 kg who built one of the longest unbeaten streaks in wrestling history before winning Olympic gold at Tokyo 2020.",
    "quotes": [
      {
        "text": "At the Olympics, everyone's mind, technique, and body are at similar levels. So to reach the top, you need your soul. Then your emotions are the last stretch. You need to believe in yourself constantly.",
        "source": "United World Wrestling interview",
        "themes": [
          "belief",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "bajrang-punia",
    "name": "Bajrang Punia",
    "role": "wrestler",
    "affiliation": "India · 2020 Olympic bronze medalist",
    "bio": "Indian freestyle wrestler at 65 kg who became one of India's most decorated wrestlers after turning a heartbreaking 2015 near-miss into fuel for Olympic success.",
    "quotes": [
      {
        "text": "That injury taught me never to give up. It doesn't matter if no one is supporting you. If you refuse to be defeated in your mind, nothing can defeat you.",
        "source": "Global Indian profile",
        "themes": [
          "resilience",
          "belief",
          "grit"
        ]
      },
      {
        "text": "Coming so close and losing out on a medal fuelled a hunger inside me. That's when I decided that I have to win an Olympic medal anyhow.",
        "source": "Olympics.com",
        "themes": [
          "grit",
          "effort"
        ]
      },
      {
        "text": "If you worry about losing, you'll forget how to win.",
        "source": "Global Indian profile, translated from Hindi",
        "themes": [
          "grit",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "vinesh-phogat",
    "name": "Vinesh Phogat",
    "role": "wrestler",
    "affiliation": "India · world medalist · 2024 Olympic finalist",
    "bio": "Indian freestyle wrestler and multiple Commonwealth and Asian Games champion who became a leading voice for wrestlers' welfare in India.",
    "quotes": [
      {
        "text": "We did not give up, our efforts did not stop, and we did not surrender.",
        "source": "Public statement after Paris 2024, widely reported",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "I'm stepping back toward LA 2028 with a heart that's unafraid and a spirit that refuses to bow.",
        "source": "Olympics.com",
        "themes": [
          "grit",
          "belief"
        ]
      }
    ]
  },
  {
    "id": "sushil-kumar",
    "name": "Sushil Kumar",
    "role": "wrestler",
    "affiliation": "India · two-time Olympic medalist · 2010 world champion",
    "bio": "The first Indian to win two individual Olympic medals, in Beijing 2008 and London 2012.",
    "quotes": [
      {
        "text": "2008 taught me how to win an Olympic medal. But I believe one must forget the medal win soon after and focus on the next goal.",
        "source": "Sportskeeda interview",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "I had self-belief, and never at any point did I think anything negative. I kept cheering myself.",
        "source": "Sportskeeda interview",
        "themes": [
          "belief",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "sakshi-malik",
    "name": "Sakshi Malik",
    "role": "wrestler",
    "affiliation": "India · 2016 Olympic bronze medalist",
    "bio": "The first Indian woman to win an Olympic wrestling medal, at Rio 2016.",
    "quotes": [
      {
        "text": "I always felt there was still a lot of time left and I could make a comeback.",
        "source": "Olympics.com",
        "themes": [
          "resilience",
          "belief"
        ]
      },
      {
        "text": "I just did what I enjoyed the most: wrestle.",
        "source": "Sportskeeda interview",
        "themes": [
          "grace",
          "attitude"
        ]
      },
      {
        "text": "I have absolutely no regrets. This is what I chose, and this is what makes me happy. I have not missed out on anything, but have only gained.",
        "source": "Olympics.com",
        "themes": [
          "gratitude",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "yogeshwar-dutt",
    "name": "Yogeshwar Dutt",
    "role": "wrestler",
    "affiliation": "India · 2012 Olympic medalist",
    "bio": "Indian freestyle wrestler who spent nearly two decades chasing an Olympic medal before winning one at London 2012.",
    "quotes": [
      {
        "text": "I knew this was my last shot at Olympic glory, and I somehow had to make it happen.",
        "source": "Sportskeeda interview",
        "themes": [
          "grit",
          "belief"
        ]
      }
    ]
  },
  {
    "id": "ravi-dahiya",
    "name": "Ravi Dahiya",
    "role": "wrestler",
    "affiliation": "India · 2020 Olympic silver medalist",
    "bio": "Indian freestyle wrestler at 57 kg who won silver at the Tokyo Olympics after training through years of hardship.",
    "quotes": [
      {
        "text": "I want to finish what I started at Tokyo. For that, I need to train harder.",
        "source": "Khel Now interview",
        "themes": [
          "discipline",
          "effort"
        ]
      }
    ]
  },
  {
    "id": "frank-chamizo",
    "name": "Frank Chamizo",
    "role": "wrestler",
    "affiliation": "Italy · two-time world champion · three-time Olympic medalist",
    "bio": "Italian freestyle wrestler born in Cuba, a multiple world and European champion known for his flair and confidence.",
    "quotes": [
      {
        "text": "When people don't believe in you, they throw you out. Then you can say, 'Look what you have missed.'",
        "source": "Olympics.com interview",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Even if I had only five followers, I would feel like a star anyway.",
        "source": "Olympics.com video interview",
        "themes": [
          "attitude",
          "belief"
        ]
      }
    ]
  },
  {
    "id": "taha-akgul",
    "name": "Taha Akgül",
    "role": "wrestler",
    "affiliation": "Turkey · 2016 Olympic champion · multiple world champion",
    "bio": "Turkish heavyweight freestyle wrestler, Olympic and multiple world champion who has long carried Turkey's wrestling hopes.",
    "quotes": [
      {
        "text": "I have many titles, but nothing has changed for me. I wake up every morning like it is my first day and train.",
        "source": "Daily Sabah",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "Everything I have today is because of wrestling. I owe everything to this sport.",
        "source": "Daily Sabah",
        "themes": [
          "gratitude"
        ]
      }
    ]
  },
  {
    "id": "r-za-kayaalp",
    "name": "Rıza Kayaalp",
    "role": "wrestler",
    "affiliation": "Turkey · four-time world Greco-Roman champion",
    "bio": "Turkish Greco-Roman heavyweight and one of the most decorated wrestlers in world championship history.",
    "quotes": [
      {
        "text": "God gave us talent, but we developed it through hard work and dedication.",
        "source": "Daily Sabah",
        "themes": [
          "discipline",
          "gratitude",
          "effort"
        ]
      }
    ]
  },
  {
    "id": "aleksandr-medved",
    "name": "Aleksandr Medved",
    "role": "wrestler",
    "affiliation": "Soviet Union · three-time Olympic champion · seven-time world champion",
    "bio": "Soviet-Belarusian freestyle wrestler widely regarded as one of the greatest wrestlers in history, later a national coach.",
    "quotes": [
      {
        "text": "To become a wrestler, one should have the strength of a weightlifter, the agility of an acrobat, the endurance of a runner, and the tactical mind of a chess master.",
        "source": "Olympic profile, widely cited",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "For me, second place was a defeat. But from each such defeat I drew conclusions and kept a diary.",
        "source": "Sport-Express retrospective, translated from Russian",
        "themes": [
          "resilience",
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "erica-wiebe",
    "name": "Erica Wiebe",
    "role": "wrestler",
    "affiliation": "Canada · 2016 Olympic champion",
    "bio": "Canadian freestyle wrestler who won Olympic gold at Rio 2016 and has become a vocal advocate for youth sport and self-belief.",
    "quotes": [
      {
        "text": "You are enough.",
        "source": "CBC News",
        "themes": [
          "belief",
          "grace"
        ]
      },
      {
        "text": "Preparing for the Olympic Games, you're getting beat down every single day. You're drained mentally and physically. But I am where I am today because I've never been scared to fail.",
        "source": "Interview, widely reported",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "The gold medal is never the goal. It's about having the best performance that day. If I can be my best, I'll be champion.",
        "source": "Ottawa Sports Pages interview",
        "themes": [
          "attitude",
          "discipline"
        ]
      },
      {
        "text": "You can out-tactic someone, you can out-technique somebody, you can outlast somebody. I love wrestling as a metaphor for life because there are so many different ways to win.",
        "source": "IMPACT Magazine interview",
        "themes": [
          "grace",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "carol-huynh",
    "name": "Carol Huynh",
    "role": "wrestler",
    "affiliation": "Canada · 2008 Olympic champion",
    "bio": "Canada's first Olympic women's wrestling champion, the daughter of Vietnamese refugees.",
    "quotes": [
      {
        "text": "When I heard those kinds of doubts or negative comments, it made me want to do better, to train harder, to show people that women belong in this sport and that we can be really great at it.",
        "source": "Interview, widely reported",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "My father's decision to come to Canada to make a better life for his children was manifested in the unforeseen opportunities available to us. My journey to the Olympic Games was proof of that.",
        "source": "Olympics.com",
        "themes": [
          "gratitude",
          "belief"
        ]
      }
    ]
  },
  {
    "id": "risako-kawai",
    "name": "Risako Kawai",
    "role": "wrestler",
    "affiliation": "Japan · two-time Olympic champion",
    "bio": "Japanese freestyle wrestler and two-time Olympic gold medalist, at Rio 2016 and Tokyo 2020.",
    "quotes": [
      {
        "text": "Every match here felt heavier. But I believed that pressure would help. I have to become the type of wrestler who can withstand the pressure.",
        "source": "Olympics.com, Tokyo 2020",
        "themes": [
          "belief",
          "resilience"
        ]
      },
      {
        "text": "All I do is take in one day at a time.",
        "source": "Kyodo News via United World Wrestling",
        "themes": [
          "discipline",
          "attitude"
        ]
      },
      {
        "text": "I felt that I had experienced everything that was good about being a wrestler. I felt fulfilled and happy with a life in which wrestling was my passion.",
        "source": "United World Wrestling retirement interview",
        "themes": [
          "gratitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "blessing-oborududu",
    "name": "Blessing Oborududu",
    "role": "wrestler",
    "affiliation": "Nigeria · 2020 Olympic silver medalist",
    "bio": "Nigerian freestyle wrestler and Tokyo 2020 Olympic silver medalist who now coaches and mentors the next generation.",
    "quotes": [
      {
        "text": "I want every young person to know that with hard work, determination, and belief in themselves, they can achieve greatness both in sport and in life.",
        "source": "Olympics.com",
        "themes": [
          "belief",
          "discipline"
        ]
      },
      {
        "text": "I am in a rush to inspire the next Blessing.",
        "source": "Olympics.com interview",
        "themes": [
          "gratitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "odunayo-adekuoroye",
    "name": "Odunayo Adekuoroye",
    "role": "wrestler",
    "affiliation": "Nigeria · world medalist · Commonwealth champion",
    "bio": "Nigerian freestyle wrestler who rose from hawking goods on the street to become a world-ranked champion.",
    "quotes": [
      {
        "text": "Wrestling is not always about your strength or your physique. It's about what is in your head.",
        "source": "The Breaker interview",
        "themes": [
          "attitude",
          "discipline"
        ]
      },
      {
        "text": "People say wrestling is a man's sport, but I was determined as a girl to excel in my newfound love.",
        "source": "The Breaker interview",
        "themes": [
          "grit",
          "belief"
        ]
      }
    ]
  },
  {
    "id": "john-wooden",
    "name": "John Wooden",
    "role": "coach",
    "affiliation": "UCLA basketball · 10 NCAA championships",
    "bio": "Legendary UCLA head coach from 1948 to 1975 whose Pyramid of Success became one of the most influential coaching philosophies in sports history.",
    "quotes": [
      {
        "text": "Ability may get you to the top, but it takes character to keep you there.",
        "source": "Widely documented Wooden quote, cited in Wooden on Leadership",
        "themes": [
          "attitude",
          "grit"
        ]
      },
      {
        "text": "Be quick, but don't hurry.",
        "source": "Wooden's Pyramid of Success teachings",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "Things turn out best for the people who make the best of the way things turn out.",
        "source": "Widely documented Wooden quote",
        "themes": [
          "attitude",
          "resilience"
        ]
      },
      {
        "text": "Make each day your masterpiece.",
        "source": "Wooden on Leadership",
        "themes": [
          "effort",
          "attitude"
        ]
      },
      {
        "text": "There is no substitute for work. Worthwhile results come from hard work and careful planning.",
        "source": "Pyramid of Success, 'Industriousness' block",
        "themes": [
          "effort",
          "discipline"
        ]
      },
      {
        "text": "Little things make big things happen.",
        "source": "Pyramid of Success teachings",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "Talent is God given. Be humble. Fame is man-given. Be thankful. Conceit is self-given. Be careful.",
        "source": "Widely cited Wooden teaching",
        "themes": [
          "gratitude",
          "grace"
        ]
      },
      {
        "text": "You can't live a perfect day without doing something for someone who will never be able to repay you.",
        "source": "Widely documented Wooden quote",
        "themes": [
          "gratitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "vince-lombardi",
    "name": "Vince Lombardi",
    "role": "coach",
    "affiliation": "Green Bay Packers · 5 NFL championships, 2 Super Bowls",
    "bio": "Hall of Fame NFL coach whose relentless drive for excellence with the Green Bay Packers in the 1960s made his name synonymous with winning.",
    "quotes": [
      {
        "text": "Winning is not a sometime thing; it's an all the time thing. You don't do things right once in a while; you do them right all the time.",
        "source": "\"What It Takes to Be Number One\" speech, 1968",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "The quality of a person's life is in direct proportion to their commitment to excellence, regardless of their chosen field of endeavor.",
        "source": "\"What It Takes to Be Number One\" speech",
        "themes": [
          "effort",
          "discipline"
        ]
      },
      {
        "text": "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        "source": "Widely documented Lombardi quote",
        "themes": [
          "effort",
          "belief"
        ]
      },
      {
        "text": "Practice does not make perfect. Only perfect practice makes perfect.",
        "source": "Widely documented Lombardi quote",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "It's not whether you get knocked down, it's whether you get up.",
        "source": "Widely documented Lombardi quote",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Winners never quit and quitters never win.",
        "source": "Widely documented Lombardi quote",
        "themes": [
          "grit",
          "resilience"
        ]
      },
      {
        "text": "The dictionary is the only place that success comes before work. Work is the key to success, and hard work can help you accomplish anything.",
        "source": "Widely documented Lombardi quote",
        "themes": [
          "effort",
          "discipline"
        ]
      }
    ]
  },
  {
    "id": "pat-summitt",
    "name": "Pat Summitt",
    "role": "coach",
    "affiliation": "Tennessee Lady Vols basketball · 8 NCAA championships",
    "bio": "Head coach of the Tennessee Lady Vols for 38 years, retiring as the winningest coach in Division I basketball history.",
    "quotes": [
      {
        "text": "Respect yourself and others. Respect the game. Respect your teammates. Respect your coaches and be on time.",
        "source": "Pat Summitt's Definite Dozen",
        "themes": [
          "discipline",
          "attitude"
        ]
      },
      {
        "text": "Discipline yourself so no one else has to.",
        "source": "Pat Summitt's Definite Dozen",
        "themes": [
          "discipline"
        ]
      },
      {
        "text": "Make hard work your passion.",
        "source": "Pat Summitt's Definite Dozen",
        "themes": [
          "effort"
        ]
      },
      {
        "text": "Here's how I'm going to beat you. I'm going to outwork you.",
        "source": "Sum It Up (2013)",
        "themes": [
          "effort",
          "grit"
        ]
      },
      {
        "text": "There is an old saying: a champion is someone who is willing to be uncomfortable.",
        "source": "Sum It Up (2013)",
        "themes": [
          "grit",
          "resilience"
        ]
      },
      {
        "text": "They don't care how much you know, unless they know how much you care.",
        "source": "Sum It Up (2013)",
        "themes": [
          "grace",
          "attitude"
        ]
      },
      {
        "text": "Put the team before yourself.",
        "source": "Pat Summitt's Definite Dozen",
        "themes": [
          "discipline",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "mike-krzyzewski",
    "name": "Mike Krzyzewski",
    "role": "coach",
    "affiliation": "Duke basketball · 5 NCAA championships",
    "bio": "Duke's head coach for 42 seasons, retiring as the winningest coach in Division I men's basketball history under the name Coach K.",
    "quotes": [
      {
        "text": "Discipline is doing what you are supposed to do, in the best possible manner, at the time you are supposed to do it.",
        "source": "Leading with the Heart (2000)",
        "themes": [
          "discipline"
        ]
      },
      {
        "text": "At the heart of character is honesty and integrity.",
        "source": "Leading with the Heart (2000)",
        "themes": [
          "attitude",
          "grace"
        ]
      },
      {
        "text": "If you're always striving to achieve success that is defined by someone else, you'll always be frustrated. Define your own success.",
        "source": "Leading with the Heart (2000)",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "Adversity can teach you more about yourself than any success, and overcoming an obstacle can sometimes feel even better than achieving an easy victory.",
        "source": "Coach K public remarks on adversity",
        "themes": [
          "resilience",
          "grit"
        ]
      },
      {
        "text": "Wasting time lamenting a mistake or celebrating a success is distracting, and can leave you unprepared for what you are about to face. Next play.",
        "source": "Coach K's 'next play' philosophy",
        "themes": [
          "discipline",
          "resilience"
        ]
      }
    ]
  },
  {
    "id": "herb-brooks",
    "name": "Herb Brooks",
    "role": "coach",
    "affiliation": "1980 U.S. Olympic hockey team · 'Miracle on Ice' gold medal",
    "bio": "Coached the underdog 1980 U.S. Olympic hockey team to a stunning gold medal in one of the greatest upsets in sports history.",
    "quotes": [
      {
        "text": "I'm not looking for the best players, I'm looking for the right ones.",
        "source": "Widely reported remark on selecting the 1980 U.S. Olympic hockey team",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "Great moments are born from great opportunity.",
        "source": "Pregame remarks before the USA-USSR game, Feb. 22, 1980, as recounted by team members",
        "themes": [
          "belief",
          "grit"
        ]
      }
    ]
  },
  {
    "id": "lou-holtz",
    "name": "Lou Holtz",
    "role": "coach",
    "affiliation": "Notre Dame football · 1988 national championship",
    "bio": "Hall of Fame college football coach who led six different programs to bowl games and Notre Dame to a national title in 1988.",
    "quotes": [
      {
        "text": "Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
        "source": "Widely documented Holtz quote",
        "themes": [
          "attitude",
          "belief"
        ]
      },
      {
        "text": "Do the right thing, do the best you can, and always show people you care.",
        "source": "Winning Every Day (1998)",
        "themes": [
          "grace",
          "effort"
        ]
      },
      {
        "text": "How well you do something is determined by your attitude.",
        "source": "Widely documented Holtz quote",
        "themes": [
          "attitude"
        ]
      },
      {
        "text": "Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.",
        "source": "Widely documented Holtz quote",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "Every day, some ordinary person does something extraordinary. Today, it's your turn.",
        "source": "Winning Every Day (1998)",
        "themes": [
          "belief",
          "effort"
        ]
      }
    ]
  },
  {
    "id": "bear-bryant",
    "name": "Bear Bryant",
    "role": "coach",
    "affiliation": "Alabama football · 6 national championships",
    "bio": "Legendary Alabama head coach who, at his 1982 retirement, had won more games than any coach in major college football history.",
    "quotes": [
      {
        "text": "It's not the will to win that matters , everyone has that. It's the will to prepare to win that matters.",
        "source": "Widely documented Bryant quote",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "If anything goes bad, I did it. If anything goes semi-good, we did it. If anything goes really good, then you did it.",
        "source": "Widely documented Bryant quote",
        "themes": [
          "grace",
          "attitude"
        ]
      },
      {
        "text": "Show class, have pride, and display character. If you do, winning takes care of itself.",
        "source": "Widely documented Bryant quote",
        "themes": [
          "attitude",
          "grace"
        ]
      },
      {
        "text": "Have a plan. Follow the plan, and you'll be surprised how successful you can be.",
        "source": "Widely documented Bryant coaching philosophy",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "There's nothing that will work unless you do.",
        "source": "Widely documented Bryant quote",
        "themes": [
          "effort",
          "grit"
        ]
      }
    ]
  },
  {
    "id": "tony-dungy",
    "name": "Tony Dungy",
    "role": "coach",
    "affiliation": "Indianapolis Colts · Super Bowl XLI champion",
    "bio": "The first Black head coach to win a Super Bowl, known for building winning programs on faith, character, and steady leadership.",
    "quotes": [
      {
        "text": "Integrity is not taking the short cut, but knowing that the right thing is the best thing.",
        "source": "Interview on character and leadership",
        "themes": [
          "discipline",
          "grace"
        ]
      },
      {
        "text": "Speaking to five thousand people is no more important than quietly teaching one.",
        "source": "Quiet Strength (2007)",
        "themes": [
          "grace",
          "gratitude"
        ]
      },
      {
        "text": "God's definition of success is really one of significance , the significant difference our lives can make in the lives of others.",
        "source": "Uncommon: Finding Your Path to Significance (2011)",
        "themes": [
          "gratitude",
          "grace"
        ]
      }
    ]
  },
  {
    "id": "bill-belichick",
    "name": "Bill Belichick",
    "role": "coach",
    "affiliation": "New England Patriots · 6 Super Bowl championships",
    "bio": "Six-time Super Bowl-winning head coach of the New England Patriots, widely regarded as one of the greatest coaches in NFL history.",
    "quotes": [
      {
        "text": "Do your job.",
        "source": "New England Patriots team philosophy, widely reported",
        "themes": [
          "discipline",
          "effort"
        ]
      },
      {
        "text": "The most important ability is availability.",
        "source": "Widely documented Belichick coaching philosophy",
        "themes": [
          "discipline",
          "effort"
        ]
      }
    ]
  },
  {
    "id": "pete-carroll",
    "name": "Pete Carroll",
    "role": "coach",
    "affiliation": "Seattle Seahawks · Super Bowl XLVIII champion",
    "bio": "Seahawks head coach and author of Win Forever, known for his relentlessly upbeat 'Always Compete' coaching philosophy.",
    "quotes": [
      {
        "text": "If you want to win forever, you've got to ALWAYS COMPETE.",
        "source": "Win Forever (2010)",
        "themes": [
          "effort",
          "grit"
        ]
      },
      {
        "text": "Compete to be the greatest you, and that will always be enough.",
        "source": "Win Forever (2010)",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "The greatest detractor from high performance is fear: fear that you are not prepared, fear that you are in over your head, fear of failure. If you can eliminate that fear through hard work and preparation, you will put yourself in an incredibly powerful position.",
        "source": "Win Forever (2010)",
        "themes": [
          "belief",
          "discipline"
        ]
      },
      {
        "text": "Never be denied.",
        "source": "Seattle Seahawks team mantra under Carroll",
        "themes": [
          "grit",
          "resilience"
        ]
      }
    ]
  },
  {
    "id": "jim-valvano",
    "name": "Jim Valvano",
    "role": "coach",
    "affiliation": "NC State basketball · 1983 NCAA championship",
    "bio": "NC State coach whose 1983 underdog title run and unforgettable 1993 ESPY speech made him a lasting symbol of perseverance.",
    "quotes": [
      {
        "text": "Don't give up. Don't ever give up.",
        "source": "1993 ESPY Awards, Arthur Ashe Courage Award speech",
        "themes": [
          "grit",
          "resilience"
        ]
      },
      {
        "text": "To me, there are three things we all should do every day. Number one is laugh. Number two is think. Number three is, you should have your emotions moved to tears. If you laugh, you think, and you cry, that's a full day.",
        "source": "1993 ESPY Awards speech",
        "themes": [
          "gratitude",
          "attitude"
        ]
      },
      {
        "text": "Cancer can take away all my physical abilities. It cannot touch my mind, it cannot touch my heart, and it cannot touch my soul.",
        "source": "1993 ESPY Awards speech",
        "themes": [
          "resilience",
          "belief"
        ]
      },
      {
        "text": "My father gave me the greatest gift anyone could give another person: he believed in me.",
        "source": "1993 ESPY Awards speech",
        "themes": [
          "belief",
          "gratitude"
        ]
      },
      {
        "text": "Survive and advance.",
        "source": "NC State's 1983 NCAA tournament run, widely reported catchphrase",
        "themes": [
          "grit",
          "resilience"
        ]
      }
    ]
  },
  {
    "id": "geno-auriemma",
    "name": "Geno Auriemma",
    "role": "coach",
    "affiliation": "UConn women's basketball · 11 NCAA championships",
    "bio": "UConn's head coach for over three decades, building the most dominant dynasty in college basketball history.",
    "quotes": [
      {
        "text": "With the absence of pressure, it's hard to do great things.",
        "source": "Official Geno Auriemma quotes collection",
        "themes": [
          "belief",
          "attitude"
        ]
      },
      {
        "text": "When you are part of that, you have to be gracious in your losing, and treat people with respect.",
        "source": "Post-Final Four remarks, reported by Newsweek",
        "themes": [
          "grace",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "dawn-staley",
    "name": "Dawn Staley",
    "role": "coach",
    "affiliation": "South Carolina women's basketball · 3 NCAA championships",
    "bio": "Head coach at South Carolina and Hall of Fame player, credited with transforming the Gamecocks into a national powerhouse.",
    "quotes": [
      {
        "text": "It's going to hurt, it's going to be uncomfortable, but it's good for you.",
        "source": "The Players' Tribune, \"The Secret\" (2015)",
        "themes": [
          "grit",
          "resilience"
        ]
      },
      {
        "text": "I don't look at basketball principles. I look at people principles, because once you have that, the basketball is the easy part.",
        "source": "Interview on coaching philosophy",
        "themes": [
          "grace",
          "attitude"
        ]
      },
      {
        "text": "A disciplined person can do anything.",
        "source": "Widely reported Staley motto",
        "themes": [
          "discipline",
          "belief"
        ]
      },
      {
        "text": "Dare to do what you don't want to get what you do want.",
        "source": "Widely reported Staley motto",
        "themes": [
          "grit",
          "belief"
        ]
      }
    ]
  },
  {
    "id": "dabo-swinney",
    "name": "Dabo Swinney",
    "role": "coach",
    "affiliation": "Clemson football · 2 national championships",
    "bio": "Clemson's head coach since 2008, known for his faith-driven program culture and 'Best is the standard' mantra.",
    "quotes": [
      {
        "text": "I can't give you guts and I can't give you heart. Tonight it was BYOG: bring your own guts.",
        "source": "Postgame interview after beating Notre Dame, 2015",
        "themes": [
          "grit",
          "belief"
        ]
      },
      {
        "text": "My experiences growing up shaped me from a mental toughness standpoint, a drive, a work ethic, a perseverance, an attitude of hope.",
        "source": "Interview on his upbringing",
        "themes": [
          "grit",
          "resilience"
        ]
      },
      {
        "text": "Best is the standard.",
        "source": "Clemson program mantra under Swinney, widely reported",
        "themes": [
          "discipline",
          "effort"
        ]
      }
    ]
  },
  {
    "id": "phil-jackson",
    "name": "Phil Jackson",
    "role": "coach",
    "affiliation": "Chicago Bulls & LA Lakers · 11 NBA championships",
    "bio": "The winningest coach by championship count in NBA history, known for blending Zen philosophy with team-first basketball.",
    "quotes": [
      {
        "text": "Good teams become great ones when the members trust each other enough to surrender the Me for the We.",
        "source": "Eleven Rings (2013)",
        "themes": [
          "discipline",
          "grace"
        ]
      },
      {
        "text": "The strength of the team is each individual member. The strength of each member is the team.",
        "source": "Eleven Rings (2013)",
        "themes": [
          "discipline",
          "attitude"
        ]
      },
      {
        "text": "The most we can hope for is to create the best possible conditions for success, then let go of the outcome.",
        "source": "Eleven Rings (2013)",
        "themes": [
          "belief",
          "attitude"
        ]
      }
    ]
  },
  {
    "id": "dan-campbell",
    "name": "Dan Campbell",
    "role": "coach",
    "affiliation": "Detroit Lions head coach",
    "bio": "Detroit Lions head coach whose fiery 2021 introductory press conference about grit reset the franchise's identity.",
    "quotes": [
      {
        "text": "When you punch us back, we're gonna smile at you, and when you knock us down, we're going to get up, and on the way we're going to bite a kneecap off.",
        "source": "Introductory press conference, January 21, 2021",
        "themes": [
          "grit",
          "resilience"
        ]
      },
      {
        "text": "Grit is when you have the ability to overcome adversity in any situation. The ability to push through it, mentally, physically, to overcome. I think that's what grit is in a nutshell.",
        "source": "Pardon My Take podcast, 2023",
        "themes": [
          "grit",
          "resilience"
        ]
      }
    ]
  }
]

if (typeof module === "object" && module.exports) { module.exports = TITAN_MINDSET_QUOTES; }
if (typeof self !== "undefined") { self.TITAN_MINDSET_QUOTES = TITAN_MINDSET_QUOTES; }
