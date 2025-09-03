// src/components/ProfileHeader.jsx

import React from 'react';

const ProfileHeader = ({ profile }) => {
  return (
    <header className="profile-header">
      <h1>{profile.fullName}</h1>
      <p>{profile.email}</p>
      <div className="links">
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        
      </div>
    </header>
  );
};

export default ProfileHeader;