import React from 'react';
import { ProfileAvatar } from './ProfileAvatar';
import { ProfileInfo } from './ProfileInfo';
import './ProfileHeader.css';

export const ProfileHeader = ({ profile, onEditClick }) => {
  return (
    <div className="profile-header">
      <ProfileAvatar avatarUrl={profile.avatar} name={profile.name} />
      <ProfileInfo profile={profile} onEditClick={onEditClick} />
    </div>
  );
};
