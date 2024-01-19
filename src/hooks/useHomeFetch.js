import { useState, useEffect, useRef} from 'react';
// API
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    console.log(searchTerm);

    const fetchMovies = async (page, searchTerm = "" ) => {
        try {
            setError(false);
            setLoading(true);
            
            const movies = await API.fetchMovies(searchTerm, page);
            console.log('movies: ',movies);
            
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

// call API.fetchMovies() only on initial render and search
    useEffect(() => {
        // wipe out old state before making a new search
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]); // trigger useEffect when user types for search (searchTerm changes)

    return { state, loading, error, searchTerm, setSearchTerm };
};
