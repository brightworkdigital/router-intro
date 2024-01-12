import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/Home';
import JokesPage from './pages/Jokes';

// const router = createBrowserRouter(routeDefinitions);

function App() {
  // return <RouterProvider router={router} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jokes" element={<JokesPage />} />
      </Routes>
    </BrowserRouter>);
}

export default App;
