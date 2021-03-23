json.extract! movie, :id, :title, :year, :synopsis, :genres
json.imageUrl url_for(movie.poster)