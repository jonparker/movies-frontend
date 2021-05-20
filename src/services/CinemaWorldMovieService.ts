import IMovieProps from "../IMovieProps";
//import axios from 'axios';

export default class CinemaWorldMovieService {
  GetMovies(): Array<IMovieProps> {
    // axios.get("https://dog.ceo/api/breeds/list/all")
    // .then(res => console.log(res.data));

    return [
      {
        id: "cw0076759",
        title: "Star Wars: Episode IV - A New Hope",
        rated: "PG",
        poster:
          "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg",
        plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
        year: "1980",
        released: "20 Jun 1980",
        runtime: "124 min",
        genre: "Action, Adventure, Fantasy",
        director: "Irvin Kershner",
        writer:
          "Leigh Brackett (screenplay), Lawrence Kasdan (screenplay), George Lucas (story by)",
        actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        language: "English",
        country: "USA",
        awards: "Won 1 Oscar. Another 19 wins & 18 nominations.",
        metascore: 80,
        rating: 4,
        votes: "842,451",
        type: "movie",
        price: "13.5",
      },
      {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        year: "1980",
        rated: "PG",
        released: "20 Jun 1980",
        runtime: "124 min",
        genre: "Action, Adventure, Fantasy",
        director: "Irvin Kershner",
        writer:
          "Leigh Brackett (screenplay), Lawrence Kasdan (screenplay), George Lucas (story by)",
        actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        plot: "After the Rebel base on the icy planet Hoth is taken over by the Empire, Han, Leia, Chewbacca, and C-3PO flee across the galaxy from the Empire. Luke travels to the forgotten planet of Dagobah to receive training from the Jedi master Yoda, while Vader endlessly pursues him.",
        language: "English",
        country: "USA",
        awards: "Won 1 Oscar. Another 19 wins & 18 nominations.",
        poster:
          "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg",
        metascore: 80,
        rating: 3,
        votes: "842,451",
        id: "cw0080684",
        type: "movie",
        price: "13.5",
      },
    ];
  }
}
