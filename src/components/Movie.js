import React from 'react';
// to get moveiId from router
import { useParams } from 'react-router-dom';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
// import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';

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
    console.log('movie title: ', movie.original_title);

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie}/>
            <MovieInfoBar 
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
        </>
    )
};

export default Movie;