import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import './styles/main.scss';
import App from './App';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import reportWebVitals from './reportWebVitals';
import PageLoader from './components/PageLoader';
import FullPageLoader from './components/FullPageLoader';
import rawProjects from './projects.json';

const projectArray = Object.values(rawProjects.projects);
const projectRoutes = projectArray.map((project) => ({
  path: `/${project.slug}`,
  element: <ProjectPage path={project.path} />,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <HomePage />
      </App>
    ),
  },
  ...projectRoutes.map((route) => ({
    ...route,
    element: (
      <App>
        <Suspense fallback={<FullPageLoader />}>
          {route.element}
        </Suspense>
      </App>
    ),
    viewTransition: true,
  })),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
