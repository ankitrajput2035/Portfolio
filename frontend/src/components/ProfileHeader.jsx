// src/components/ProfileHeader.jsx

import React from 'react';

const ProfileHeader = ({ profile }) => {
  return (
    <header className="profile-header">
      <h1>{profile?.fullName || "No name"}</h1>
      <p>{profile?.email || "No Email"}</p>
       <div className="links">
        {profile.links.github && (
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
        {profile.links.linkedin && (
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        )}
      </div>
    </header>
  );
};

export default ProfileHeader;