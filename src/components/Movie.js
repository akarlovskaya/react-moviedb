import React from 'react';
// to get moveiId from router
import { useParams } from 'react-router-dom';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
// import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';

// Hook
import {useMovieFetch} from '../hooks/useMovieFetch';

// Fallback Image
import NoImage from '../images/no_image.jpg';
import API from '../API';

const Movie = () => {
    // get movieId from Route path='/:movieId'
    const { movieId } = useParams();
    // rename state -> movie like this state: movie
    const { state: movie, loading, error } = useMovieFetch(movieId);

    console.log('movie from API: ', movie);

    return (
        <>
            <div>Movie</div>;
        </>
    )
}



export default Movie;