import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home.js';
import Teams from './pages/Teams.js';
import Challenges from './pages/Challenges.js';
import Facilities from './pages/Facilities.js';
import Profile from './pages/Profile.js';
import AdminDashboard from './pages/AdminDashboard.js';
import Notifications from './pages/Notifications.js';
import Settings from './pages/Settings.js';
import LoginSignup from './components/LoginSignup/LoginSignup.js';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="/login-signup" element={<LoginSignup />} /> 
          <Route path="/" exact element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
