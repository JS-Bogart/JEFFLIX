json.extract! movie, :id, :title, :year, :synopsis, :rating, :genres
json.imageUrl url_for(movie.poster)
json.videoUrl url_for(movie.trailer)