// Bron:
//https://youtu.be/bGLZ2pwCaiI

'use strict';

// We have to wait until the page is ready loading all resources. 
document.addEventListener("DOMContentLoaded", function(event) { 
	var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')): {
		todo: [],
		completed: []
	};

	// Remove and complete icons in SVG format
	var movies = [{"name":"Avengers: Infinity War","image":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"149 min","category":"Action, Adventure, Sci-Fi","rank":1,"rate":"8,5","description":"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."},{"name":"Black Panther","image":"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"134 min","category":"Action, Adventure, Sci-Fi","rank":2,"rate":"7,3","description":"T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."},{"name":"Deadpool 2","image":"https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_.jpg","time":"119 min","category":"Action, Adventure, Comedy","rank":3,"rate":"7,8","description":"Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable."},{"name":"Jurassic World: Fallen Kingdom","image":"https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_.jpg","time":"128 min","category":"Action, Adventure, Sci-Fi","rank":4,"rate":"6,2","description":"When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event."},{"name":"The Meg","image":"https://m.media-amazon.com/images/M/MV5BMjg0MzA4MDE0N15BMl5BanBnXkFtZTgwMzk3MzAwNjM@._V1_.jpg","time":"113 min","category":"Action, Horror, Sci-Fi","rank":5,"rate":"5,7","description":"After escaping an attack by what he claims was a 70-foot shark, Jonas Taylor must confront his fears to save those trapped in a sunken submersible."},{"name":"Venom","image":"https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg","time":"112 min","category":"Action, Sci-Fi, Thriller","rank":6,"rate":"6,8","description":"A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it."},{"name":"Mission: Impossible - Fallout","image":"https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SY1000_CR0,0,639,1000_AL_.jpg","time":"147 min","category":"Action, Adventure, Thriller","rank":7,"rate":"7,8","description":"Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong."},{"name":"Ready Player One","image":"https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"140 min","category":"Action, Adventure, Sci-Fi","rank":8,"rate":"7,5","description":"When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all OASIS users to find his Easter Egg, which will give the finder his fortune."},{"name":"Incredibles 2","image":"https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"118 min","category":"Animation, Action, Adventure","rank":9,"rate":"7,7","description":"The Incredibles hero family takes on a new mission, which involves a change in family roles: Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world."},{"name":"Bohemian Rhapsody","image":"https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"134 min","category":"Biography, Drama, Music","rank":10,"rate":"8,1","description":"The story of the legendary rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985)."},{"name":"Ant-Man and the Wasp","image":"https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg","time":"118 min","category":"Action, Adventure, Comedy","rank":11,"rate":"7,1","description":"As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past."},{"name":"Solo: A Star Wars Story","image":"https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"135 min","category":"Action, Adventure, Fantasy","rank":12,"rate":"7","description":"During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion."},{"name":"A Quiet Place","image":"https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"90 min","category":"Drama, Horror, Mystery","rank":13,"rate":"7,6","description":"In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing."},{"name":"The Predator","image":"https://m.media-amazon.com/images/M/MV5BMjM5MDk2NDIxMF5BMl5BanBnXkFtZTgwNjU5NDk3NTM@._V1_SY1000_CR0,0,675,1000_AL_.jpg","time":"107 min","category":"Action, Adventure, Sci-Fi","rank":14,"rate":"5,4","description":"When a young boy accidentally triggers the universe's most lethal hunters' return to Earth, only a ragtag crew of ex-soldiers and a disgruntled scientist can prevent the end of the human race."},{"name":"Fantastic Beasts: The Crimes of Grindelwald","image":"https://m.media-amazon.com/images/M/MV5BZjFiMGUzMTAtNDAwMC00ZjRhLTk0OTUtMmJiMzM5ZmVjODQxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg","time":"134 min","category":"Adventure, Family, Fantasy","rank":15,"rate":"6,7","description":"The second installment of the \"Fantastic Beasts\" series featuring the adventures of Magizoologist Newt Scamander."},{"name":"A Star Is Born","image":"https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg","time":"136 min","category":"Drama, Music, Romance","rank":16,"rate":"7,8","description":"A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral."},{"name":"The Nun","image":"https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"96 min","category":"Horror, Mystery, Thriller","rank":17,"rate":"5,4","description":"A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun."},{"name":"Halloween","image":"https://m.media-amazon.com/images/M/MV5BMmMzNjJhYjUtNzFkZi00MWQ4LWJiMDEtYWM0NTAzNGZjMTI3XkEyXkFqcGdeQXVyOTE2OTMwNDk@._V1_.jpg","time":"106 min","category":"Horror, Thriller","rank":18,"rate":"6,7","description":"Laurie Strode confronts her long-time foe Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago."},{"name":"Ocean's Eight","image":"https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"110 min","category":"Action, Comedy, Crime","rank":19,"rate":"6,2","description":"Debbie Ocean gathers an all-female crew to attempt an impossible heist at New York City's yearly Met Gala."},{"name":"Mamma Mia! Here We Go Again","image":"https://m.media-amazon.com/images/M/MV5BMjEwMTM3OTI1NV5BMl5BanBnXkFtZTgwNDk5NTY0NTM@._V1_SY1000_CR0,0,631,1000_AL_.jpg","time":"114 min","category":"Comedy, Musical, Romance","rank":20,"rate":"6,8","description":"Five years after the events of Mamma Mia! (2008), Sophie prepares for the grand reopening of the Hotel Bella Donna as she learns more about her mother's past."},{"name":"Annihilation","image":"https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY1000_CR0,0,640,1000_AL_.jpg","time":"115 min","category":"Adventure, Drama, Horror","rank":21,"rate":"6,9","description":"A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply."},{"name":"Tomb Raider","image":"https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"119 min","category":"Action, Adventure, Fantasy","rank":22,"rate":"6,3","description":"Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she discovers the island where her father disappeared."},{"name":"Red Sparrow","image":"https://m.media-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"140 min","category":"Action, Drama, Thriller","rank":23,"rate":"6,6","description":"Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations."},{"name":"Crazy Rich Asians","image":"https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"120 min","category":"Comedy, Romance","rank":24,"rate":"7","description":"This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family."},{"name":"Hereditary","image":"https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SY1000_SX675_AL_.jpg","time":"127 min","category":"Drama, Horror, Mystery","rank":25,"rate":"7,3","description":"After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets."},{"name":"Aquaman","image":"https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"143 min","category":"Action, Adventure, Fantasy","rank":26,"rate":"7,2","description":"Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land."},{"name":"A Simple Favor","image":"https://m.media-amazon.com/images/M/MV5BZjFiMGNiNmItMzNiNi00Mjc1LTg1N2YtNWE2NTE5N2VlZTQ3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,657,1000_AL_.jpg","time":"117 min","category":"Comedy, Crime, Drama","rank":27,"rate":"6,9","description":"Stephanie is a single mother with a parenting vlog who befriends Emily, a secretive upper-class woman who has a child at the same elementary school. When Emily goes missing, Stephanie takes it upon herself to investigate."},{"name":"Rampage: Big Meets Bigger","image":"https://m.media-amazon.com/images/M/MV5BNDA1NjA3ODU3OV5BMl5BanBnXkFtZTgwOTg3MTIwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"107 min","category":"Action, Adventure, Sci-Fi","rank":28,"rate":"6,1","description":"When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago."},{"name":"Pacific Rim: Uprising","image":"https://m.media-amazon.com/images/M/MV5BMjI3Nzg0MTM5NF5BMl5BanBnXkFtZTgwOTE2MTgwNTM@._V1_.jpg","time":"111 min","category":"Action, Adventure, Sci-Fi","rank":29,"rate":"5,6","description":"Jake Pentecost, son of Stacker Pentecost, reunites with Mako Mori to lead a new generation of Jaeger pilots, including rival Lambert and 15-year-old hacker Amara, against a new Kaiju threat."},{"name":"The Equalizer 2","image":"https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_.jpg","time":"121 min","category":"Action, Crime, Thriller","rank":30,"rate":"6,7","description":"Robert McCall serves an unflinching justice for the exploited and oppressed, but how far will he go when that is someone he loves?"},{"name":"Sicario: Day of the Soldado","image":"https://m.media-amazon.com/images/M/MV5BMjgyOWRhMDctZTZlNC00M2I1LWI0NDQtYzlmODdmYjY2MThiXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_SX675_AL_.jpg","time":"122 min","category":"Action, Crime, Drama","rank":31,"rate":"7,1","description":"The drug war on the U.S.-Mexico border has escalated as the cartels have begun trafficking terrorists across the US border. To fight the war, federal agent Matt Graver re-teams with the mercurial Alejandro."},{"name":"Game Night","image":"https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"100 min","category":"Action, Comedy, Crime","rank":32,"rate":"7","description":"A group of friends who meet regularly for game nights find themselves entangled in a real-life mystery when the shady brother of one of them is seemingly kidnapped by dangerous gangsters."},{"name":"Call Me By Your Name","image":"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_.jpg","time":"132 min","category":"Drama, Romance","rank":33,"rate":"7,9","description":"In 1980s Italy, a romance blossoms between a seventeen year-old student and the older man hired as his father's research assistant."},{"name":"Fifty Shades Freed","image":"https://m.media-amazon.com/images/M/MV5BMTYxOTQ1MzI0Nl5BMl5BanBnXkFtZTgwMzgwMzIxNDM@._V1_SY1000_CR0,0,631,1000_AL_.jpg","time":"105 min","category":"Drama, Romance, Thriller","rank":34,"rate":"4,5","description":"Anastasia and Christian get married, but Jack Hyde continues to threaten their relationship."},{"name":"The Cloverfield Paradox","image":"https://m.media-amazon.com/images/M/MV5BMTAwOTIxMDA0MjZeQTJeQWpwZ15BbWU4MDg1MjgzNzQz._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"102 min","category":"Drama, Horror, Mystery","rank":35,"rate":"5,6","description":"Orbiting a planet on the brink of war, scientists test a device to solve an energy crisis, and end up face-to-face with a dark alternate reality."},{"name":"The Kissing Booth","image":"https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"105 min","category":"Comedy, Romance","rank":36,"rate":"6,2","description":"A high school student is forced to confront her secret crush at a kissing booth."},{"name":"First Man","image":"https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE1MzAtZjg3NmExODliMDQ0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SY1000_CR0,0,631,1000_AL_.jpg","time":"141 min","category":"Biography, Drama, History","rank":37,"rate":"7,4","description":"A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969."},{"name":"BlacKkKlansman","image":"https://m.media-amazon.com/images/M/MV5BMjUyOTE1NjI0OF5BMl5BanBnXkFtZTgwMTM4ODQ5NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"135 min","category":"Biography, Crime, Drama","rank":38,"rate":"7,5","description":"Ron Stallworth, an African American police officer from Colorado Springs, CO, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader. Based on actual events."},{"name":"Skyscraper","image":"https://m.media-amazon.com/images/M/MV5BOGM3MzQwYzItNDA1Ny00MzIyLTg5Y2QtYTAwMzNmMDU2ZDgxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SY1000_SX632_AL_.jpg","time":"102 min","category":"Action, Adventure, Thriller","rank":39,"rate":"5,8","description":"A security expert must infiltrate a burning skyscraper, 225 stories above ground, when his family is trapped inside by criminals."},{"name":"Tag","image":"https://m.media-amazon.com/images/M/MV5BNzk4NDM3NjkwNF5BMl5BanBnXkFtZTgwNTk5MzkzNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"100 min","category":"Comedy","rank":40,"rate":"6,6","description":"A small group of former classmates organize an elaborate, annual game of tag that requires some to travel all over the country."},{"name":"The Ballad of Buster Scruggs","image":"https://m.media-amazon.com/images/M/MV5BYjRkYTI3M2EtZWQ4Ny00OTA2LWFmMTMtY2E4MTEyZmNjOTMxXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_SX675_AL_.jpg","time":"133 min","category":"Comedy, Drama, Musical","rank":41,"rate":"7,3","description":"Six tales of life and violence in the Old West, following a singing gunslinger, a bank robber, a traveling impresario, an elderly prospector, a wagon train, and a perverse pair of bounty hunters."},{"name":"Outlaw King","image":"https://m.media-amazon.com/images/M/MV5BMTc4MTU4YzEtODBiNC00NzA4LTg0NGItM2ZhZjZlNDFiNjJjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg","time":"121 min","category":"Action, Biography, Drama","rank":42,"rate":"7","description":"A true David vs. Goliath story of how the 14th century Scottish 'Outlaw King' Robert the Bruce used cunning and bravery to defeat the much larger and better equipped occupying English army."},{"name":"I, Tonya","image":"https://m.media-amazon.com/images/M/MV5BMjI5MDY1NjYzMl5BMl5BanBnXkFtZTgwNjIzNDAxNDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"120 min","category":"Biography, Comedy, Drama","rank":43,"rate":"7,5","description":"Competitive ice skater Tonya Harding rises amongst the ranks at the U.S. Figure Skating Championships, but her future in the activity is thrown into doubt when her ex-husband intervenes."},{"name":"To All the Boys I've Loved Before","image":"https://m.media-amazon.com/images/M/MV5BMjQ3NjM5MTAzN15BMl5BanBnXkFtZTgwODQzMDAwNjM@._V1_SY1000_CR0,0,639,1000_AL_.jpg","time":"99 min","category":"Drama, Romance","rank":44,"rate":"7,3","description":"A teenage girl's secret love letters are exposed and wreak havoc on her love life."},{"name":"The First Purge","image":"https://m.media-amazon.com/images/M/MV5BYmVjMWJhMTYtMzUxMC00ODdhLTk3YzMtZDFhNGUyOGFhYTY0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg","time":"98 min","category":"Action, Horror, Sci-Fi","rank":45,"rate":"5,1","description":"America's third political party, the New Founding Fathers of America, comes to power and conducts an experiment: no laws for 12 hours on Staten Island. No one has to stay on the island, but $5,000 is given to anyone who does."},{"name":"Bad Times at the El Royale","image":"https://m.media-amazon.com/images/M/MV5BOTk1Nzk1MDc1MF5BMl5BanBnXkFtZTgwNjU2NDExNjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"141 min","category":"Crime, Drama, Mystery","rank":46,"rate":"7,1","description":"Circa 1969, several strangers, most with a secret to bury, meet by chance at Lake Tahoe's El Royale, a rundown hotel with a dark past. Over the course of one night, everyone will show their true colors - before everything goes to hell."},{"name":"The Post","image":"https://m.media-amazon.com/images/M/MV5BMjQyMjEwOTIwNV5BMl5BanBnXkFtZTgwOTkzNTMxNDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"116 min","category":"Biography, Drama, History","rank":47,"rate":"7,2","description":"A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between the press and the government."},{"name":"A Wrinkle in Time","image":"https://m.media-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"109 min","category":"Adventure, Family, Fantasy","rank":48,"rate":"4,2","description":"After the disappearance of her scientist father, three peculiar beings send Meg, her brother, and her friend to space in order to find him."},{"name":"Janneman Robinson & Poeh","image":"https://m.media-amazon.com/images/M/MV5BMjAzOTM2OTAyNF5BMl5BanBnXkFtZTgwNTg5ODg1NTM@._V1_SY1000_SX675_AL_.jpg","time":"104 min","category":"Animation, Adventure, Comedy","rank":49,"rate":"7,3","description":"A working-class family man, Christopher Robin, encounters his childhood friend Winnie-the-Pooh, who helps him to rediscover the joys of life."},{"name":"Blockers","image":"https://m.media-amazon.com/images/M/MV5BMjE0ODIzNjkzMl5BMl5BanBnXkFtZTgwODQ3MzU4NDM@._V1_SY1000_SX632_AL_.jpg","time":"102 min","category":"Comedy","rank":50,"rate":"6,2","description":"Three parents try to stop their daughters from losing their virginity on prom night."}];
	var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
	var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

	renderTodoList();

	function addItem (value) {
		addItemToDOM(value);
	    document.getElementById('item').value = '';
	    
	    data.todo.push(value);
	    dataObjectUpdated();
	};

	function renderTodoList() {
		if (!data.todo.length && !data.completed.length) return;

		for (var i = 0; i< data.todo.length; i++) {
			var value = data.todo[i];
			addItemToDOM(value);
		}

		for (var j = 0; j<data.completed.length; j++) {
			var value = data.completed[j];
			addItemToDOM(value, true);
		}

		for (var u = 0; u<movies.length; u++) {
			var movie = movies[u];
			addItemToDOM(movie.name);
		}
	} 

	function dataObjectUpdated () {
		localStorage.setItem('todoList', JSON.stringify(data));
	}

	function removeItem() {
		var item = this.parentNode.parentNode;
		var parent = item.parentNode;
		var id = parent.id;
		var value = item.innerText;

		if (id === 'todo') {
			data.todo.splice(data.todo.indexOf(value), 1);
		} else {
			data.completed.splice(data.completed.indexOf(value), 1);
		}
		dataObjectUpdated();

		parent.removeChild(item);
	}

	function completeItem() {
		var item = this.parentNode.parentNode;
		var parent = item.parentNode;
		var id = parent.id;
		var value = item.innerText;

		if (id === 'todo') {
			data.todo.splice(data.todo.indexOf(value), 1);
			data.completed.push(value);
		} else {
			data.completed.splice(data.completed.indexOf(value), 1);
			data.todo.push(value);
		}
		dataObjectUpdated();

		// Check if the item should be added to the completed list or to re-added to the todo list
		var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

		parent.removeChild(item);
		target.insertBefore(item, target.childNodes[0]);
	}

	// Adds a new item to the todo list
	function addItemToDOM(text, completed) {
		var list = (completed) ? document.getElementById('completed'): document.getElementById('todo');

		var item = document.createElement('li');
		item.innerText = text;

		var buttons = document.createElement('div');
		buttons.classList.add('buttons');

		var remove = document.createElement('button');
		remove.classList.add('remove');
		remove.innerHTML = removeSVG;

		// Add click event for removing the item
		remove.addEventListener('click', removeItem);

		var complete = document.createElement('button');
		complete.classList.add('complete');
		complete.innerHTML = completeSVG;

		// Add click event for completing the item
		complete.addEventListener('click', completeItem);


		buttons.appendChild(remove);
		buttons.appendChild(complete);
		item.appendChild(buttons);

		list.insertBefore(item, list.childNodes[0]);
	}

	// User clicked on the add button
	// If there is any text inside the item field, add that text to the to do list
	document.getElementById('add').addEventListener('click', function () {
	    var value = document.getElementById('item').value;
	    if (value) {
	    	addItem(value);
	    }
	});

	document.getElementById('item').addEventListener('keydown', function (e) {
		var value = this.value;
		if (e.code === 'Enter' && value) {
			addItem(value);
		}
	});
});