// Sources
// https://youtu.be/bGLZ2pwCaiI
// https://codebeautify.org/excel-to-json
// https://www.w3schools.com/js/js_json_parse.asp

// Icons made by Smashicons from www.flaticon.com is licensed by Creative Commons BY 3.0

'use strict';

// This is the current movie id that we use to load movies
var currentMovieId = 7;

/**
 * As I didn't know how to implement an actual connection with IMDB
 * I choose to load the movies like this. This method returns a simple
 * list of data you might get if you call the actual API.
 * This list I made in Excell and I converted that to JSON. 
 */
function loadMovies() {
	return [{"name":"Avengers: Infinity War","image":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"149 min","category":"Action, Adventure, Sci-Fi","rank":1,"rate":"8,5","description":"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."},{"name":"Black Panther","image":"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"134 min","category":"Action, Adventure, Sci-Fi","rank":2,"rate":"7,3","description":"T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."},{"name":"Deadpool 2","image":"https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_.jpg","time":"119 min","category":"Action, Adventure, Comedy","rank":3,"rate":"7,8","description":"Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable."},{"name":"Jurassic World: Fallen Kingdom","image":"https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_.jpg","time":"128 min","category":"Action, Adventure, Sci-Fi","rank":4,"rate":"6,2","description":"When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event."},{"name":"The Meg","image":"https://m.media-amazon.com/images/M/MV5BMjg0MzA4MDE0N15BMl5BanBnXkFtZTgwMzk3MzAwNjM@._V1_.jpg","time":"113 min","category":"Action, Horror, Sci-Fi","rank":5,"rate":"5,7","description":"After escaping an attack by what he claims was a 70-foot shark, Jonas Taylor must confront his fears to save those trapped in a sunken submersible."},{"name":"Venom","image":"https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg","time":"112 min","category":"Action, Sci-Fi, Thriller","rank":6,"rate":"6,8","description":"A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it."},{"name":"Mission: Impossible - Fallout","image":"https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SY1000_CR0,0,639,1000_AL_.jpg","time":"147 min","category":"Action, Adventure, Thriller","rank":7,"rate":"7,8","description":"Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong."},{"name":"Ready Player One","image":"https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"140 min","category":"Action, Adventure, Sci-Fi","rank":8,"rate":"7,5","description":"When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all OASIS users to find his Easter Egg, which will give the finder his fortune."},{"name":"Incredibles 2","image":"https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"118 min","category":"Animation, Action, Adventure","rank":9,"rate":"7,7","description":"The Incredibles hero family takes on a new mission, which involves a change in family roles: Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world."},{"name":"Bohemian Rhapsody","image":"https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"134 min","category":"Biography, Drama, Music","rank":10,"rate":"8,1","description":"The story of the legendary rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985)."},{"name":"Ant-Man and the Wasp","image":"https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg","time":"118 min","category":"Action, Adventure, Comedy","rank":11,"rate":"7,1","description":"As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past."},{"name":"Solo: A Star Wars Story","image":"https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"135 min","category":"Action, Adventure, Fantasy","rank":12,"rate":"7","description":"During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion."},{"name":"A Quiet Place","image":"https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"90 min","category":"Drama, Horror, Mystery","rank":13,"rate":"7,6","description":"In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing."},{"name":"The Predator","image":"https://m.media-amazon.com/images/M/MV5BMjM5MDk2NDIxMF5BMl5BanBnXkFtZTgwNjU5NDk3NTM@._V1_SY1000_CR0,0,675,1000_AL_.jpg","time":"107 min","category":"Action, Adventure, Sci-Fi","rank":14,"rate":"5,4","description":"When a young boy accidentally triggers the universe's most lethal hunters' return to Earth, only a ragtag crew of ex-soldiers and a disgruntled scientist can prevent the end of the human race."},{"name":"Fantastic Beasts: The Crimes of Grindelwald","image":"https://m.media-amazon.com/images/M/MV5BZjFiMGUzMTAtNDAwMC00ZjRhLTk0OTUtMmJiMzM5ZmVjODQxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg","time":"134 min","category":"Adventure, Family, Fantasy","rank":15,"rate":"6,7","description":"The second installment of the \"Fantastic Beasts\" series featuring the adventures of Magizoologist Newt Scamander."},{"name":"A Star Is Born","image":"https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg","time":"136 min","category":"Drama, Music, Romance","rank":16,"rate":"7,8","description":"A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral."},{"name":"The Nun","image":"https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"96 min","category":"Horror, Mystery, Thriller","rank":17,"rate":"5,4","description":"A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun."},{"name":"Halloween","image":"https://m.media-amazon.com/images/M/MV5BMmMzNjJhYjUtNzFkZi00MWQ4LWJiMDEtYWM0NTAzNGZjMTI3XkEyXkFqcGdeQXVyOTE2OTMwNDk@._V1_.jpg","time":"106 min","category":"Horror, Thriller","rank":18,"rate":"6,7","description":"Laurie Strode confronts her long-time foe Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago."},{"name":"Ocean's Eight","image":"https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"110 min","category":"Action, Comedy, Crime","rank":19,"rate":"6,2","description":"Debbie Ocean gathers an all-female crew to attempt an impossible heist at New York City's yearly Met Gala."},{"name":"Mamma Mia! Here We Go Again","image":"https://m.media-amazon.com/images/M/MV5BMjEwMTM3OTI1NV5BMl5BanBnXkFtZTgwNDk5NTY0NTM@._V1_SY1000_CR0,0,631,1000_AL_.jpg","time":"114 min","category":"Comedy, Musical, Romance","rank":20,"rate":"6,8","description":"Five years after the events of Mamma Mia! (2008), Sophie prepares for the grand reopening of the Hotel Bella Donna as she learns more about her mother's past."},{"name":"Annihilation","image":"https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY1000_CR0,0,640,1000_AL_.jpg","time":"115 min","category":"Adventure, Drama, Horror","rank":21,"rate":"6,9","description":"A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply."},{"name":"Tomb Raider","image":"https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"119 min","category":"Action, Adventure, Fantasy","rank":22,"rate":"6,3","description":"Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she discovers the island where her father disappeared."},{"name":"Red Sparrow","image":"https://m.media-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"140 min","category":"Action, Drama, Thriller","rank":23,"rate":"6,6","description":"Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations."},{"name":"Crazy Rich Asians","image":"https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"120 min","category":"Comedy, Romance","rank":24,"rate":"7","description":"This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family."},{"name":"Hereditary","image":"https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SY1000_SX675_AL_.jpg","time":"127 min","category":"Drama, Horror, Mystery","rank":25,"rate":"7,3","description":"After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets."},{"name":"Aquaman","image":"https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"143 min","category":"Action, Adventure, Fantasy","rank":26,"rate":"7,2","description":"Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land."},{"name":"A Simple Favor","image":"https://m.media-amazon.com/images/M/MV5BZjFiMGNiNmItMzNiNi00Mjc1LTg1N2YtNWE2NTE5N2VlZTQ3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,657,1000_AL_.jpg","time":"117 min","category":"Comedy, Crime, Drama","rank":27,"rate":"6,9","description":"Stephanie is a single mother with a parenting vlog who befriends Emily, a secretive upper-class woman who has a child at the same elementary school. When Emily goes missing, Stephanie takes it upon herself to investigate."},{"name":"Rampage: Big Meets Bigger","image":"https://m.media-amazon.com/images/M/MV5BNDA1NjA3ODU3OV5BMl5BanBnXkFtZTgwOTg3MTIwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"107 min","category":"Action, Adventure, Sci-Fi","rank":28,"rate":"6,1","description":"When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago."},{"name":"Pacific Rim: Uprising","image":"https://m.media-amazon.com/images/M/MV5BMjI3Nzg0MTM5NF5BMl5BanBnXkFtZTgwOTE2MTgwNTM@._V1_.jpg","time":"111 min","category":"Action, Adventure, Sci-Fi","rank":29,"rate":"5,6","description":"Jake Pentecost, son of Stacker Pentecost, reunites with Mako Mori to lead a new generation of Jaeger pilots, including rival Lambert and 15-year-old hacker Amara, against a new Kaiju threat."},{"name":"The Equalizer 2","image":"https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_.jpg","time":"121 min","category":"Action, Crime, Thriller","rank":30,"rate":"6,7","description":"Robert McCall serves an unflinching justice for the exploited and oppressed, but how far will he go when that is someone he loves?"},{"name":"Sicario: Day of the Soldado","image":"https://m.media-amazon.com/images/M/MV5BMjgyOWRhMDctZTZlNC00M2I1LWI0NDQtYzlmODdmYjY2MThiXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_SX675_AL_.jpg","time":"122 min","category":"Action, Crime, Drama","rank":31,"rate":"7,1","description":"The drug war on the U.S.-Mexico border has escalated as the cartels have begun trafficking terrorists across the US border. To fight the war, federal agent Matt Graver re-teams with the mercurial Alejandro."},{"name":"Game Night","image":"https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"100 min","category":"Action, Comedy, Crime","rank":32,"rate":"7","description":"A group of friends who meet regularly for game nights find themselves entangled in a real-life mystery when the shady brother of one of them is seemingly kidnapped by dangerous gangsters."},{"name":"Call Me By Your Name","image":"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_.jpg","time":"132 min","category":"Drama, Romance","rank":33,"rate":"7,9","description":"In 1980s Italy, a romance blossoms between a seventeen year-old student and the older man hired as his father's research assistant."},{"name":"Fifty Shades Freed","image":"https://m.media-amazon.com/images/M/MV5BMTYxOTQ1MzI0Nl5BMl5BanBnXkFtZTgwMzgwMzIxNDM@._V1_SY1000_CR0,0,631,1000_AL_.jpg","time":"105 min","category":"Drama, Romance, Thriller","rank":34,"rate":"4,5","description":"Anastasia and Christian get married, but Jack Hyde continues to threaten their relationship."},{"name":"The Cloverfield Paradox","image":"https://m.media-amazon.com/images/M/MV5BMTAwOTIxMDA0MjZeQTJeQWpwZ15BbWU4MDg1MjgzNzQz._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"102 min","category":"Drama, Horror, Mystery","rank":35,"rate":"5,6","description":"Orbiting a planet on the brink of war, scientists test a device to solve an energy crisis, and end up face-to-face with a dark alternate reality."},{"name":"The Kissing Booth","image":"https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"105 min","category":"Comedy, Romance","rank":36,"rate":"6,2","description":"A high school student is forced to confront her secret crush at a kissing booth."},{"name":"First Man","image":"https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE1MzAtZjg3NmExODliMDQ0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SY1000_CR0,0,631,1000_AL_.jpg","time":"141 min","category":"Biography, Drama, History","rank":37,"rate":"7,4","description":"A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969."},{"name":"BlacKkKlansman","image":"https://m.media-amazon.com/images/M/MV5BMjUyOTE1NjI0OF5BMl5BanBnXkFtZTgwMTM4ODQ5NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"135 min","category":"Biography, Crime, Drama","rank":38,"rate":"7,5","description":"Ron Stallworth, an African American police officer from Colorado Springs, CO, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader. Based on actual events."},{"name":"Skyscraper","image":"https://m.media-amazon.com/images/M/MV5BOGM3MzQwYzItNDA1Ny00MzIyLTg5Y2QtYTAwMzNmMDU2ZDgxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SY1000_SX632_AL_.jpg","time":"102 min","category":"Action, Adventure, Thriller","rank":39,"rate":"5,8","description":"A security expert must infiltrate a burning skyscraper, 225 stories above ground, when his family is trapped inside by criminals."},{"name":"Tag","image":"https://m.media-amazon.com/images/M/MV5BNzk4NDM3NjkwNF5BMl5BanBnXkFtZTgwNTk5MzkzNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"100 min","category":"Comedy","rank":40,"rate":"6,6","description":"A small group of former classmates organize an elaborate, annual game of tag that requires some to travel all over the country."},{"name":"The Ballad of Buster Scruggs","image":"https://m.media-amazon.com/images/M/MV5BYjRkYTI3M2EtZWQ4Ny00OTA2LWFmMTMtY2E4MTEyZmNjOTMxXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_SX675_AL_.jpg","time":"133 min","category":"Comedy, Drama, Musical","rank":41,"rate":"7,3","description":"Six tales of life and violence in the Old West, following a singing gunslinger, a bank robber, a traveling impresario, an elderly prospector, a wagon train, and a perverse pair of bounty hunters."},{"name":"Outlaw King","image":"https://m.media-amazon.com/images/M/MV5BMTc4MTU4YzEtODBiNC00NzA4LTg0NGItM2ZhZjZlNDFiNjJjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg","time":"121 min","category":"Action, Biography, Drama","rank":42,"rate":"7","description":"A true David vs. Goliath story of how the 14th century Scottish 'Outlaw King' Robert the Bruce used cunning and bravery to defeat the much larger and better equipped occupying English army."},{"name":"I, Tonya","image":"https://m.media-amazon.com/images/M/MV5BMjI5MDY1NjYzMl5BMl5BanBnXkFtZTgwNjIzNDAxNDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"120 min","category":"Biography, Comedy, Drama","rank":43,"rate":"7,5","description":"Competitive ice skater Tonya Harding rises amongst the ranks at the U.S. Figure Skating Championships, but her future in the activity is thrown into doubt when her ex-husband intervenes."},{"name":"To All the Boys I've Loved Before","image":"https://m.media-amazon.com/images/M/MV5BMjQ3NjM5MTAzN15BMl5BanBnXkFtZTgwODQzMDAwNjM@._V1_SY1000_CR0,0,639,1000_AL_.jpg","time":"99 min","category":"Drama, Romance","rank":44,"rate":"7,3","description":"A teenage girl's secret love letters are exposed and wreak havoc on her love life."},{"name":"The First Purge","image":"https://m.media-amazon.com/images/M/MV5BYmVjMWJhMTYtMzUxMC00ODdhLTk3YzMtZDFhNGUyOGFhYTY0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg","time":"98 min","category":"Action, Horror, Sci-Fi","rank":45,"rate":"5,1","description":"America's third political party, the New Founding Fathers of America, comes to power and conducts an experiment: no laws for 12 hours on Staten Island. No one has to stay on the island, but $5,000 is given to anyone who does."},{"name":"Bad Times at the El Royale","image":"https://m.media-amazon.com/images/M/MV5BOTk1Nzk1MDc1MF5BMl5BanBnXkFtZTgwNjU2NDExNjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"141 min","category":"Crime, Drama, Mystery","rank":46,"rate":"7,1","description":"Circa 1969, several strangers, most with a secret to bury, meet by chance at Lake Tahoe's El Royale, a rundown hotel with a dark past. Over the course of one night, everyone will show their true colors - before everything goes to hell."},{"name":"The Post","image":"https://m.media-amazon.com/images/M/MV5BMjQyMjEwOTIwNV5BMl5BanBnXkFtZTgwOTkzNTMxNDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"116 min","category":"Biography, Drama, History","rank":47,"rate":"7,2","description":"A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between the press and the government."},{"name":"A Wrinkle in Time","image":"https://m.media-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg","time":"109 min","category":"Adventure, Family, Fantasy","rank":48,"rate":"4,2","description":"After the disappearance of her scientist father, three peculiar beings send Meg, her brother, and her friend to space in order to find him."},{"name":"Janneman Robinson & Poeh","image":"https://m.media-amazon.com/images/M/MV5BMjAzOTM2OTAyNF5BMl5BanBnXkFtZTgwNTg5ODg1NTM@._V1_SY1000_SX675_AL_.jpg","time":"104 min","category":"Animation, Adventure, Comedy","rank":49,"rate":"7,3","description":"A working-class family man, Christopher Robin, encounters his childhood friend Winnie-the-Pooh, who helps him to rediscover the joys of life."},{"name":"Blockers","image":"https://m.media-amazon.com/images/M/MV5BMjE0ODIzNjkzMl5BMl5BanBnXkFtZTgwODQ3MzU4NDM@._V1_SY1000_SX632_AL_.jpg","time":"102 min","category":"Comedy","rank":50,"rate":"6,2","description":"Three parents try to stop their daughters from losing their virginity on prom night."}];;
}

/**
 * Load the watchlist value from the localstorage. If data is 
 * returnd we call JSON parse as we stored the data as an string
 * instead of the actual object. 
 */
function loadWatchList() {
	return (localStorage.getItem('watchList')) ? JSON.parse(localStorage.getItem('watchList')) : [];
}

/**
 * Save an list of strings to the watchList in the localstorage.
 * The list is JSON stringified before saving it to the localstorage.
 * 
 * @param watchList 
 */
function saveWatchList(watchList) {
	localStorage.setItem('watchList', JSON.stringify(watchList));
}

/**
 * Add an item to the watchlist. This is done by retrieving the 
 * existing list from the localstorage and than adding it to that
 * list. Afterwards store it in the localstorage again. 
 * 
 * @param movieName 
 */
function addItemToWatchList(movieName) {
	var watchList = loadWatchList();
	watchList.push(movieName);
	saveWatchList(watchList);
}

/**
 * Remove an item from the watchlist by retrieving it from the 
 * localstorage and removing it. Afterwards store it in local
 * storage again. 
 * 
 * @param movieName 
 */
function removeItemFromWatchList(movieName) {
	var watchList = loadWatchList();
	watchList.splice(watchList.indexOf(movieName), 1);
	saveWatchList(watchList);
}

/**
 * Add or remove the movie from the watchlist. This is done by retrieving
 * the watchlist and checking if the movie name exists in the list. If so 
 * remove it otherwise add it. Afterward re-render the movielist. 
 * 
 * @param movieName 
 */
function toggleMovieWatchList(movieName) {
	// First we check if the movie is currently on the watchlist
	if (loadWatchList().indexOf(movieName) >= 0) {
		// If it's currently on the list remove it
		removeItemFromWatchList(movieName);
	} else {
		// If it's not on the list add it
		addItemToWatchList(movieName);
	}
	renderMovieList();
}

/**
 * This method will render the movie lists that displays all movies and the 
 * list of movies that have been addedd to the watch list. 
 */
function renderMovieList() {
	// Get all data. 
	var movies = loadMovies();
	var watchList = loadWatchList();

	// Get the list elements
	var watchListMoviesList = document.getElementById('watchList');

	// Before we render all movies, we clear the lists
	watchListMoviesList.innerHTML = '';

	// We loop over all movies and add them to the lists. 
	for (var i in movies) {
		// Check if the movie name exists in the list of movies
		var movieOnWatchList = watchList.indexOf(movies[i].name) >= 0
		// If the movie is on my watchlist add it to that list as well
		if (movieOnWatchList) {
			addItemToDOM(watchListMoviesList, i, movies[i], watchList);
		}
	}
} 

/**
 * Create the HTML for a movie item and add it to the list that was provided. 
 * The movie has two click events, one for adding the name to the watchlist
 * and one for the overlay. The overlay event is based on the movie integer 
 * in the movies list. 
 * 
 * @param list 
 * @param itemId 
 * @param movie 
 * @param watchList 
 */
function addItemToDOM(list, itemId, movie, watchList) {
	var heart = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><path class="fill" d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/></svg>';
	var watchListClass = watchList ? 'onWatchlist' : '';
	var item = `<li class="movie" style="background-image: url(${movie.image})">
		<button class="watchListButton ${watchListClass}" onclick="toggleMovieWatchList('${movie.name}')">${heart}</button>
		<div class="banner" onclick="showOverlay(${itemId})">
			<span class="name">${movie.name}</span>
		</div>
	</li>`;
	list.innerHTML += item;
}


/**
 * Load the content for the first movie and add it to the containers.  
 * 
 * @param itemId 
 */
function loadMovie(itemId) {
	var movies = loadMovies();	
	document.getElementById('title').innerHTML = movies[itemId].name;
	document.getElementById('main-image').style.backgroundImage = `url(${movies[itemId].image})`;
	document.getElementById('description').innerHTML = movies[itemId].description;
	document.getElementById('rate').innerHTML = `Rate: ${movies[itemId].rate}`;
	document.getElementById('rank').innerHTML = `Rank: ${movies[itemId].rank}`;
	document.getElementById('time').innerHTML = `Time: ${movies[itemId].time}`;
	document.getElementById('category').innerHTML = `Category: ${movies[itemId].category}`;
}

/**
 * Load the next movie, we increase the id and load the next one.
 */
function nextMovie() {
	currentMovieId += 1;	
	loadMovie(currentMovieId);	
}

/**
 * Load the previous movie, we decrease the id and load the next one.
 */
function prevMovie() {
	currentMovieId += 1;		
	loadMovie(currentMovieId);
}

// We have to wait until the page is ready before starting to render things. 
document.addEventListener("DOMContentLoaded", function(event) { 
	// Render the movies lists
	renderMovieList();

	// Here we bind next and previous arrows to the functions as well. 
	document.onkeydown = function(e) {
	    e = e || window.event;
	    switch(e.which || e.keyCode) {
	        case 37: // left
	        	prevMovie();
	        	break;

	        case 39: // right
	        	nextMovie();
	        	break;

	        default:
	        	return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	};

	// Load movie details in the main screen, 0 is the first movie. 
	loadMovie(currentMovieId);
});

