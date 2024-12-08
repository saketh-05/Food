import React, { useState } from 'react';
import './EditProfileModal.css';

export function EditProfileModal(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement logic to update user profile
    };

    return (
        <div className="edit-profile-modal">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Bio:
                    <textarea value={bio} onChange={handleBioChange} />
                </label>
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
