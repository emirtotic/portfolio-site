import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Main from './layouts/Main';
import './static/css/main.scss';

const { PUBLIC_URL } = process.env;

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));

const RedirectHandler = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = new URLSearchParams(window.location.search).get('redirect');
    if (redirectPath) {
      navigate(redirectPath);
    }
  }, [navigate]);

  return children;
};

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <RedirectHandler>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </RedirectHandler>
  </BrowserRouter>
);

export default App;
