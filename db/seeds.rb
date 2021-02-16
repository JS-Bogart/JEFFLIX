# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Movie.destroy_all
Genre.destroy_all
MovieGenre.destroy_all

User.create(email: "demo@demo.com", password: "123456")


movie1 = Movie.create("The Holy Mountain", 1973, "An alchemist bring together a group to displace 
the gods who rule the universe.")
movie2 = Movie.create("Seven Samurai", 1954, "Seven warriors defend a village from invading bandits.")
movie3 = Movie.create("Amarcord", 1973, "A coming of age story set under the shadow of fascist Italy.")
movie4 = Movie.create("The Seventh Seal", 1957, "A knight returns from the crusades to a plague 
ridden Sweden, where he challenges death to a game of chess.")
movie5 = Movie.create("Yojimbo", 1961, "A ronin turns a turf war between two clans to his own advantage.")
movie6 = Movie.create("Withnail and I", 1986, "Two unemployed actors take drugs and go on a vacation 
to the countryside.")
movie7 = Movie.create("The Ruling Class", 1972, "An aristocrat who thinks he is God ascends to the 
British peerage.")
movie8 = Movie.create("Rashomon", 1950, "Four people give different accounts of a man’s murder and 
the rape of his wife.")
movie9 = Movie.create("8½", 1963, "A director struggles with his current film, a creative crisis, 
and his love life.")
movie10 = Movie.create("La strada", 1954, "A woman is sold by her mother into a traveling circus.")
movie11 = Movie.create("Kagemusha", 1980, "When a warlord dies, a peasant thief is called upon to 
impersonate him.")
movie12 = Movie.create("Harakiri", 1962, "An unemployed samurai arrives at the manor of Lord Iyi, 
begging to be allowed to commit ritual suicide on the property.")
movie13 = Movie.create("The Virgin Spring", 1960, "A father in medieval Sweden seeks vengence against 
his daughter's murderers.")
movie14 = Movie.create("Bicycle Thieves", 1948, "A man and his son search for his stolen bike, 
which he needs for work.")
movie15 = Movie.create("Pierrot le fou", 1965, "A man runs away from his home life with his ex-lover.")
movie16 = Movie.create("Bottle Rocket", 1996, "Three friends rob a bookstore and go on the run.")
movie17 = Movie.create("The Exterminating Angel", 1962, "A group of high-society friends are invited 
to a mansion for dinner and find themselves inexplicably unable to leave.")
movie18 = Movie.create("Paths of Glory", 1957, "A colonel goes head-to-head with the army’s ruthless 
top brass when his men are accused of cowardice after being unable to carry out 
an impossible mission.")
movie19 = Movie.create("House", 1977, "A girl who travels with six classmates to her ailing aunt’s 
country home and comes face-to-face with evil spirits.")
movie20 = Movie.create("Cronos", 1993, "An antiques dealer happens upon a golden device which grants 
him addictive powers.")
movie21 = Movie.create("The Great Dictator", 1940, "A Jewish barber gets mistaken for a cruel dictator.")
movie22 = Movie.create("Black Moon", 1975, "A young woman escapes the horrors of war at a remote farmhouse.")
movie23 = Movie.create("Casablanca", 1942, "A cynical expatriate American cafe owner struggles to 
decide whether or not to help his former lover and her fugitive husband escape 
the Nazis in French Morocco.")
movie24 = Movie.create("Come and See", 1985, "After finding an old rifle, a young boy joins the Soviet 
resistance movement against ruthless German forces and experiences the horrors 
of World War II.")
movie25 = Movie.create("Belladonna of Sadness", 1973, "A peasant woman makes a deal with the devil 
to get revenge on a cruel baron.")
movie26 = Movie.create("Akira", 1988, "A secret military project endangers Neo-Tokyo.")
movie27 = Movie.create("Spirited Away", 2001, "A sullen 10-year-old girl wanders into a world ruled 
by gods, witches, and spirits.")
movie28 = Movie.create("The Witch", 1915, "A family in 1630s New England is torn apart by the forces 
of witchcraft, black magic, and possession.")
movie29 = Movie.create("Suspiria", 1977, "A newcomer to a prestigious German ballet academy comes to 
realize that the school is a front for something sinister.")
movie30 = Movie.create("The Night of the Hunter", 1955, "A religious fanatic marries a gullible widow 
whose young children are reluctant to tell him where their real dad hid the 
$10,000 he'd stolen in a robbery.")
movie31 = Movie.create("The Life Aquatic with Steve Zissou", 2004, "An oceanographer hunts the shark 
that ate his friend and meets a man who may or may not be his son.")
movie32 = Movie.create("Manhattan", 1979, "The life of a divorced television writer is complicated 
when he falls in love with his best friend's mistress.")
movie33 = Movie.create("Hannah and Her Sisters", 1986, "Hannah's husband falls in love with her sister 
Lee, while her hypochondriac ex-husband rekindles his relationship with her sister Holly.")
movie34 = Movie.create("Heavy Metal", 1981, "A glowing green orb terrorizes a young girl with an 
anthology of bizarre and fantastic stories.")
movie35 = Movie.create("Heavy Traffic", 1973, "A cartoonist contends with life in the inner city.")
movie36 = Movie.create("Wizards", 1977, "A wizard and his faire folk comrades fight an evil wizard 
who's using technology in his bid for conquest.")
movie37 = Movie.create("Star Wars: Episode IV - A New Hope", 1977, "A group of 
heroes join together to save the galaxy from the Empire's world-destroying battle station")
movie38 = Movie.create("The Running Man", 1987, "A falsely convicted man gets his 
shot at freedom when he must forcibly participate in a TV game show where convicts, 
runners, must battle killers for their freedom.")
movie39 = Movie.create("The Adventures of Buckaroo Banzai Across the 8th Dimension", 
1984, "Buckaroo Banzai and his crime-fighting team must stop evil alien invaders 
from the eighth dimension who are planning to conquer Earth.")


genre1 = Genre.create("Animated")
genre2 = Genre.create("Suspense")
genre3 = Genre.create("Comedy")
genre4 = Genre.create("Drama")
genre5 = Genre.create("Surreal")
genre6 = Genre.create("Sci-Fi")
genre7 = Genre.create("Crime")
genre8 = Genre.create("Fantasy")
genre9 = Genre.create("Action")

#Animated
MovieGenre.create(movie_id: movie25.id, genre_id: genre1.id)
MovieGenre.create(movie_id: movie26.id, genre_id: genre1.id)
MovieGenre.create(movie_id: movie27.id, genre_id: genre1.id)
MovieGenre.create(movie_id: movie34.id, genre_id: genre1.id)
MovieGenre.create(movie_id: movie35.id, genre_id: genre1.id)
MovieGenre.create(movie_id: movie36.id, genre_id: genre1.id)

#Suspense
MovieGenre.create(movie_id: movie17.id, genre_id: genre2.id)
MovieGenre.create(movie_id: movie19.id, genre_id: genre2.id)
MovieGenre.create(movie_id: movie20.id, genre_id: genre2.id)
MovieGenre.create(movie_id: movie28.id, genre_id: genre2.id)
MovieGenre.create(movie_id: movie29.id, genre_id: genre2.id)
MovieGenre.create(movie_id: movie30.id, genre_id: genre2.id)

#Comedy
MovieGenre.create(movie_id: movie6.id, genre_id: genre3.id)
MovieGenre.create(movie_id: movie7.id, genre_id: genre3.id)
MovieGenre.create(movie_id: movie16.id, genre_id: genre3.id)
MovieGenre.create(movie_id: movie21.id, genre_id: genre3.id)
MovieGenre.create(movie_id: movie31.id, genre_id: genre3.id)
MovieGenre.create(movie_id: movie32.id, genre_id: genre3.id)

#Drama
MovieGenre.create(movie_id: movie2.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie3.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie4.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie8.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie10.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie11.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie12.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie13.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie14.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie15.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie17.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie18.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie23.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie30.id, genre_id: genre4.id)
MovieGenre.create(movie_id: movie33.id, genre_id: genre4.id)

#Surreal
MovieGenre.create(movie_id: movie1.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie3.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie4.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie7.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie9.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie11.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie17.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie19.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie22.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie25.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie26.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie27.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie29.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie31.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie34.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie35.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie36.id, genre_id: genre5.id)
MovieGenre.create(movie_id: movie39.id, genre_id: genre5.id)

#Sci-Fi
MovieGenre.create(movie_id: movie26.id, genre_id: genre6.id)
MovieGenre.create(movie_id: movie34.id, genre_id: genre6.id)
MovieGenre.create(movie_id: movie36.id, genre_id: genre6.id)
MovieGenre.create(movie_id: movie37.id, genre_id: genre6.id)
MovieGenre.create(movie_id: movie38.id, genre_id: genre6.id)
MovieGenre.create(movie_id: movie39.id, genre_id: genre6.id)

#Crime
MovieGenre.create(movie_id: movie5.id, genre_id: genre7.id)
MovieGenre.create(movie_id: movie8.id, genre_id: genre7.id)
MovieGenre.create(movie_id: movie13.id, genre_id: genre7.id)
MovieGenre.create(movie_id: movie14.id, genre_id: genre7.id)
MovieGenre.create(movie_id: movie16.id, genre_id: genre7.id)
MovieGenre.create(movie_id: movie18.id, genre_id: genre7.id)
MovieGenre.create(movie_id: movie30.id, genre_id: genre7.id)
MovieGenre.create(movie_id: movie38.id, genre_id: genre7.id)

#Fantasy
MovieGenre.create(movie_id: movie1.id, genre_id: genre8.id)
MovieGenre.create(movie_id: movie9.id, genre_id: genre8.id)
MovieGenre.create(movie_id: movie20.id, genre_id: genre8.id)
MovieGenre.create(movie_id: movie22.id, genre_id: genre8.id)
MovieGenre.create(movie_id: movie25.id, genre_id: genre8.id)
MovieGenre.create(movie_id: movie27.id, genre_id: genre8.id)
MovieGenre.create(movie_id: movie34.id, genre_id: genre8.id)
MovieGenre.create(movie_id: movie36.id, genre_id: genre8.id)
MovieGenre.create(movie_id: movie37.id, genre_id: genre8.id)

#Action
MovieGenre.create(movie_id: movie2.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie5.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie8.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie11.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie12.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie24.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie26.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie31.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie34.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie36.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie37.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie38.id, genre_id: genre9.id)
MovieGenre.create(movie_id: movie39.id, genre_id: genre9.id)