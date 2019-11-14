import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';
import MovieProps from './MovieProps';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const movie: MovieProps = {
      id: "2123",
      title: "Star Wars IV"    
  };

  ReactDOM.render(<Movie title={movie.title} plot={movie.plot} key={movie.id} id={movie.id}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
