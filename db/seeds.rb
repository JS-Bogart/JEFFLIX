# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
MovieGenre.destroy_all
Movie.destroy_all
Genre.destroy_all

User.create(email: "demo@demo.com", password: "123456")


movie1 = Movie.create(title: "The Holy Mountain", year: 1973, synopsis: "An alchemist brings together a group to displace 
the gods who rule the universe.", rating: "R")
movie2 = Movie.create(title: "Seven Samurai", year: 1954, synopsis: "Seven warriors defend a village from invading bandits.", rating: "NR")
movie3 = Movie.create(title: "Amarcord", year: 1973, synopsis: "A coming of age story set under the shadow of fascist Italy.", rating: "R")
movie4 = Movie.create(title: "The Seventh Seal", year: 1957, synopsis: "A knight returns from the crusades to a plague 
ridden Sweden, where he challenges death to a game of chess.", rating: "NR")
movie5 = Movie.create(title: "Yojimbo", year: 1961, synopsis: "A ronin turns a turf war between two clans to his own advantage.", rating: "NR")
movie6 = Movie.create(title: "Withnail and I", year: 1986, synopsis: "Two unemployed actors take drugs and go on a vacation 
to the countryside.", rating: "R")
movie7 = Movie.create(title: "The Ruling Class", year: 1972, synopsis: "An aristocrat who thinks he is God ascends to the 
British peerage.", rating: "NR")
movie8 = Movie.create(title: "Rashomon", year: 1950, synopsis: "Four people give different accounts of a man’s murder and 
the rape of his wife.", rating: "NR")
movie9 = Movie.create(title: "8½", year: 1963, synopsis: "A director struggles with his current film, a creative crisis, 
and his love life.", rating: "NR")
movie10 = Movie.create(title: "La strada", year: 1954, synopsis: "A woman is sold by her mother into a traveling circus.", rating: "NR")
movie11 = Movie.create(title: "Kagemusha", year: 1980, synopsis: "When a warlord dies, a peasant thief is called upon to 
impersonate him.", rating: "PG")
movie12 = Movie.create(title: "Harakiri", year: 1962, synopsis: "An unemployed samurai arrives at the manor of Lord Iyi, 
begging to be allowed to commit ritual suicide on the property.", rating: "NR")
movie13 = Movie.create(title: "The Virgin Spring", year: 1960, synopsis: "A father in medieval Sweden seeks vengence against 
his daughter's murderers.", rating: "NR")
movie14 = Movie.create(title: "Bicycle Thieves", year: 1948, synopsis: "A man and his son search for his stolen bike, 
which he needs for work.", rating: "NR")
movie15 = Movie.create(title: "Pierrot le fou", year: 1965, synopsis: "A man runs away from his home life with his ex-lover.", rating: "NR")
movie16 = Movie.create(title: "Bottle Rocket", year: 1996, synopsis: "Three friends rob a bookstore and go on the run.", rating: "R")
movie17 = Movie.create(title: "The Exterminating Angel", year: 1962, synopsis: "A group of high-society friends are invited 
to a mansion for dinner and find themselves inexplicably unable to leave.", rating: "NR")
movie18 = Movie.create(title: "Paths of Glory", year: 1957, synopsis: "A colonel goes head-to-head with the army’s ruthless 
top brass when his men are accused of cowardice after being unable to carry out 
an impossible mission.", rating: "NR")
movie19 = Movie.create(title: "House", year: 1977, synopsis: "A girl who travels with six classmates to her ailing aunt’s 
country home and comes face-to-face with evil spirits.", rating: "NR")
movie20 = Movie.create(title: "Cronos", year: 1993, synopsis: "An antiques dealer happens upon a golden device which grants 
him addictive powers.", rating: "R")
movie21 = Movie.create(title: "The Great Dictator", year: 1940, synopsis: "A Jewish barber gets mistaken for a cruel dictator.", rating: "G")
movie22 = Movie.create(title: "Black Moon", year: 1975, synopsis: "A young woman escapes the horrors of war at a remote farmhouse.", rating: "R")
movie23 = Movie.create(title: "Casablanca", year: 1942, synopsis: "A cynical expatriate American cafe owner struggles to 
decide whether or not to help his former lover and her fugitive husband escape 
the Nazis in French Morocco.", rating: "PG")
movie24 = Movie.create(title: "Come and See", year: 1985, synopsis: "After finding an old rifle, a young boy joins the Soviet 
resistance movement against ruthless German forces and experiences the horrors 
of World War II.", rating: "NR")
movie25 = Movie.create(title: "Belladonna of Sadness", year: 1973, synopsis: "A peasant woman makes a deal with the devil 
to get revenge on a cruel baron.", rating: "NR")
movie26 = Movie.create(title: "Akira", year: 1988, synopsis: "A secret military project endangers Neo-Tokyo.", rating: "R")
movie27 = Movie.create(title: "Spirited Away", year: 2001, synopsis: "A sullen 10-year-old girl wanders into a world ruled 
by gods, witches, and spirits.", rating: "PG")
movie28 = Movie.create(title: "The Witch", year: 1915, synopsis: "A family in 1630s New England is torn apart by the forces 
of witchcraft, black magic, and possession.", rating: "R")
movie29 = Movie.create(title: "Suspiria", year: 1977, synopsis: "A newcomer to a prestigious German ballet academy comes to 
realize that the school is a front for something sinister.", rating: "R")
movie30 = Movie.create(title: "The Night of the Hunter", year: 1955, synopsis: "A religious fanatic marries a gullible widow 
whose young children are reluctant to tell him where their real dad hid the 
$10,000 he'd stolen in a robbery.", rating: "NR")
movie31 = Movie.create(title: "The Life Aquatic with Steve Zissou", year: 2004, synopsis: "An oceanographer hunts the shark 
that ate his friend and meets a man who may or may not be his son.", rating: "R")
movie32 = Movie.create(title: "Manhattan", year: 1979, synopsis: "The life of a divorced television writer is complicated 
when he falls in love with his best friend's mistress.", rating: "R")
movie33 = Movie.create(title: "Hannah and Her Sisters", year: 1986, synopsis: "Hannah's husband falls in love with her sister 
Lee, while her hypochondriac ex-husband rekindles his relationship with her sister Holly.", rating: "PG-13")
movie34 = Movie.create(title: "Heavy Metal", year: 1981, synopsis: "A glowing green orb terrorizes a young girl with an 
anthology of bizarre and fantastic stories.", rating: "R")
movie35 = Movie.create(title: "Heavy Traffic", year: 1973, synopsis: "A cartoonist contends with life in the inner city.", rating: "R")
movie36 = Movie.create(title: "Wizards", year: 1977, synopsis: "A wizard and his faire folk comrades fight an evil wizard 
who's using technology in his bid for conquest.", rating: "PG")
movie37 = Movie.create(title: "Star Wars: Episode IV - A New Hope", year: 1977, synopsis: "A group of 
heroes join together to save the galaxy from the Empire's world-destroying battle station", rating: "PG")
movie38 = Movie.create(title: "The Running Man", year: 1987, synopsis: "A falsely convicted man gets his 
shot at freedom when he must forcibly participate in a TV game show where convicts, 
runners, must battle killers for their freedom.", rating: "R")
movie39 = Movie.create(title: "The Adventures of Buckaroo Banzai Across the 8th Dimension", 
year: 1984, synopsis: "Buckaroo Banzai and his crime-fighting team must stop evil alien invaders 
from the eighth dimension who are planning to conquer Earth.", rating: "PG")
movie40 = Movie.create(title: "Neon Genesis Evangelion: The End of Evangelion", 
year: 1997, synopsis: "Shinji Ikari is pushed to the limits of his sanity as he 
is forced to decide the fate of humanity.", rating: "NR")
movie41 = Movie.create(title: "Lupin the 3rd: Castle of Cagliostro", year: 1979, 
synopsis: "A thief, his gang of desperadoes, and an intrepid policeman struggle 
to free a princess from an evil count's clutches", rating: "PG-13")
movie42 = Movie.create(title: "Princess Mononoke", year: 1997, synopsis: "On a 
journey to find the cure for a curse, Ashitaka finds himself in the middle of a 
war between the forest gods and a mining colony.", rating: "PG-13")
movie43 = Movie.create(title: "Howl's Moving Castle", year: 2004, synopsis: "When 
a young woman is cursed by a witch, her only chance of breaking the spell lies with 
a young wizard and his walking castle.", rating: "PG")
movie44 = Movie.create(title: "My Neighbor Totoro", year: 1988, synopsis: "When two 
girls move to the country to be near their ailing mother, they have adventures 
with the wondrous forest spirits who live nearby.", rating: "G")
movie45 = Movie.create(title: "The Tale of The Princess Kaguya", year: 2013, 
synopsis: "Found inside a shining stalk of bamboo by an old bamboo cutter and his 
wife, a tiny girl grows rapidly into a mysterious young princess.", rating: "PG")
movie46 = Movie.create(title: "Watership Down", year: 1978, synopsis: "Hoping to 
escape destruction by human developers and save their community, a colony of 
rabbits seek out a safe place to set up a new warren.", rating: "PG")
movie47 = Movie.create(title: "Fantastic Planet", year: 1973, synopsis: "On a 
faraway planet where blue giants rule, oppressed humanoids rebel against their 
machine-like leaders.", rating: "PG")
movie48 = Movie.create(title: "The Triplets of Belleville", year: 2003, synopsis: 
"When her grandson is kidnapped during the Tour de France, Madame Souza teams up 
with the Belleville Sisters to rescue him.", rating: "PG-13")
movie49 = Movie.create(title: "Who Framed Roger Rabbit", year: 1988, synopsis: 
"A toon-hating detective is a cartoon rabbit's only hope to prove his innocence 
when he is accused of murder.", rating: "PG")
movie50 = Movie.create(title: "The Secret of Kells", year: 2009, synopsis: "A young 
boy in a remote medieval outpost is beckoned to adventure when a celebrated master 
illuminator arrives with an ancient book.", rating: "NR")
movie51 = Movie.create(title: "Song of the Sea", year: 2014, synopsis: "Ben and 
his little sister Saoirse go on an adventure to free the fairies and save the 
spirit world.", rating: "PG")
movie52 = Movie.create(title: "Three Days of the Condor", year: 1975, synopsis: 
"A bookish CIA researcher finds all his co-workers dead, and must outwit those 
responsible until he figures out who he can really trust.", rating: "R")
movie53 = Movie.create(title: "The Big Sleep", year: 1946, synopsis: "Private 
detective Philip Marlowe is hired by a wealthy family. Before the complex case is 
over, he's seen murder, blackmail, and what might be love.", rating: "NR")
movie54 = Movie.create(title: "Alien", year: 1979, synopsis: "After a space vessel 
receives a distress call, one of the crew is attacked by a mysterious life form and 
they soon realize that its life cycle has merely begun.", rating: "R")
movie55 = Movie.create(title: "The Omen", year: 1976, synopsis: "Mysterious deaths 
surround an American ambassador. Could the child that he is raising actually be 
the Antichrist?", rating: "R")
movie56 = Movie.create(title: "The Face of Another", year: 1966, synopsis: "A 
businessman with a disfigured face obtains a lifelike mask from his doctor, but 
the mask starts altering his personality.", rating: "NR")
movie57 = Movie.create(title: "Pan's Labyrinth", year: 2006, synopsis: "In the 
Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer 
escapes into an eerie but captivating fantasy world.", rating: "R")
movie58 = Movie.create(title: "Eyes Wide Shut", year: 1999, synopsis: "A New York 
City doctor embarks on a harrowing, night-long odyssey of sexual and moral discovery 
after his wife reveals a painful secret to him.", rating: "R")
movie59 = Movie.create(title: "The Usual Suspects", year: 1995, synopsis: "A sole 
survivor tells of the twisty events leading up to a horrific gun battle on a boat, 
which began when five criminals met at a seemingly random police lineup.", rating: "R")
movie60 = Movie.create(title: "The Shining", year: 1980, synopsis: "A family heads 
to an isolated hotel for the winter where a sinister presence influences the father 
into violence, while his psychic son sees horrific forebodings from both past and 
future.", rating: "R")
movie61 = Movie.create(title: "The Wicker Man", year: 1973, synopsis: "A puritan 
Police Sergeant arrives in a Scottish island village in search of a missing girl 
who the locals claim never existed.", rating: "R")
movie62 = Movie.create(title: "The Killing of a Sacred Deer", year: 2017, synopsis: 
"A surgeon is forced to make an unthinkable sacrifice after his life starts to fall 
apart, when the behavior of a teenage boy he has taken under his wing turns sinister.", rating: "R")
movie63 = Movie.create(title: "Uncut Gems", year: 2019, synopsis: "A fast-talking 
New York City jeweler risks everything in hope of staying afloat and alive.", rating: "R")
movie64 = Movie.create(title: "The Big Lebowski", year: 1998, synopsis: "Jeff 'The Dude' 
Lebowski, mistaken for a millionaire of the same name, seeks restitution for his 
ruined rug and enlists his bowling buddies to help get it.", rating: "R")
movie65 = Movie.create(title: "Duck Soup", year: 1933, synopsis: "Rufus T. Firefly 
is named president/dictator of bankrupt Freedonia and declares war on neighboring 
Sylvania over the love of wealthy Mrs. Teasdale.", rating: "NR")
movie66 = Movie.create(title: "Superbad", year: 2007, synopsis: "Two co-dependent 
high school seniors are forced to deal with separation anxiety after their plan 
to stage a booze-soaked party goes awry.", rating: "R")
movie67 = Movie.create(title: "Raising Arizona", year: 1987, synopsis: "When a 
childless couple decide to help themselves to one of another family's quintuplets, 
their lives become more complicated than they anticipated.", rating: "PG-13")
movie68 = Movie.create(title: "Tampopo", year: 1985, synopsis: "A truck driver stops 
at a small family-run noodle shop and decides to help its fledgling business.", rating: "NR")
movie69 = Movie.create(title: "Clue", year: 1985, synopsis: "Six guests are anonymously 
invited to a strange mansion for dinner, but after their host is killed, they must 
cooperate with the staff to identify the murderer.", rating: "PG")
movie70 = Movie.create(title: "Monty Python and the Holy Grail", year: 1975, synopsis: 
"King Arthur and his Knights of the Round Table embark on a surreal, low-budget 
search for the Holy Grail.", rating: "PG")
movie71 = Movie.create(title: "The Meaning of Life", year: 1983, synopsis: "The 
comedy team takes a look at life in all of its stages in their own uniquely silly way.", rating: "R")
movie72 = Movie.create(title: "Monty Python's Life of Brian", year: 1979, synopsis: 
"Born on the original Christmas in the stable next door to Jesus Christ, Brian of 
Nazareth spends his life being mistaken for a messiah.", rating: "R")
movie73 = Movie.create(title: "I Love You, Man", year: 2009, synopsis: "Friendless 
Peter Klaven goes on a series of man-dates to find a Best Man for his wedding.", rating: "R")
movie74 = Movie.create(title: "The Dark Crystal", year: 1982, synopsis: "On another 
planet in the distant past, a Gelfling embarks on a quest to find the missing shard 
of a magical crystal, and so restore order to his world.", rating: "PG")
movie75 = Movie.create(title: "2001: A Space Odyssey", year: 1968, synopsis: "After 
discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off 
on a quest to find its origins", rating: "G")
movie76 = Movie.create(title: "Brazil", year: 1985, synopsis: "A bureaucrat in a dystopic 
society becomes an enemy of the state as he pursues the woman of his dreams.", rating: "R")
movie77 = Movie.create(title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980, 
synopsis: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, 
Luke Skywalker begins Jedi training with Yoda.", rating: "PG")
movie78 = Movie.create(title: "Star Wars: Episode VI - Return of the Jedi", year: 1983, 
synopsis: "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels 
dispatch to Endor to destroy the second Death Star.", rating: "PG")
movie79 = Movie.create(title: "Total Recall", year: 1990, synopsis: "A man goes in 
to have virtual vacation memories of the planet Mars implanted in his mind", rating: "R")
movie80 = Movie.create(title: "Blade Runner", year: 1982, synopsis: "A blade runner 
must pursue and terminate four replicants who stole a ship in space, and have returned 
to Earth to find their creator.", rating: "R")
movie81 = Movie.create(title: "Flash Gordon", year: 1980, synopsis: "A football player 
and his friends travel to the planet Mongo and find themselves fighting the tyranny of 
Ming the Merciless to save Earth.", rating: "PG")
movie82 = Movie.create(title: "Starship Troopers", year: 1997, synopsis: "Humans in a 
fascist, militaristic future wage war with giant alien bugs.", rating: "R")
movie83 = Movie.create(title: "Miller's Crossing", year: 1990, synopsis: "An advisor 
to a Prohibition-era crime boss, tries to keep the peace between warring mobs but 
gets caught in divided loyalties.", rating: "R")
movie84 = Movie.create(title: "Reservoir Dogs", year: 1992, synopsis: "When a simple 
jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one 
of them is a police informant.", rating: "R")

movie1.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/holy_mountain.jpg'), filename: 'holy_mountain.jpg')
movie2.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/seven_samurai.jpeg'), filename: 'seven_samurai.jpeg')
movie3.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/amarcord.jpg'), filename: 'amarcord.jpg')
movie4.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/seventh_seal.png'), filename: 'seventh_seal.png')
movie5.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/yojimbo.png'), filename: 'yojimbo.png')
movie6.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/withnail_and_i.jpeg'), filename: 'withnail_and_i.jpeg')
movie7.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/ruling_class.jpg'), filename: 'ruling_class.jpg')
movie8.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/rashomon.jpeg'), filename: 'rashomon.jpeg')
movie9.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/8_12.jpg'), filename: '8_12.jpg')
movie10.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/la_strada.jpeg'), filename: 'la_strada.jpeg')
movie11.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/kagemusha.jpg'), filename: 'kagemusha.jpg')
movie12.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/harakiri.jpeg'), filename: 'harakiri.jpeg')
movie13.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/the_virgin_spring.jpeg'), filename: 'the_virgin_spring.jpeg')
movie14.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/bicycle_thieves.jpeg'), filename: 'bicycle_thieves.jpeg')
movie15.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/pierrot_le_fou.jpeg'), filename: 'pierrot_le_fou.jpeg')
movie16.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/bottle_rocket.png'), filename: 'bottle_rocket.png')
movie17.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/exterminating_angel.jpg'), filename: 'exterminating_angel.jpg')
movie18.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/paths_of_glory.png'), filename: 'paths_of_glory.png')
movie19.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/house.jpg'), filename: 'house.jpg')
movie20.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/cronos.jpeg'), filename: 'cronos.jpeg')
movie21.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/great_dictator.png'), filename: 'great_dictator.png')
movie22.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/black_moon.jpg'), filename: 'black_moon.jpg')
movie23.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/casablanca.jpeg'), filename: 'casablanca.jpeg')
movie24.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/come_and_see.jpeg'), filename: 'come_and_see.jpeg')
movie25.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/belladonna_of_sadness.jpg'), filename: 'belladonna_of_sadness.jpg')
movie26.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/akira.jpg'), filename: 'akira.jpg')
movie27.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/spirited_away.jpg'), filename: 'spirited_away.jpg')
movie28.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/witch.jpeg'), filename: 'witch.jpeg')
movie29.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/suspiria.jpg'), filename: 'suspiria.jpg')
movie30.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/night_of_the_hunter.jpeg'), filename: 'night_of_the_hunter.jpeg')
movie31.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/life_aquatic.jpg'), filename: 'life_aquatic.jpg')
movie32.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/manhattan.jpeg'), filename: 'manhattan.jpeg')
movie33.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/hannah_and_her_sisters.jpeg'), filename: 'hannah_and_her_sisters.jpeg')
movie34.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/heavy_metal.png'), filename: 'heavy_metal.png')
movie35.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/heavy_traffic.jpeg'), filename: 'heavy_traffic.jpeg')
movie36.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/wizards.jpg'), filename: 'wizards.jpg')
movie37.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/a_new_hope.jpeg'), filename: 'a_new_hope.jpeg')
movie38.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/running_man.jpeg'), filename: 'running_man.jpeg')
movie39.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/buckaroo_bonzai.jpg'), filename: 'buckaroo_bonzai.jpg')
movie40.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/end_of_evangelion.png'), filename: 'end_of_evangelion.png')
movie41.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/castle_of_cagliostro.png'), filename: 'castle_of_cagliostro.png')
movie42.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/princess_mononoke.jpeg'), filename: 'princess_mononoke.jpeg')
movie43.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/howls_moving_castle.jpeg'), filename: 'howls_moving_castle.jpeg')
movie44.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/totoro.png'), filename: 'totoro.png')
movie45.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/princess_kaguya.jpeg'), filename: 'princess_kaguya.jpeg')
movie46.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/watership_down.jpeg'), filename: 'watership_down.jpeg')
movie47.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/fantastic_planet.jpeg'), filename: 'fantastic_planet.jpeg')
movie48.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/triplets_of_belleville.jpeg'), filename: 'triplets_of_belleville.jpeg')
movie49.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/roger_rabbit.jpeg'), filename: 'roger_rabbit.jpeg')
movie50.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/secret_of_kells.jpeg'), filename: 'secret_of_kells.jpeg')
movie51.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/song_of_the_sea.jpeg'), filename: 'song_of_the_sea.jpeg')
movie52.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/three_days_of_the_condor.jpeg'), filename: 'three_days_of_the_condor.jpeg')
movie53.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/the_big_sleep.jpeg'), filename: 'the_big_sleep.jpeg')
movie54.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/alien.jpeg'), filename: 'alien.jpeg')
movie55.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/the_omen.jpeg'), filename: 'the_omen.jpeg')
movie56.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/face_of_another.jpeg'), filename: 'face_of_another.jpeg')
movie57.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/pans_labyrinth.jpeg'), filename: 'pans_labyrinth.jpeg')
movie58.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/eye_wide_shut.jpeg'), filename: 'eye_wide_shut.jpeg')
movie59.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/usual_suspects.jpeg'), filename: 'usual_suspects.jpeg')
movie60.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/shining.jpg'), filename: 'shining.jpg')
movie61.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/wicker_man.jpeg'), filename: 'wicker_man.jpeg')
movie62.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/killing_of_a_sacred_deer.png'), filename: 'killing_of_a_sacred_deer.png')
movie63.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/uncut_gems.jpeg'), filename: 'uncut_gems.jpeg')
movie64.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/big_lebowski.jpeg'), filename: 'big_lebowski.jpeg')
movie65.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/duck_soup.jpeg'), filename: 'duck_soup.jpeg')
movie66.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/superbad.jpeg'), filename: 'superbad.jpeg')
movie67.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/raising_arizona.jpeg'), filename: 'raising_arizona.jpeg')
movie68.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/tampopo.jpeg'), filename: 'tampopo.jpeg')
movie69.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/clue.jpeg'), filename: 'clue.jpeg')
movie70.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/holy_grail.jpeg'), filename: 'holy_grail.jpeg')
movie71.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/the_meaning_of_life.jpg'), filename: 'the_meaning_of_life.jpg')
movie72.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/life_of_brian.jpeg'), filename: 'life_of_brian.jpeg')
movie73.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/i_love_you_man.png'), filename: 'i_love_you_man.png')
movie74.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/dark_crystal.jpeg'), filename: 'dark_crystal.jpeg')
movie75.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/space_odyssey.jpeg'), filename: 'space_odyssey.jpeg')
movie76.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/brazil.jpeg'), filename: 'brazil.jpeg')
movie77.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/empire_strikes_back.png'), filename: 'empire_strikes_back.png')
movie78.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/return_of_the_jedi.jpeg'), filename: 'return_of_the_jedi.jpeg')
movie79.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/total_recall.jpeg'), filename: 'total_recall.jpeg')
movie80.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/blade_runner.jpeg'), filename: 'blade_runner.jpeg')
movie81.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/flash_gordon.jpeg'), filename: 'flash_gordon.jpeg')
movie82.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/starship_troopers.jpeg'), filename: 'starship_troopers.jpeg')
movie83.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/millers_crossing.jpg'), filename: 'millers_crossing.jpg')
movie84.poster.attach(io: open('https://jefflix-seeds.s3-us-west-1.amazonaws.com/posters/reservoir_dogs.jpg'), filename: 'reservoir_dogs.jpg')

#Genres
genre1 = Genre.create(genre: "Animated")
genre2 = Genre.create(genre: "Suspense")
genre3 = Genre.create(genre: "Comedy")
genre4 = Genre.create(genre: "Drama")
genre5 = Genre.create(genre: "Surreal")
genre6 = Genre.create(genre: "Sci-Fi")
genre7 = Genre.create(genre: "Crime")
genre8 = Genre.create(genre: "Fantasy")
genre9 = Genre.create(genre: "Action")

#Animated
genre1.movies << movie25
genre1.movies << movie26
genre1.movies << movie27
genre1.movies << movie34
genre1.movies << movie35
genre1.movies << movie36
genre1.movies << movie40
genre1.movies << movie41
genre1.movies << movie42
genre1.movies << movie43
genre1.movies << movie44
genre1.movies << movie45
genre1.movies << movie46
genre1.movies << movie47
genre1.movies << movie48
genre1.movies << movie49
genre1.movies << movie50
genre1.movies << movie51
genre1.save

#Suspense
genre2.movies << movie17
genre2.movies << movie19
genre2.movies << movie20
genre2.movies << movie23
genre2.movies << movie28
genre2.movies << movie29
genre2.movies << movie30
genre2.movies << movie52
genre2.movies << movie53
genre2.movies << movie54
genre2.movies << movie55
genre2.movies << movie56
genre2.movies << movie57
genre2.movies << movie58
genre2.movies << movie59
genre2.movies << movie60
genre2.movies << movie61
genre2.movies << movie62
genre2.movies << movie63
genre2.save

#Comedy
genre3.movies << movie6
genre3.movies << movie7
genre3.movies << movie16
genre3.movies << movie21
genre3.movies << movie31
genre3.movies << movie32
genre3.movies << movie33
genre3.movies << movie49
genre3.movies << movie64
genre3.movies << movie65
genre3.movies << movie66
genre3.movies << movie67
genre3.movies << movie68
genre3.movies << movie69
genre3.movies << movie70
genre3.movies << movie71
genre3.movies << movie72
genre3.movies << movie73
genre3.save

#Drama
genre4.movies << movie2
genre4.movies << movie3
genre4.movies << movie4
genre4.movies << movie8
genre4.movies << movie10
genre4.movies << movie11
genre4.movies << movie12
genre4.movies << movie13
genre4.movies << movie14
genre4.movies << movie15
genre4.movies << movie17
genre4.movies << movie18
genre4.movies << movie23
genre4.movies << movie30
genre4.movies << movie33
genre4.movies << movie46
genre4.movies << movie52
genre4.movies << movie53
genre4.movies << movie56
genre4.movies << movie57
genre4.movies << movie58
genre4.movies << movie59
genre4.movies << movie62
genre4.movies << movie63
genre4.save

#Surreal
genre5.movies << movie1
genre5.movies << movie3
genre5.movies << movie4
genre5.movies << movie7
genre5.movies << movie9
genre5.movies << movie11
genre5.movies << movie17
genre5.movies << movie19
genre5.movies << movie22
genre5.movies << movie25
genre5.movies << movie26
genre5.movies << movie27
genre5.movies << movie29
genre5.movies << movie31
genre5.movies << movie34
genre5.movies << movie35
genre5.movies << movie36
genre5.movies << movie39
genre5.movies << movie40
genre5.movies << movie42
genre5.movies << movie43
genre5.movies << movie44
genre5.movies << movie45
genre5.movies << movie47
genre5.movies << movie48
genre5.movies << movie50
genre5.movies << movie51
genre5.movies << movie57
genre5.movies << movie60
genre5.movies << movie70
genre5.movies << movie71
genre5.movies << movie74
genre5.movies << movie75
genre5.movies << movie76
genre5.save

#Sci-Fi
genre6.movies << movie26
genre6.movies << movie34
genre6.movies << movie36
genre6.movies << movie37
genre6.movies << movie38
genre6.movies << movie39
genre6.movies << movie40
genre6.movies << movie47
genre6.movies << movie54
genre6.movies << movie56
genre6.movies << movie75
genre6.movies << movie76
genre6.movies << movie77
genre6.movies << movie78
genre6.movies << movie79
genre6.movies << movie80
genre6.movies << movie81
genre6.movies << movie82
genre6.save

#Crime
genre7.movies << movie5
genre7.movies << movie8
genre7.movies << movie13
genre7.movies << movie14
genre7.movies << movie16
genre7.movies << movie18
genre7.movies << movie30
genre7.movies << movie38
genre7.movies << movie41
genre7.movies << movie48
genre7.movies << movie49
genre7.movies << movie52
genre7.movies << movie53
genre7.movies << movie59
genre7.movies << movie61
genre7.movies << movie63
genre7.movies << movie64
genre7.movies << movie67
genre7.movies << movie80
genre7.movies << movie83
genre7.movies << movie84
genre7.save

#Fantasy
genre8.movies << movie1
genre8.movies << movie9
genre8.movies << movie20
genre8.movies << movie22
genre8.movies << movie25
genre8.movies << movie27
genre8.movies << movie34
genre8.movies << movie36
genre8.movies << movie37
genre8.movies << movie42
genre8.movies << movie43
genre8.movies << movie44
genre8.movies << movie45
genre8.movies << movie47
genre8.movies << movie50
genre8.movies << movie51
genre8.movies << movie57
genre8.movies << movie70
genre8.movies << movie74
genre8.movies << movie77 
genre8.movies << movie78
genre8.movies << movie81
genre8.save

#Action
genre9.movies << movie2
genre9.movies << movie5
genre9.movies << movie8
genre9.movies << movie11
genre9.movies << movie12
genre9.movies << movie24
genre9.movies << movie25
genre9.movies << movie26
genre9.movies << movie31
genre9.movies << movie34
genre9.movies << movie36
genre9.movies << movie37
genre9.movies << movie38
genre9.movies << movie39
genre9.movies << movie40
genre9.movies << movie41
genre9.movies << movie42
genre9.movies << movie77
genre9.movies << movie78
genre9.movies << movie79
genre9.movies << movie80
genre9.movies << movie81
genre9.movies << movie82
genre9.movies << movie84
genre9.save