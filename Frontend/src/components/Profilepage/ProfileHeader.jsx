import React from 'react';
import { ProfileAvatar } from './ProfileAvatar';
import { ProfileInfo } from './ProfileInfo';
import './ProfileHeader.css';

export const ProfileHeader = ({ profile, onEditClick }) => {
  const avatar = profile.avatar ? profile.avatar : "https://api.dicebear.com/7.x/avataaars/svg?seed=John";
  return (
    <div className="profile-header">
      <ProfileAvatar avatarUrl={avatar} name={profile.name} />
      <ProfileInfo profile={profile} onEditClick={onEditClick} />
    </div>
  );
};
