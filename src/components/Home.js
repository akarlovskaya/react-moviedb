import React, { useState, useEffect } from 'react';
// API
import API from '../API';

// config
import {  IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
// components

// hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const {state, loading, error } = useHomeFetch();

    console.log(state);

    return <div>Home Page</div>
}

export default Home;