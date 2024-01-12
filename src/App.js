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
  const [user, setUser] = useState('dave');

  return (
    <AuthContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/jokes" element={<JokesPage />} />
            <Route path="/jokes/:jokeId" element={<JokeDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
