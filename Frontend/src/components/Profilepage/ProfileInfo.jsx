import React from 'react';
import './ProfileInfo.css';

export const ProfileInfo = ({ profile, onEditClick }) => {
  const bio = profile.bio ? profile.bio : "Food enthusiast and amateur chef";
  return (
    <div className="profile-info">
      <h1 className="profile-name">{profile.name}</h1>
      <p className="profile-email">{profile.email}</p>
      <p className="profile-bio">{bio}</p>
      <button onClick={onEditClick} className="edit-profile-button">
        Edit Profile
      </button>
    </div>
  );
};
