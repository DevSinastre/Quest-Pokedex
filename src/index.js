import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, BrowserRouter } from 'react-router-dom';

import GetAllPokemons from './routes/GetAllPokemons';
import PokemonDetails from './routes/PokemonDetails';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/pokemon',
        element: <GetAllPokemons />,
      },
      {
        path: '/pokemon/:id',
        element: <PokemonDetails />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>
);