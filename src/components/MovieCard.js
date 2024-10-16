import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="border p-4">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover" />
      <h3 className="font-bold mt-2">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
