// src/services/omdbApi.js
import axios from 'axios';

const API_KEY = '1035fff9';
const BASE_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

export const searchMovies = async (query, type = '') => {
  try {
    const response = await axios.get(`${BASE_URL}&s=${query}&type=${type}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}&i=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
