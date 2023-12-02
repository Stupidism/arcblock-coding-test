import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './app.css';
import Home from './pages/home';
import About from './pages/about';

const ProfileMePage = React.lazy(() => import('./pages/profile/me'));
const ProfileMeEditPage = React.lazy(() => import('./pages/profile/me/edit'));

function App() {
  return (
    <div className="app">
      {/* TODO: add a more serious loading page */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/" element={<ProfileMePage />} />
          <Route path="/about" element={<About />} />
          {/* Now homepage equals to /profile/me. */}
          <Route index path="/profile/me" element={<Navigate to="/" />} />
          <Route path="/profile/me/edit" element={<ProfileMeEditPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <Router basename={basename}>
      <App />
    </Router>
  );
}
