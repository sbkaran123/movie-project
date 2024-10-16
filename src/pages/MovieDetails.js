import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/omdbApi';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError('Failed to fetch movie details.');
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    movie ? (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
        <div className="flex">
          <img src={movie.Poster} alt={movie.Title} className="w-1/4" />
          <div className="ml-4">
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Cast:</strong> {movie.Actors}</p>
          </div>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default MovieDetails;
