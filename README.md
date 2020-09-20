# node-movie-api
Movie API and CRUD Operations with Express JS

# Note: This project hasn't finished yet.


# movies


| Route         | HTTP Method   | Description  |
| :-------------: |:-------------:| :-----:|
| /api/movies/   | "GET          | List all movies |
| /api/movies/   | "GET          | {"title":"foo", "category":"bar","country":"example"} |
| /api/movies/:movies_id   | "GET"          | Get a movies |
| /api/movies/:movies_id   | "PUT"          | Update movies |
| /api/movies/:movies_id   | "DELETE"          | Delete a movies |
| /api/movies/top10   | "GET          | Get the top 10 movies |
| /api/movies/between/:start_year/:end_year   | "GET          | Movies between two years |

<br>
<br>



# directors


| Route         | HTTP Method   | Description  |
| :-------------: |:-------------:| :-----:|
| /api/directors/   | "GET          | List all directors |
| /api/directors/   | "GET          | {"title":"foo", "category":"bar","country":"example"} |
| /api/directors/:directors_id   | "GET"          | Get a directors |
| /api/directors/:directors_id   | "PUT"          | Update directors |
| /api/directors/:directors_id   | "DELETE"          | Delete a directors |
| /api/directors/top10   | "GET          | Get the top 10 directors |
