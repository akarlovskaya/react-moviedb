import React from 'react';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// styles
import { GlobalStyle} from './GlobalStyle';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* route param :paramName */}
        <Route path='/:movieId' element={<Movie />} />
        {/* show NotFound component on any other routes that do not exist */}
        <Route path='/*' element={<NotFound />}/>
        
        

      </Routes>

      <GlobalStyle />
    </Router>
  );
}

export default App;
