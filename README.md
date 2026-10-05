# Movie App

## Team

**Team Name:** MovieVault

| Member   | Role / Interest  |
| -------- | ---------------- |
| Ryan Warrener 100871033 | Movie Search and results |
| Christopher Fernandes 100864284 | Movie representation and details      |
| Brayden Johnson 100832373 | Favourites and saved movies |
| Kishawn Wynter 100876556 | Ratings and reviews |

## Topic

**Domain:** Movies

Our group will build a movie-focused React application.

## Candidate Data Source
- TMDB API
- https://www.themoviedb.org/settings/api

##Topic
Our application will be a movie database to help users discover, organize and keep track of movies they have seen and movies they want to see. It will be inspired by similar applications 
such as letterboxd, imdb, etc. Users will be able to search through a catalog of movies and add them to their own personal library of watched movies or to a watchlist of movies they want to watch. Through their library and watchlist, users will be recommended movies that match their taste. 

## API
The Movie Database
URL: https://www.themoviedb.org/
JSON Sample
```
{
      "adult": false,
      "backdrop_path": "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
      "id": 934433,
      "title": "Scream VI",
      "original_language": "en",
      "original_title": "Scream VI",
      "overview": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
      "poster_path": "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
      "media_type": "movie",
      "genre_ids": [
        27,
        9648,
        53
      ],
      "popularity": 609.941,
      "release_date": "2023-03-08",
      "video": false,
      "vote_average": 7.374,
      "vote_count": 684
}
```

## Comparitors
Two inspirations from this project are letterboxd and IMDB. One way we will differ from these apps, will  be the focus on solving decision paralysis. Specifically the app will not just recommend trending movies but also movies based on their taste in movies. Another feature will allow users to randomly pick a movie from their watchlist to prevent them from creating an endless list of movies they will never watch.

## Feature Plan
### Movie Search results and recommendations
- Users will be able to search for movies by name
- Users will be able to search 
### Movie Representation and details
- Users will be able to see movie posters when searching for movies
- Users personal library will be designed like a bookshelf with dvds
### Favorites, saved movies and watchlist
- Users will be able to save movies to their own library or watchlist
- Users will be able to randomly choose a movie from their watchlist to watch
- Users will be recommended a mix of movies from their watchlist and movies they may like based on their library through their home page
### Ratings and Reviews
- Users will be able to rate movies out of 5
- Users will be able to leave reviews on movies they have seen
- Users will be able to see other user reviews and critic reviews on their homepage
