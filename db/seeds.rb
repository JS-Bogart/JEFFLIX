# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Movie.destroy_all

User.create(email: "demo@demo.com", password: "123456")

movie_list = [
  ["The Holy Mountain", 1973, "An alchemist bring together a group to displace 
  the gods who rule the universe."],
  ["Seven Samurai", 1954, "Seven warriors defend a village from invading bandits."],
  ["Amarcord", 1973, "A coming of age story set under the shadow of fascist Italy."],
  ["The Seventh Seal", 1957, "A knight returns from the crusades to a plague 
  ridden Sweden, where he challenges death to a game of chess."],
  ["Yojimbo", 1961, "A ronin turns a turf war between two clans to his own advantage."],
  ["Withnail and I", 1986, "Two unemployed actors take drugs and go on a vacation 
  to the countryside."],
  ["The Ruling Class", 1972, "An aristocrat who thinks he is God ascends to the 
  British peerage."],
  ["Rashomon", 1950, "Four people give different accounts of a man’s murder and 
  the rape of his wife."],
  ["8½", 1963, "A director struggles with his current film, a creative crisis, 
  and his love life."],
  ["La strada", 1954, "A woman is sold by her mother into a traveling circus."],
  ["Kagemusha", 1980, "When a warlord dies, a peasant thief is called upon to 
  impersonate him."],
  ["Harakiri", 1962, "An unemployed samurai arrives at the manor of Lord Iyi, 
  begging to be allowed to commit ritual suicide on the property."],
  ["The Virgin Spring", 1960, "A father in medieval Sweden seeks vengence against 
  his daughter's murderers."],
  ["Bicycle Thieves", 1948, "A man and his son search for his stolen bike, 
  which he needs for work."],
  ["Pierrot le fou", 1965, "A man runs away from his home life with his ex-lover."],
  ["Bottle Rocket", 1996, "Three friends rob a bookstore and go on the run."],
  ["The Exterminating Angel", 1962, "A group of high-society friends are invited 
  to a mansion for dinner and find themselves inexplicably unable to leave."],
  ["Paths of Glory", 1957, "A colonel goes head-to-head with the army’s ruthless 
  top brass when his men are accused of cowardice after being unable to carry out 
  an impossible mission."],
  ["House", 1977, "A girl who travels with six classmates to her ailing aunt’s 
  country home and comes face-to-face with evil spirits."],
  ["Cronos", 1993, "An antiques dealer happens upon a golden device which grants 
  him addictive powers."],
  ["The Great Dictator", 1940, "A Jewish barber gets mistaken for a cruel dictator."],
  ["Black Moon", 1975, "A young woman escapes the horrors of war at a remote farmhouse."],
  ["Casablanca", 1942, "A cynical expatriate American cafe owner struggles to 
  decide whether or not to help his former lover and her fugitive husband escape 
  the Nazis in French Morocco."],
  ["Come and See", 1985, "After finding an old rifle, a young boy joins the Soviet 
  resistance movement against ruthless German forces and experiences the horrors 
  of World War II."],
  ["Belladonna of Sadness", 1973, "A peasant woman makes a deal with the devil 
  to get revenge on a cruel baron."],
  ["Akira", 1988, "A secret military project endangers Neo-Tokyo."],
  ["Spirited Away", 2001, "A sullen 10-year-old girl wanders into a world ruled 
  by gods, witches, and spirits."],
  ["The Witch", 1915, "A family in 1630s New England is torn apart by the forces 
  of witchcraft, black magic, and possession."],
  ["Suspiria", 1977, "A newcomer to a prestigious German ballet academy comes to 
  realize that the school is a front for something sinister."],
  ["The Night of the Hunter", 1955, "A religious fanatic marries a gullible widow 
  whose young children are reluctant to tell him where their real dad hid the 
  $10,000 he'd stolen in a robbery."],
  ["The Life Aquatic with Steve Zissou", 2004, "An oceanographer hunts the shark 
  that ate his friend and meets a man who may or may not be his son."],
  ["Manhattan", 1979, "The life of a divorced television writer is complicated 
  when he falls in love with his best friend's mistress."],
  ["Hannah and Her Sisters", 1986, "Hannah's husband falls in love with her sister 
  Lee, while her hypochondriac ex-husband rekindles his relationship with her sister Holly."],
  ["Heavy Metal", 1981, "A glowing green orb terrorizes a young girl with an 
  anthology of bizarre and fantastic stories."],
  ["Heavy Traffic", 1973, "A cartoonist contends with life in the inner city."],
  ["Wizards", 1977, "A wizard and his faire folk comrades fight an evil wizard 
  who's using technology in his bid for conquest."]
]

movie_list.each do |title, year|
  Movie.create( title: title, year: year, synopsis: synopsis )
end