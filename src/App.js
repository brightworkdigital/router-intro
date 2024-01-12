import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import JokesPage from './pages/JokesPage';
import NavBar from './pages/NavBar';
import JokeDetailPage from './pages/JokeDetailPage';
import AuthContext from './store/auth-context';
import { useState } from 'react';

function App() {

  return (
    <h1>Hello Joke App</h1>
  );
}

export default App;
