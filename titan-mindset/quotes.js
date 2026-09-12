/* Titan Mindset quote library.
   Each person: { id, name, role: "coach" | "wrestler", affiliation, bio, quotes: [{ text, source }] }.
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
        "text": "Gold medals aren't really made of gold. They're made of sweat, determination, and a hard-to-find alloy called guts.",
        "source": "Widely attributed (BrainyQuote, AZQuotes)"
      },
      {
        "text": "Once you've wrestled, everything else in life is easy.",
        "source": "Widely attributed (BrainyQuote, Goodreads)"
      },
      {
        "text": "More enduringly than any other sport, wrestling teaches self-control and pride. Some have wrestled without great skill. None have wrestled without pride.",
        "source": "Widely attributed (BrainyQuote)"
      },
      {
        "text": "The first period is won by the best technician. The second period is won by the kid in the best shape. The third period is won by the kid with the biggest heart.",
        "source": "Widely attributed (BrainyQuote, AZQuotes)"
      },
      {
        "text": "Talent is everywhere, winning attitude is not.",
        "source": "Coaching Wrestling Successfully (1998)"
      },
      {
        "text": "Pain is nothing compared to what it feels like to quit. Give everything you got today, for tomorrow may never come.",
        "source": "Widely attributed (QuoteFancy)"
      },
      {
        "text": "There's always ways of motivating yourself to higher levels. Write about it, dream about it. But after that, turn it into action. Don't just dream.",
        "source": "Widely attributed (BrainyQuote)"
      },
      {
        "text": "If it's important, do it every day. If it isn't, don't do it at all.",
        "source": "Widely attributed (BrainyQuote, AZQuotes)"
      },
      {
        "text": "I shoot, I score. He shoots, I score.",
        "source": "Widely attributed; cited by Spencer Lee"
      },
      {
        "text": "I learned after the match that I am not good enough to win by just being tough. I got to start learning the sport a little more.",
        "source": "WIN Magazine Coach's Corner via TheMat.com"
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
        "source": "BrainyQuote"
      },
      {
        "text": "Attack life and wrestling. Never be satisfied with where you're at.",
        "source": "BrainyQuote"
      },
      {
        "text": "It's all in the mind and the way you choose to deal with it.",
        "source": "BrainyQuote"
      },
      {
        "text": "If you're once a competitor, you're always a competitor.",
        "source": "BrainyQuote"
      },
      {
        "text": "Anyone can wrestle until they are tired.",
        "source": "AZQuotes, QuoteFancy"
      },
      {
        "text": "Unless you continually work, evolve, and innovate, you'll learn a quick and painful lesson from someone who has.",
        "source": "AZQuotes, QuoteFancy"
      },
      {
        "text": "Hard work: you get knocked down, you get back up. You earn your escape. If you lay on your belly, you're going to be there a long time.",
        "source": "Deseret News, 'Coach Cael Sanderson's secret to success' (Nov 2024)"
      },
      {
        "text": "You can win this thing on one leg, but it's going to be hard to do that on one leg and with a bad attitude.",
        "source": "Deseret News / Onward State"
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
        "source": "Oklahoma State University 'True Grit' feature / NWHOF.org"
      },
      {
        "text": "I didn't make Cowboy Wrestling, it made me.",
        "source": "Retirement press conference, April 2024 (Pistols Firing)"
      },
      {
        "text": "I got to be a part of something that when you get knocked down, it's a lot easier to get up because of the program around you.",
        "source": "Retirement press conference, April 2024 (Pistols Firing)"
      },
      {
        "text": "I was so driven that I didn't need sleep. I thought.",
        "source": "Retirement press conference, April 2024 (Pistols Firing)"
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
        "source": "HawkeyeSports.com head coach bio"
      },
      {
        "text": "You don't get what you deserve, you get what you earn.",
        "source": "AZQuotes"
      },
      {
        "text": "We don't deserve anything; we must work for everything.",
        "source": "AZQuotes"
      },
      {
        "text": "I don't believe in dreams. I believe in going after it.",
        "source": "AZQuotes, QuoteFancy"
      },
      {
        "text": "You don't like where you're at, go control what you can control and make it go your way, and I've got to do the same.",
        "source": "Post-NCAA comments reported by Tanner Lafever (2026)"
      },
      {
        "text": "Let them look into my eyes and see the fire and the passion. Let them know what winning is all about.",
        "source": "FloWrestling, 'Top 20 Best Lines from Terry Brands Film'"
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
        "text": "You get what you earn.",
        "source": "FloWrestling, 'Top 20 Best Lines from Terry Brands Film' (TERRY, 2016)"
      },
      {
        "text": "Nothing was going to derail what I had set out to do, except me.",
        "source": "FloWrestling, 'The BEST Tom and Terry Brands Quotes of All-Time'"
      },
      {
        "text": "Positively shape student-athletes' morals, minds, and bodies by teaching our men to terrorize on the mat, yet be perfect gentlemen in society.",
        "source": "Iowa Wrestling Hall of Fame inductee bio"
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
        "text": "If nothing changes, nothing changes.",
        "source": "USA Wrestling, TheMat.com"
      },
      {
        "text": "I don't choose to be a common man. I want to be better tomorrow than today. And through a commitment to work and discipline, but mostly hard work, I'll be a little more content, and a little different from the average guy.",
        "source": "AZQuotes; widely circulated"
      },
      {
        "text": "If you can refine your skills and eliminate your mistakes, you will start winning. That's the price you must pay to be successful in wrestling, and in most aspects of life.",
        "source": "Wrestling quote compilations"
      },
      {
        "text": "We are here to win and that's what we have worked for all year.",
        "source": "GopherSports.com, Big Ten finalist quotes (March 2008)"
      }
    ]
  },
  {
    "id": "bobby-douglas",
    "name": "Bobby Douglas",
    "role": "coach",
    "affiliation": "Iowa State · Arizona State · 1992 U.S. Olympic head coach",
    "bio": "Two-time Olympian who won the 1988 NCAA team title at Arizona State, coached Iowa State from 1993 to 2006, and led the 1992 U.S. Olympic freestyle team.",
    "quotes": [
      {
        "text": "In order for wrestling to survive, we have to promote diversity: women, ethnicity, handicapped, seniors.",
        "source": "WIN Magazine, 'Bobby Douglas: Still a Champion' (Sept 2018)"
      },
      {
        "text": "Tell your history, show your history, or you'll be history.",
        "source": "Iowa State Daily"
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
        "source": "The Learning Leader Show, episode 637 (May 2025)"
      },
      {
        "text": "The sport of wrestling is about chosen suffering. It's choosing the hard thing time and time again, being able to execute under the toughest conditions.",
        "source": "Jim Harshaw Jr. podcast feature"
      },
      {
        "text": "Chosen suffering, going the extra mile, is something I've seen in everyone I've been around who has excelled at life and wrestling.",
        "source": "FloWrestling feature on Tom Ryan"
      },
      {
        "text": "When things are going great I can be really soft, so I have to bring some hard things into my life.",
        "source": "Authority Magazine interview"
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
        "text": "Winning is important. But the most important part is, how do I get there? The character building and all that stuff comes through the process of getting there.",
        "source": "Wrestling Snacks newsletter interview"
      },
      {
        "text": "In wrestling, every practice is a battle, and every match is a war.",
        "source": "Wrestling quote compilations"
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
        "source": "Iowa State Daily"
      },
      {
        "text": "Being a wrestler for 18 years and now a coach for over 25, it's fair to say the sport has shaped every part of who I am. I'm proud to be called a wrestler.",
        "source": "Iowa Wrestling Hall of Fame inductee page"
      },
      {
        "text": "My love of the sport, followed by my desire to win, and then the drive and work ethic to make it happen, are the keys to my success.",
        "source": "Iowa Wrestling Hall of Fame inductee page"
      },
      {
        "text": "If you're going to go out into the parking lot and fight, at least throw a punch.",
        "source": "The Gazette"
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
        "text": "We work really hard from day one to set the foundation for our culture.",
        "source": "On3, 'How Pat Popolizio built NC State wrestling into a powerhouse'"
      },
      {
        "text": "You get in the heat of the battle with the work these guys do in that room. It builds a bond that is like nothing else these guys are going to see in their lifetime.",
        "source": "On3"
      },
      {
        "text": "They weren't training to be 25th in the country. The commitment was there. The guys didn't question the training. They went out and earned the right to win.",
        "source": "On3"
      },
      {
        "text": "This sport teaches you a lot about life. You take a loss and it hurts, it burns.",
        "source": "SI.com"
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
        "source": "Zeke Jones on X"
      },
      {
        "text": "In wrestling, strength, speed, conditioning and mental toughness are all ways to win.",
        "source": "The Arizona State Press (2017)"
      },
      {
        "text": "As good as you can become, you can become that guy here. We offer a program that doesn't have a ceiling.",
        "source": "The Arizona State Press / Sun Devil Athletics"
      },
      {
        "text": "Losing a tough match is like anything else: it makes you stronger, it makes you better.",
        "source": "The Arizona State Press"
      },
      {
        "text": "The thing I have learned most is that there are many paths to the top of the mountain.",
        "source": "Sun Devil Athletics Q&A (April 2016)"
      },
      {
        "text": "Wrestling is the vehicle to world peace.",
        "source": "Zeke Jones on X (Feb 2017)"
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
        "source": "HawkeyeSports.com, 'Bill Zadick Wins Gold' (Sept 2006)"
      },
      {
        "text": "It is what everybody trains for. I felt good about my performance. There are always things you can do better.",
        "source": "HawkeyeSports.com (Sept 2006)"
      },
      {
        "text": "I want us to be the best wrestling nation in the world.",
        "source": "TeamUSA.org (June 2016)"
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
        "text": "What is the difference between an artist and a coach? At the end of the day, an artist can throw their work away, but a coach cannot.",
        "source": "Podcast interview, Team USA Women's Wrestling"
      },
      {
        "text": "Naysayers out there aren't looking for a reason to support you. They're looking for the one reason not to. It's not fair, and it's not right, but that's the reality of it.",
        "source": "The Gazette"
      },
      {
        "text": "There will come a time when the U.S. will dominate the sport of women's wrestling.",
        "source": "FloWrestling"
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
        "text": "I had always believed that I was the best wrestler in my weight class. Winning my first world championship really reaffirmed for me that I was who I thought I was.",
        "source": "WIN Magazine Coach's Corner via TheMat.com"
      },
      {
        "text": "I never thought about a legacy, but I do know that when you can leave your imprint on someone for the better, it's a good way to live.",
        "source": "UFC.com, 'Kevin Jackson Is Grateful To Give Back'"
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
        "text": "The ability to focus when you don't really want to provides a lot of good lessons for you later on in life.",
        "source": "In Play with Craig Mattick podcast, SDPB (Jan 2024)"
      },
      {
        "text": "It's a tough sport and we have tough individuals.",
        "source": "FloWrestling"
      },
      {
        "text": "We're about building, we're not about buying.",
        "source": "Hurrdat Sports / Hail Varsity"
      }
    ]
  },
  {
    "id": "dave-schultz",
    "name": "Dave Schultz",
    "role": "wrestler",
    "affiliation": "USA · 1984 Olympic champion",
    "bio": "1984 Olympic and 1983 world champion revered as one of wrestling's great technicians and teachers, who mentored a generation of U.S. wrestlers.",
    "quotes": [
      {
        "text": "I just enjoy the challenge of me against the other guy. I've never been able to get enough of wrestling.",
        "source": "BrainyQuote"
      },
      {
        "text": "Wrestling is a very technical sport. For example, there are 100 different ways to grab a leg.",
        "source": "BrainyQuote"
      },
      {
        "text": "I cheated! I learned how to wrestle!",
        "source": "InterMat, 'The Life and Legacy of Dave Schultz'"
      },
      {
        "text": "I just have my own way of doing things. That's the charm of wrestling. What works for you might not work for me.",
        "source": "BrainyQuote"
      },
      {
        "text": "I've never tried to hurt anybody. I'm interested in scoring points; pinning and winning.",
        "source": "BrainyQuote"
      }
    ]
  },
  {
    "id": "dan-hodge",
    "name": "Dan Hodge",
    "role": "wrestler",
    "affiliation": "University of Oklahoma · 1956 Olympic silver medalist",
    "bio": "Went 46-0 with 36 pins at Oklahoma, won 1956 Olympic silver, and became the namesake of the Dan Hodge Trophy given annually to college wrestling's best.",
    "quotes": [
      {
        "text": "I got on the mat; I didn't want it to go to the second period. I was a pinner and that's what sold the crowds out.",
        "source": "Slam Wrestling, 'How Danny Hodge became Danny Hodge'"
      },
      {
        "text": "I was in shape. I could fight or I could wrestle and I don't think you wanted to be on either end of it.",
        "source": "Slam Wrestling interview"
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
        "source": "Olympics.com athlete profile; The National"
      },
      {
        "text": "People cannot believe I am natural because I train every day of my life as they have never trained a day in theirs.",
        "source": "Widely attributed (AZQuotes)"
      },
      {
        "text": "I can win a wrestling competition with a decent enough score, but because I am not typical, I must win in atypical ways.",
        "source": "Sports Illustrated, 'A Bruiser and a Thinker' (May 1991)"
      },
      {
        "text": "I do not like to seem immodest. But if I am asked, I must be truthful. Yes, I see fear in the eyes of most of my opponents.",
        "source": "1991 interview, quoted in The National"
      },
      {
        "text": "He explained to me it's the process of overcoming obstacles. I was moved by his philosophy.",
        "source": "On coach Viktor Kuznetsov; The National"
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
        "source": "Sports Illustrated, 'The Tank of Dagestan' (Aug 2016), after winning Rio gold"
      },
      {
        "text": "I really wanted to win in Oslo, because five-time world champion sounds better than four-time champion.",
        "source": "United World Wrestling, 2021 World Championships interview"
      },
      {
        "text": "I had been waiting for that match for a whole year. I wanted to take revenge.",
        "source": "United World Wrestling, on his 2018 rematch with Kyle Snyder"
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
        "source": "Olympics.com, 'Saori Yoshida, Japan's unbeaten warrior'"
      },
      {
        "text": "Fear is there. Anything can happen at an Olympics. I want to use the experience I gained, the fear too, and build a me that can't lose.",
        "source": "Olympics.com, 'Saori Yoshida, Japan's unbeaten warrior'"
      },
      {
        "text": "I am not settling for three golds in a row. I now want to try for a fourth.",
        "source": "Olympics.com"
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
        "text": "Although I have become the world champion once again, I am not fully satisfied. I have not yet gotten the most out of myself.",
        "source": "United World Wrestling, 'Kaori Icho: Pursuing Her Own Perfection'"
      },
      {
        "text": "My goal, my only goal, is to get closer to the image in my head of what wrestling can be.",
        "source": "United World Wrestling"
      },
      {
        "text": "I'm only now seeing that improvement is what gives me satisfaction and puts a smile on my face.",
        "source": "United World Wrestling"
      },
      {
        "text": "Whatever happens at the Games, I just want to give my all right through to the very end.",
        "source": "Olympics.com"
      },
      {
        "text": "I'm adamant about winning.",
        "source": "Olympics.com, before her Rio 2016 final"
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
        "source": "Tehran Times, 'Taylor gave me motivation to win gold: Yazdani'"
      },
      {
        "text": "I lost to Taylor in Tokyo in the final moments of the final, but I trained hard and defeated him in Oslo.",
        "source": "Tehran Times"
      },
      {
        "text": "For athletes, respect comes from seeing each other's character and their culture. I always think about respecting all my opponents.",
        "source": "Tehran Times interview, quoted on Olympics.com"
      },
      {
        "text": "I hope I can achieve the best medals for as long as my body allows me.",
        "source": "Olympics.com, 'Iran's Greatest Hassan Yazdani seeks wrestling immortality'"
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
        "source": "Paris 2024 post-match comments, Olympics.com / France 24"
      },
      {
        "text": "Everything you have in mind, and want to achieve, can be achieved.",
        "source": "United World Wrestling, 'Lopez confident in his quest for fifth Olympic gold'"
      },
      {
        "text": "I'm happy because I achieved what I wanted. It was my dream, and every dream has a beginning and an end.",
        "source": "Olympics.com interview after Paris 2024"
      },
      {
        "text": "I left a dream on the mat, but I hope it serves as inspiration for all the young people.",
        "source": "Olympics.com, on leaving his shoes on the mat at Paris 2024"
      },
      {
        "text": "The reward of a lifetime of working hard with the help of everyone and my family. It is my biggest win.",
        "source": "ESPN, Paris 2024"
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
        "text": "I believe everybody can and will be successful in life.",
        "source": "Sharon Herald, 'A dedicated work-ethic built Baumgartner's self-belief' (2021)"
      },
      {
        "text": "The most important part for me was representing the United States and having an opportunity to compete at your best.",
        "source": "Team USA Hall of Fame profile"
      },
      {
        "text": "I wanted to be part of a program, to grow a program, and help make a difference in athletes' lives.",
        "source": "National Wrestling Hall of Fame"
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
        "source": "USA Wrestling, 'Where are they now? Lee Kemp' (2004)"
      },
      {
        "text": "The thought process I learned and developed in wrestling is the same for achieving excellence in any vocation or discipline.",
        "source": "leekemp.com"
      },
      {
        "text": "I think the biggest thing is the ability to face adversity.",
        "source": "Resilience Leadership Institute podcast"
      },
      {
        "text": "Wrestling has really enriched my life, even more than I have known at the time.",
        "source": "USA Wrestling (2004)"
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
        "source": "AP, 'Miracle on the mat: Gardner stuns Karelin' (Sept 2000)"
      },
      {
        "text": "I was nervous. I was a little scared. But I had this big, strong, powerful belief in myself.",
        "source": "NBC News"
      },
      {
        "text": "I knew if I let him push me around, get even two or three points on me, it was over.",
        "source": "ESPN, Sydney 2000 coverage"
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
        "source": "Wrestling Inc. interview"
      },
      {
        "text": "When you can't feel anything, you go as hard as you possibly can.",
        "source": "Wrestling Inc. / 411mania, on the 1996 Olympic Trials"
      },
      {
        "text": "I was told by a doctor that I couldn't compete, that I was done wrestling.",
        "source": "Newsweek"
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
        "source": "FloWrestling, 'Kenny Monday Looking To Find Wins While Building At Morgan State'"
      },
      {
        "text": "It's always about accountability, it's about discipline, it's about sacrifice, it's about love, and it's about passion.",
        "source": "WMAR-2 News Baltimore"
      },
      {
        "text": "My life experience has prepared me for the moment.",
        "source": "Andscape"
      },
      {
        "text": "That was the first time that I realized that the Olympic gold was the pinnacle of the sport of wrestling. Once I realized that: man, that's what I want to be.",
        "source": "Andscape"
      }
    ]
  },
  {
    "id": "mark-schultz",
    "name": "Mark Schultz",
    "role": "wrestler",
    "affiliation": "USA · 1984 Olympic champion · two-time world champion",
    "bio": "Olympic and world champion and three-time NCAA champion whose story with his brother Dave was told in the film Foxcatcher.",
    "quotes": [
      {
        "text": "Wrestling is the ultimate martial art.",
        "source": "Widely attributed (Wikiquote)"
      },
      {
        "text": "I did not get into the sport of wrestling to win matches and tournaments. I got in to be able to beat anyone in the world, and was willing to do anything to do that.",
        "source": "Wikiquote"
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
        "source": "Jordan Burroughs on X (Nov 2022)"
      },
      {
        "text": "In order to be great at anything, you have to have thick skin. You have to have the ability to forget things quickly.",
        "source": "Olympics.com interview (Jan 2025)"
      },
      {
        "text": "There's still gold to be had. There's still wins on the table. Moments to be captured.",
        "source": "Olympics.com interview after Rio 2016"
      },
      {
        "text": "You want to feel it. The right thing is to feel it and then fight it. Not to ignore it or avoid it.",
        "source": "Olympics.com, on processing a crushing loss"
      },
      {
        "text": "I know that I'm a great wrestler regardless of how I perform. And I know that on any given day, I'm still capable of beating the best wrestler in the world.",
        "source": "Olympics.com interview (Jan 2025)"
      },
      {
        "text": "I take solace in the fact I love what I do, I'm good at what I do. I've been able to do it at a high level for a long time.",
        "source": "NBC Sports"
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
        "source": "Olympics.com, 'Kyle Dake reveals the mantra that has taken him to the top'"
      },
      {
        "text": "Being able to defend your title is often harder than winning it the first time. It proved to me that the sacrifices and changes I've made in my life have paid off.",
        "source": "The Fight Library interview (Sept 2019)"
      },
      {
        "text": "If I had realistic expectations, I probably would have been a couple-time All-American at a small school rather than a four-time national champion. That's just the way I was raised, to believe that I could do anything I set my mind to.",
        "source": "Ithaca.com"
      },
      {
        "text": "I'm a lot more in tune with my body: how I need to recover, how I need to train, what I need to eat, how I need to manage my stress. All the things that when you're young you think don't matter. You start to realize that it adds up over time.",
        "source": "Onward State (Oct 2024)"
      },
      {
        "text": "Dig deep and go get it.",
        "source": "NBC Sports, on his Paris 2024 bronze-medal comeback (quoting his dad)"
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
        "source": "What Got You There podcast, episode 197 (June 2020)"
      },
      {
        "text": "Your preparation is going to have such an impact on your performance.",
        "source": "What Got You There podcast, episode 197"
      },
      {
        "text": "You've got to want to be here.",
        "source": "Team USA, text to his coach during the Tokyo Olympics"
      },
      {
        "text": "Not performing very well at Trials is not the way I want to end my career. I want to compete on a level that I'm happy with.",
        "source": "Olympics.com, 2024 World Championships comeback interview"
      },
      {
        "text": "When you step away from it, it gives you a different perspective coming into practice. It created an energy and excitement that I hadn't felt in four years.",
        "source": "Olympics.com, 'Wrestling's Magic Man is back'"
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
        "source": "USA Today Network, 'Kyle Snyder's dream provides vision'"
      },
      {
        "text": "I truly don't care if I win or lose, but I just want to wrestle hard.",
        "source": "NBC Sports (May 2019)"
      },
      {
        "text": "The people that I'm most excited to compete against are the ones that present the toughest challenge. Because that's where I get to really reveal myself as a wrestler.",
        "source": "FOX Sports (Nov 2016)"
      },
      {
        "text": "Outworking your opponent is such an important thing that coaches teach, but it can make you believe that if you feel good, you are not doing enough.",
        "source": "RUDIS, 'Feel Good About Feeling Good'"
      },
      {
        "text": "Make a plan, follow that plan, and you will be ready to compete hard.",
        "source": "RUDIS"
      },
      {
        "text": "I'm not afraid of anybody and I want the best guys to be there.",
        "source": "The Fight Library"
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
        "text": "I didn't want to tell anyone, because excuses are for wusses.",
        "source": "ESPN post-match interview, 2021 NCAA Championships"
      },
      {
        "text": "If you think that you can do something, then do it.",
        "source": "UFC.com, 'Spencer Lee: No Excuses, Just Hard Work'"
      },
      {
        "text": "One day at a time is my motto. One competition at a time, but all these things are stepping stones and practice for the ultimate goal.",
        "source": "Olympics.com exclusive interview"
      },
      {
        "text": "I got beat. I hate when people try to make excuses for me when I got outwrestled and beat.",
        "source": "Hawk Central (April 2023)"
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
        "text": "Wrestling is my first love, and there's just nothing like it. It's such a form of therapy and expression for me.",
        "source": "Olympics.com exclusive"
      },
      {
        "text": "The beauty of wrestling is that everyone can have their own style. No match is ever going to look the same.",
        "source": "Olympics.com / IOC News"
      },
      {
        "text": "Be very careful to just be true to yourself. When I stopped trying to be something that I wasn't, I felt like I was freeing myself up to find ways to make it work for myself.",
        "source": "Olympics.com / IOC News, 'Helen Maroulis talks women's wrestling'"
      },
      {
        "text": "I know how fleeting this moment is. When it's done, it's gone forever. I want to really appreciate every moment and maximize as much as I can.",
        "source": "Olympics.com exclusive"
      },
      {
        "text": "I am enough.",
        "source": "Her mantra in the Rio 2016 final; Athletes in Action"
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
        "source": "NBC Olympics, after the 2024 Olympic Trials"
      },
      {
        "text": "I just keep looking back at how far I've come. I've been able to mentally not be broken by this tiny little step that I had to take, and just continue to move forward every single time.",
        "source": "NBC Olympics"
      },
      {
        "text": "Sports is a place where women can find their voice, feel confident in their bodies, and realize that they could be strong or be whatever they want to be.",
        "source": "Refinery29 interview (Aug 2021)"
      },
      {
        "text": "This is a very tough sport that teaches you a lot about yourself.",
        "source": "ESPNW"
      },
      {
        "text": "Not everybody gets to experience being at the top of the world.",
        "source": "Olympics.com podcast interview"
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
        "source": "The Guardian interview (Aug 2021)"
      },
      {
        "text": "I knew I had it in me.",
        "source": "KARE 11"
      },
      {
        "text": "The roads keep opening, and I'm just so happy that I can go out there and put on my best performance.",
        "source": "The Pat McAfee Show"
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
        "source": "LowKickMMA, 'Bo Nickal: There's No One To Blame But Yourself'"
      },
      {
        "text": "Every single day, whether I win or lose, I'm always trying to improve and get better. It doesn't matter if I've won ten in a row or I just lost my last one, I'm going to keep pushing to become the best in the world.",
        "source": "LowKickMMA"
      },
      {
        "text": "The toughest challenge in my career has been adjusting my focus from result-oriented to becoming more process-oriented.",
        "source": "Montana Knife Company ambassador interview"
      },
      {
        "text": "I've been doing that move since I was six.",
        "source": "NCAA.com, after pinning Myles Martin in the 2019 NCAA final"
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
        "source": "Men's Fitness, 'Jason Nolf Details the Insane Routine That Made Him a 3x Champ'"
      },
      {
        "text": "I was proud that I learned some things from my injury and that I was able to come back with a different mindset: a more grateful mindset.",
        "source": "The Daily Collegian (Jan 2019)"
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
        "text": "Winning a national title is like having a bouquet of flowers. It's beautiful and everyone says 'Oh, these are beautiful flowers' for a week or so, and then they wither up and die. You've got to get a new set of flowers.",
        "source": "Olympics.com interview after his 2023 world title (recalling advice from Cael Sanderson)"
      },
      {
        "text": "Having fun is crucial, and making mistakes is part of the journey. The key is to make up for those mistakes with effort and attitude.",
        "source": "RUDIS, 'Zain's Champion Mindset'"
      },
      {
        "text": "Wrestling has nothing on growing pumpkins in terms of laboring.",
        "source": "Olympics.com, 'Growing up on a pumpkin farm taught me hard work'"
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
        "source": "NCAA.com, 'History confirmed' (March 2015)"
      },
      {
        "text": "You don't want to lose; you don't want to relinquish your title. I'm just going to have to work really, really hard.",
        "source": "The Lantern (Ohio State)"
      },
      {
        "text": "I see the cameras in my face every time, but it doesn't affect me. I just do what I'm here to do.",
        "source": "NCAA.com (March 2015)"
      }
    ]
  },
  {
    "id": "ben-askren",
    "name": "Ben Askren",
    "role": "wrestler",
    "affiliation": "USA · two-time NCAA champion · two-time Hodge Trophy winner · 2008 Olympian",
    "bio": "Won two NCAA titles and two Hodge Trophies at Missouri with his unorthodox scrambling style before an undefeated run as an MMA champion.",
    "quotes": [
      {
        "text": "If you're competing right, if you're doing it right, competition should be a very selfish pursuit.",
        "source": "BrainyQuote"
      },
      {
        "text": "Your basic wrestling interview is, you ask me how am I going to do, and I say, 'I'm going to do my best. I'm going to wrestle hard.'",
        "source": "BrainyQuote"
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
        "source": "Post-match interview at Tokyo 2020, reported by Deseret News"
      },
      {
        "text": "The mental game is like 90% of wrestling.",
        "source": "Austin Moms, 'Grit and Grace to Gold'"
      },
      {
        "text": "I pray that all the practice, the hell that my coaches put me through, pays off. And every single time it does and I get better and better. It's so weird that there is no cap to the limit that I can do.",
        "source": "Post-match interview at Tokyo 2020, reported by Washington Examiner"
      },
      {
        "text": "These young women are going to look up there and go, 'I can do that. I can see myself.'",
        "source": "Post-match interview at Tokyo 2020, reported by Deseret News"
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
        "text": "Can I inspire anyone to be courageous? To step up onto a mat, any passion, and to believe in themselves, the authenticity of themselves, to just trust that?",
        "source": "Team USA, 'I Just Won the Olympics'"
      },
      {
        "text": "I'm gonna smile every moment I can and take every moment in.",
        "source": "NBC Olympics, Paris 2024"
      },
      {
        "text": "If I was going to go try for Paris, I was going to do it my way, and it was going to be Sarah.",
        "source": "Olympics.com exclusive"
      },
      {
        "text": "I was afraid to be that vulnerable again. I really had to dig deep and find some courage to make some changes.",
        "source": "NBC Sports, 'Sarah Hildebrandt eschews fear to end retirement'"
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
        "source": "CNN (Aug 2024)"
      },
      {
        "text": "This has been my dream since I was a little girl. This is what I want more than anything in the whole world. I think about it every single day.",
        "source": "NBC Bay Area, Paris 2024"
      },
      {
        "text": "The No. 1 thing that's helped me develop mentally has been experience. Those experiences have helped me stay focused and solid under pressure.",
        "source": "NBC Olympics, 'Get to know Amit Elor'"
      },
      {
        "text": "When I experience something like that, it just reminds me that everything is worth it.",
        "source": "CNN (Aug 2024)"
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
        "source": "Religion Unplugged, after his 2024 Olympic bronze"
      },
      {
        "text": "This platform is great to wrestle on, but this stuff comes and goes. I'm blessed with this opportunity, these gifts.",
        "source": "The Daily Collegian (2022)"
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
        "source": "InterMat, 'Carter Starocci's Top Quotes from the 2022-23 Season'"
      },
      {
        "text": "As a competitor, when you toe the line, I believe I'm the baddest dude out there.",
        "source": "InterMat"
      },
      {
        "text": "Take the logo away, take the name away, put whoever is in front of me, and I'm ready to go. And for me, that's why I do it.",
        "source": "247Sports, press conference after his fifth NCAA title (March 2025)"
      },
      {
        "text": "I know it's 'five-time champ,' but it's really just another match.",
        "source": "247Sports (March 2025)"
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
        "text": "The present is the only thing that counts. I have no world titles. I'm not on a team. I have no Olympic medal. I have nothing. Why would I focus on what I already have, when I'm looking to gain?",
        "source": "Olympics.com exclusive, 'The J'den Cox dilemma'"
      },
      {
        "text": "I sing. I dance. I crack jokes. I'm not worried about the wrestling because I've already done everything it takes to win.",
        "source": "The Maneater"
      },
      {
        "text": "Wrestling is not what you are willing to do to someone else. Wrestling is what you are willing to do for yourself.",
        "source": "Level Up Wrestling, 'Quotes from J'den Cox at Practice'"
      },
      {
        "text": "That's what is important to me about how I'm remembered: who I was, not what I did.",
        "source": "Show Me Mizzou, 'A new arena' (2024)"
      }
    ]
  }
];

if (typeof module === "object" && module.exports) { module.exports = TITAN_MINDSET_QUOTES; }
if (typeof self !== "undefined") { self.TITAN_MINDSET_QUOTES = TITAN_MINDSET_QUOTES; }
