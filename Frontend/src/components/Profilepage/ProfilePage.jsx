import React, { useState, useEffect } from "react";
import { ProfileHeader } from "./ProfileHeader";
import { BookmarksSection } from "../Bookmark/BookmarksSection";
import { EditProfileModal } from "../EditProfile/EditProfileModal";
import "./ProfilePage.css";
import { jwtDecode } from "jwt-decode";

// const mockProfile = {
//   id: '1',
//   name: 'John Doe',
//   email: 'john@example.com',
//   bio: 'Food enthusiast and amateur chef',
//   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
// };

const mockBookmarks = [
  {
    id: "1",
    title: "Italian Pasta Recipe",
    url: "https://example.com/pasta",
    category: "Italian",
    createdAt: "2023-12-20",
  },
  {
    id: "2",
    title: "Sushi Making Guide",
    url: "https://example.com/sushi",
    category: "Japanese",
    createdAt: "2023-12-19",
  },
];

export const ProfilePage = () => {
 
  const [profile, setProfile] = useState({});
  const [bookmarks, setBookmarks] = useState(mockBookmarks);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log("Fetching profile data...");
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        console.log("Token found:", token);
        const payload = jwtDecode(token);
        console.log("Profile data fetched:", payload);
        setProfile({
          name: payload.name,
          email: payload.email,
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchProfile();
  }, []);

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  const handleDeleteBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };
  if(!profile){
    return <div>Loading...</div>
  }

  return (
    <div className='profile-page'>
      <ProfileHeader
        name={profile.name}
        email={profile.email}
        onEditClick={() => setIsEditModalOpen(true)}
      />

      <div className='profile-content'>
        <BookmarksSection
          bookmarks={bookmarks}
          onDelete={handleDeleteBookmark}
        />
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleProfileUpdate}
      />
    </div>
  );
};
