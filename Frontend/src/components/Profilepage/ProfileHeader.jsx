import React from 'react';
import { ProfileAvatar } from './ProfileAvatar';
import { ProfileInfo } from './ProfileInfo';
import './ProfileHeader.css';

export const ProfileHeader = ({ name, email, onEditClick }) => {
  const avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John";
  return (
    <div className="profile-header">
      <ProfileAvatar avatar={avatar} name={name} />
      <ProfileInfo name={name} email={email} onEditClick={onEditClick} />
    </div>
  );
};
