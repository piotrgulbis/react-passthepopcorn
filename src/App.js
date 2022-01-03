import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import HomePage from './components/HomePage';
import MoviePage from './components/MoviePage';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyles } from './GlobalStyles';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:movieId' element={<MoviePage />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <GlobalStyles />
  </Router>
);

export default App;
