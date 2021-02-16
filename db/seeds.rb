# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
MovieGenre.destroy_all
Movie.destroy_all
Genre.destroy_all

User.create(email: "demo@demo.com", password: "123456")


movie1 = Movie.create(title: "The Holy Mountain", year: 1973, synopsis: "An alchemist bring together a group to displace 
the gods who rule the universe.")
movie2 = Movie.create(title: "Seven Samurai", year: 1954, synopsis: "Seven warriors defend a village from invading bandits.")
movie3 = Movie.create(title: "Amarcord", year: 1973, synopsis: "A coming of age story set under the shadow of fascist Italy.")
movie4 = Movie.create(title: "The Seventh Seal", year: 1957, synopsis: "A knight returns from the crusades to a plague 
ridden Sweden, where he challenges death to a game of chess.")
movie5 = Movie.create(title: "Yojimbo", year: 1961, synopsis: "A ronin turns a turf war between two clans to his own advantage.")
movie6 = Movie.create(title: "Withnail and I", year: 1986, synopsis: "Two unemployed actors take drugs and go on a vacation 
to the countryside.")
movie7 = Movie.create(title: "The Ruling Class", year: 1972, synopsis: "An aristocrat who thinks he is God ascends to the 
British peerage.")
movie8 = Movie.create(title: "Rashomon", year: 1950, synopsis: "Four people give different accounts of a man’s murder and 
the rape of his wife.")
movie9 = Movie.create(title: "8½", year: 1963, synopsis: "A director struggles with his current film, a creative crisis, 
and his love life.")
movie10 = Movie.create(title: "La strada", year: 1954, synopsis: "A woman is sold by her mother into a traveling circus.")
movie11 = Movie.create(title: "Kagemusha", year: 1980, synopsis: "When a warlord dies, a peasant thief is called upon to 
impersonate him.")
movie12 = Movie.create(title: "Harakiri", year: 1962, synopsis: "An unemployed samurai arrives at the manor of Lord Iyi, 
begging to be allowed to commit ritual suicide on the property.")
movie13 = Movie.create(title: "The Virgin Spring", year: 1960, synopsis: "A father in medieval Sweden seeks vengence against 
his daughter's murderers.")
movie14 = Movie.create(title: "Bicycle Thieves", year: 1948, synopsis: "A man and his son search for his stolen bike, 
which he needs for work.")
movie15 = Movie.create(title: "Pierrot le fou", year: 1965, synopsis: "A man runs away from his home life with his ex-lover.")
movie16 = Movie.create(title: "Bottle Rocket", year: 1996, synopsis: "Three friends rob a bookstore and go on the run.")
movie17 = Movie.create(title: "The Exterminating Angel", year: 1962, synopsis: "A group of high-society friends are invited 
to a mansion for dinner and find themselves inexplicably unable to leave.")
movie18 = Movie.create(title: "Paths of Glory", year: 1957, synopsis: "A colonel goes head-to-head with the army’s ruthless 
top brass when his men are accused of cowardice after being unable to carry out 
an impossible mission.")
movie19 = Movie.create(title: "House", year: 1977, synopsis: "A girl who travels with six classmates to her ailing aunt’s 
country home and comes face-to-face with evil spirits.")
movie20 = Movie.create(title: "Cronos", year: 1993, synopsis: "An antiques dealer happens upon a golden device which grants 
him addictive powers.")
movie21 = Movie.create(title: "The Great Dictator", year: 1940, synopsis: "A Jewish barber gets mistaken for a cruel dictator.")
movie22 = Movie.create(title: "Black Moon", year: 1975, synopsis: "A young woman escapes the horrors of war at a remote farmhouse.")
movie23 = Movie.create(title: "Casablanca", year: 1942, synopsis: "A cynical expatriate American cafe owner struggles to 
decide whether or not to help his former lover and her fugitive husband escape 
the Nazis in French Morocco.")
movie24 = Movie.create(title: "Come and See", year: 1985, synopsis: "After finding an old rifle, a young boy joins the Soviet 
resistance movement against ruthless German forces and experiences the horrors 
of World War II.")
movie25 = Movie.create(title: "Belladonna of Sadness", year: 1973, synopsis: "A peasant woman makes a deal with the devil 
to get revenge on a cruel baron.")
movie26 = Movie.create(title: "Akira", year: 1988, synopsis: "A secret military project endangers Neo-Tokyo.")
movie27 = Movie.create(title: "Spirited Away", year: 2001, synopsis: "A sullen 10-year-old girl wanders into a world ruled 
by gods, witches, and spirits.")
movie28 = Movie.create(title: "The Witch", year: 1915, synopsis: "A family in 1630s New England is torn apart by the forces 
of witchcraft, black magic, and possession.")
movie29 = Movie.create(title: "Suspiria", year: 1977, synopsis: "A newcomer to a prestigious German ballet academy comes to 
realize that the school is a front for something sinister.")
movie30 = Movie.create(title: "The Night of the Hunter", year: 1955, synopsis: "A religious fanatic marries a gullible widow 
whose young children are reluctant to tell him where their real dad hid the 
$10,000 he'd stolen in a robbery.")
movie31 = Movie.create(title: "The Life Aquatic with Steve Zissou", year: 2004, synopsis: "An oceanographer hunts the shark 
that ate his friend and meets a man who may or may not be his son.")
movie32 = Movie.create(title: "Manhattan", year: 1979, synopsis: "The life of a divorced television writer is complicated 
when he falls in love with his best friend's mistress.")
movie33 = Movie.create(title: "Hannah and Her Sisters", year: 1986, synopsis: "Hannah's husband falls in love with her sister 
Lee, while her hypochondriac ex-husband rekindles his relationship with her sister Holly.")
movie34 = Movie.create(title: "Heavy Metal", year: 1981, synopsis: "A glowing green orb terrorizes a young girl with an 
anthology of bizarre and fantastic stories.")
movie35 = Movie.create(title: "Heavy Traffic", year: 1973, synopsis: "A cartoonist contends with life in the inner city.")
movie36 = Movie.create(title: "Wizards", year: 1977, synopsis: "A wizard and his faire folk comrades fight an evil wizard 
who's using technology in his bid for conquest.")
movie37 = Movie.create(title: "Star Wars: Episode IV - A New Hope", year: 1977, synopsis: "A group of 
heroes join together to save the galaxy from the Empire's world-destroying battle station")
movie38 = Movie.create(title: "The Running Man", year: 1987, synopsis: "A falsely convicted man gets his 
shot at freedom when he must forcibly participate in a TV game show where convicts, 
runners, must battle killers for their freedom.")
movie39 = Movie.create(title: "The Adventures of Buckaroo Banzai Across the 8th Dimension", 
year: 1984, synopsis: "Buckaroo Banzai and his crime-fighting team must stop evil alien invaders 
from the eighth dimension who are planning to conquer Earth.")


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
# MovieGenre.create(movie_id: movie25.id, genre_id: genre1.id)
# MovieGenre.create(movie_id: movie26.id, genre_id: genre1.id)
# MovieGenre.create(movie_id: movie27.id, genre_id: genre1.id)
# MovieGenre.create(movie_id: movie34.id, genre_id: genre1.id)
# MovieGenre.create(movie_id: movie35.id, genre_id: genre1.id)
# MovieGenre.create(movie_id: movie36.id, genre_id: genre1.id)
genre1.movies << movie25
genre1.movies << movie26
genre1.movies << movie27
genre1.movies << movie34
genre1.movies << movie35
genre1.movies << movie36
genre1.save

#Suspense
# MovieGenre.create(movie_id: movie17.id, genre_id: genre2.id)
# MovieGenre.create(movie_id: movie19.id, genre_id: genre2.id)
# MovieGenre.create(movie_id: movie20.id, genre_id: genre2.id)
# MovieGenre.create(movie_id: movie28.id, genre_id: genre2.id)
# MovieGenre.create(movie_id: movie29.id, genre_id: genre2.id)
# MovieGenre.create(movie_id: movie30.id, genre_id: genre2.id)
genre2.movies << movie17
genre2.movies << movie19
genre2.movies << movie20
genre2.movies << movie28
genre2.movies << movie29
genre2.movies << movie30
genre2.save

#Comedy
# MovieGenre.create(movie_id: movie6.id, genre_id: genre3.id)
# MovieGenre.create(movie_id: movie7.id, genre_id: genre3.id)
# MovieGenre.create(movie_id: movie16.id, genre_id: genre3.id)
# MovieGenre.create(movie_id: movie21.id, genre_id: genre3.id)
# MovieGenre.create(movie_id: movie31.id, genre_id: genre3.id)
# MovieGenre.create(movie_id: movie32.id, genre_id: genre3.id)
genre3.movies << movie6
genre3.movies << movie7
genre3.movies << movie16
genre3.movies << movie21
genre3.movies << movie31
genre3.movies << movie32
genre3.save

#Drama
# MovieGenre.create(movie_id: movie2.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie3.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie4.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie8.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie10.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie11.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie12.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie13.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie14.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie15.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie17.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie18.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie23.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie30.id, genre_id: genre4.id)
# MovieGenre.create(movie_id: movie33.id, genre_id: genre4.id)
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
genre4.save

#Surreal
# MovieGenre.create(movie_id: movie1.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie3.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie4.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie7.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie9.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie11.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie17.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie19.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie22.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie25.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie26.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie27.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie29.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie31.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie34.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie35.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie36.id, genre_id: genre5.id)
# MovieGenre.create(movie_id: movie39.id, genre_id: genre5.id)
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
genre5.save

#Sci-Fi
# MovieGenre.create(movie_id: movie26.id, genre_id: genre6.id)
# MovieGenre.create(movie_id: movie34.id, genre_id: genre6.id)
# MovieGenre.create(movie_id: movie36.id, genre_id: genre6.id)
# MovieGenre.create(movie_id: movie37.id, genre_id: genre6.id)
# MovieGenre.create(movie_id: movie38.id, genre_id: genre6.id)
# MovieGenre.create(movie_id: movie39.id, genre_id: genre6.id)
genre6.movies << movie26
genre6.movies << movie34
genre6.movies << movie36
genre6.movies << movie37
genre6.movies << movie38
genre6.movies << movie39
genre6.save

#Crime
# MovieGenre.create(movie_id: movie5.id, genre_id: genre7.id)
# MovieGenre.create(movie_id: movie8.id, genre_id: genre7.id)
# MovieGenre.create(movie_id: movie13.id, genre_id: genre7.id)
# MovieGenre.create(movie_id: movie14.id, genre_id: genre7.id)
# MovieGenre.create(movie_id: movie16.id, genre_id: genre7.id)
# MovieGenre.create(movie_id: movie18.id, genre_id: genre7.id)
# MovieGenre.create(movie_id: movie30.id, genre_id: genre7.id)
# MovieGenre.create(movie_id: movie38.id, genre_id: genre7.id)
genre7.movies << movie5
genre7.movies << movie8
genre7.movies << movie13
genre7.movies << movie14
genre7.movies << movie16
genre7.movies << movie18
genre7.movies << movie30
genre7.movies << movie38
genre7.save

#Fantasy
# MovieGenre.create(movie_id: movie1.id, genre_id: genre8.id)
# MovieGenre.create(movie_id: movie9.id, genre_id: genre8.id)
# MovieGenre.create(movie_id: movie20.id, genre_id: genre8.id)
# MovieGenre.create(movie_id: movie22.id, genre_id: genre8.id)
# MovieGenre.create(movie_id: movie25.id, genre_id: genre8.id)
# MovieGenre.create(movie_id: movie27.id, genre_id: genre8.id)
# MovieGenre.create(movie_id: movie34.id, genre_id: genre8.id)
# MovieGenre.create(movie_id: movie36.id, genre_id: genre8.id)
# MovieGenre.create(movie_id: movie37.id, genre_id: genre8.id)
genre8.movies << movie1
genre8.movies << movie9
genre8.movies << movie20
genre8.movies << movie22
genre8.movies << movie25
genre8.movies << movie27
genre8.movies << movie34
genre8.movies << movie36
genre8.movies << movie37
genre8.save

#Action
# MovieGenre.create(movie_id: movie2.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie5.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie8.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie11.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie12.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie24.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie26.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie31.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie34.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie36.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie37.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie38.id, genre_id: genre9.id)
# MovieGenre.create(movie_id: movie39.id, genre_id: genre9.id)
genre9.movies << movie2
genre9.movies << movie5
genre9.movies << movie8
genre9.movies << movie11
genre9.movies << movie12
genre9.movies << movie24
genre9.movies << movie26
genre9.movies << movie31
genre9.movies << movie34
genre9.movies << movie36
genre9.movies << movie37
genre9.movies << movie38
genre9.movies << movie39
genre9.save