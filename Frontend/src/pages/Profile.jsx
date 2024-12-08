import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import '../components/Profilepage/Profile.css';
import '../components/Header/Header.css';
import { ProfilePage } from '../components/Profilepage/ProfilePage';

function Profile() {
  return (
      <div className="app">
        <Header />
        <div className="app__content">
          <Navbar />
          <main className="app__main">
             <ProfilePage />
          </main>
        </div>
      </div>
  );
}

export default Profile;
