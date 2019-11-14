import React from 'react';
import Movie from './Movie';
import MovieProps from './MovieProps';

const Movies: React.FC = () => {
    const movies: Array<MovieProps> = [
        {
            id: "cw0076759",
            title: "Star Wars: Episode IV - A New Hope",
            plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader."
        }
    ];

    return (
      <table className="Movies">
        <thead>
            <tr>
                <th></th>
                <th>Title</th>
                <th>Plot</th>
            </tr>
        </thead>
        <tbody>
            {movies.map(movie => 
                <Movie title={movie.title} plot={movie.plot} key={movie.id} id={movie.id}/>
            )}
        </tbody>
      </table>
    );
  }
  
  export default Movies;
  