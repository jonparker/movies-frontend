import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';
import IMovieProps from './IMovieProps';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const movie: IMovieProps = {
      id: "2123",
      title: "Star Wars IV"    
  };

  ReactDOM.render(<Movie title={movie.title} plot={movie.plot} rating={movie.rating} key={movie.id} id={movie.id}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
