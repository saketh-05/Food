import React from 'react';
import { Camera } from 'lucide-react';
import './ProfileAvatar.css';

export const ProfileAvatar = ({ avatarUrl, name }) => {
  return (
    <div className="profile-avatar-container">
      <img src={avatarUrl} alt={name} className="profile-avatar" />
      <button className="avatar-upload-button">
        <Camera size={20} />
      </button>
    </div>
  );
};
