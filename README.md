# node-movie-api
Node.JS Movie API


# Movies


| Route         | HTTP Method   | Description  |
| ------------- |:-------------:| -----:|
| /api/movie/   | "GET          | List all movies |
| /api/movie/   | "GET          | {"title":"foo", "category":"bar","country":"example"} |
| /api/movie/:movie_id   | "GET"          | Get a movie |
| /api/movie/:movie_id   | "PUT"          | Update movies |
| /api/movie/:movie_id   | "DELETE"          | Delete a movie |
| /api/movie/top10   | "GET          | Get the top 10 movies |

<br>
<br>



# Directors


| Route         | HTTP Method   | Description  |
| ------------- |:-------------:| -----:|
| /api/director/   | "GET          | List all directors |
| /api/director/   | "GET          | {"title":"foo", "category":"bar","country":"example"} |
| /api/director/:director_id   | "GET"          | Get a director |
| /api/director/:director_id   | "PUT"          | Update directors |
| /api/director/:director_id   | "DELETE"          | Delete a director |
| /api/director/top10   | "GET          | Get the top 10 directors |