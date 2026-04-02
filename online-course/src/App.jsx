import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import LiveClasses from './pages/LiveClasses';
import LiveRoom from './pages/LiveRoom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPassword from './pages/ForgotPassword';

import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AddProject from './pages/AddProject';
import MyProjects from './pages/MyProjects';

function App() {
  const { pathname } = useLocation();
  const isLiveRoom = pathname.startsWith('/live/') && pathname.split('/').length > 2;
  
  return (
    <>
      {!isLiveRoom && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/live" element={<LiveClasses />} />
        <Route path="/live/:id" element={<LiveRoom />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
