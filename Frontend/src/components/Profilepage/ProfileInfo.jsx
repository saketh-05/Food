import React from 'react';
import './ProfileInfo.css';

export const ProfileInfo = ({ name, email, onEditClick }) => {
  const bio ="Food enthusiast and amateur chef";
  return (
    <div className="profile-info">
      <h1 className="profile-name">{name}</h1>
      <p className="profile-email">{email}</p>
      <p className="profile-bio">{bio}</p>
      <button onClick={onEditClick} className="edit-profile-button">
        Edit Profile
      </button>
    </div>
  );
};
