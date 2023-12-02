import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './app.css';
import Home from './pages/home';
import About from './pages/about';

const ProfileMePage = React.lazy(() => import('./pages/profile/me'));

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index path="/" element={<ProfileMePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/me" element={<ProfileMePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
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
