// src/App.jsx

import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import ProfileHeader from './components/ProfileHeader';
import Skills from './components/Skills';
import ProjectList from './components/ProjectList';
import Education from './components/Education';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/profile`);
        setProfile(response.data);
      } catch (err) {
        setError('Failed to fetch profile data. Is the backend running?');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <div className="container"><h1>Loading...</h1></div>;
  if (error) return <div className="container"><h1 style={{color: 'red'}}>{error}</h1></div>;

  return (
    <div className="container">
      {profile && (
        <>
          <ProfileHeader profile={profile} />
          {/* The Skills component no longer needs click handlers */}
          <Skills skills={profile.skills} />
          {/* Pass the full projects array directly from the profile state */}
          <Education educationHistory={profile.education} />
          <ProjectList projects={profile.projects} />
          
        </>
      )}
    </div>
  );
}

export default App;