import React, { useState } from 'react';
import { ProfileHeader } from './ProfileHeader';
import { BookmarksSection } from '../Bookmark/BookmarksSection';
import { EditProfileModal } from '../EditProfile/EditProfileModal';
import './ProfilePage.css';

const mockProfile = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  bio: 'Food enthusiast and amateur chef',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
};

const mockBookmarks = [
  {
    id: '1',
    title: 'Italian Pasta Recipe',
    url: 'https://example.com/pasta',
    category: 'Italian',
    createdAt: '2023-12-20',
  },
  {
    id: '2',
    title: 'Sushi Making Guide',
    url: 'https://example.com/sushi',
    category: 'Japanese',
    createdAt: '2023-12-19',
  },
];

export const ProfilePage = () => {
  const [profile, setProfile] = useState(mockProfile);
  const [bookmarks, setBookmarks] = useState(mockBookmarks);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  const handleDeleteBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  return (
    <div className="profile-page">
      <ProfileHeader profile={profile} onEditClick={() => setIsEditModalOpen(true)} />

      <div className="profile-content">
        <BookmarksSection bookmarks={bookmarks} onDelete={handleDeleteBookmark} />
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSave={handleProfileUpdate}
      />
    </div>
  );
};
