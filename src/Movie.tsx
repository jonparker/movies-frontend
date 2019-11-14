import React from 'react';
import MovieProps from './MovieProps';

const Movie: React.FC<MovieProps> = (movie) => {
    return (
      <tr className="movie">
        <td><input type="hidden" id={movie.id}/></td>
        <td>{movie.title}</td>
        <td>{movie.plot}</td>
      </tr>
    );
  }
  
  export default Movie;
  