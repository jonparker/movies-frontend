export default interface IMovieProps {
  title: string;
  year?: string;
  rated?: string;
  released?: string;
  runtime?: string;
  genre?: string;
  director?: string;
  writer?: string;
  actors?: string;
  plot?: string;
  language?: string;
  country?: string;
  awards?: string;
  poster?: string;
  metascore?: number;
  votes?: string;
  rating: number | null;
  id: string;
  type?: string;
  price?: string;
}
