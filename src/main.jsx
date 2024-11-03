import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';

// Lazy load the pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));

const router = createBrowserRouter([
  {
    path: '/personal-portfolio',
    element: <App />, // Wrap the routes with App component
    children: [
      {
        path: '/personal-portfolio',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
