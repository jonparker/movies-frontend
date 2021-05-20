import IMovieProps from "../IMovieProps";

export default class FilmWorldMovieService {
  GetMovies(): Array<IMovieProps> {
    return [
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
      {
        title: "Star Wars: Episode III - Revenge of the Sith",
        year: "2005",
        rated: "PG-13",
        released: "19 May 2005",
        runtime: "140 min",
        genre: "Action, Adventure, Fantasy",
        director: "George Lucas",
        writer: "George Lucas",
        actors:
          "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid",
        plot: "During the near end of the clone wars, Darth Sidious has revealed himself and is ready to execute the last part of his plan to rule the Galaxy. Sidious is ready for his new apprentice, Lord...",
        language: "English",
        country: "USA",
        poster:
          "http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTfwOTg0NjI4NA@@._V1_SX300.jpg",
        metascore: 68,
        rating: 3.3,
        votes: "522,705",
        id: "fw0121766",
        type: "movie",
        price: "129.9",
      },
    ];
  }
}
