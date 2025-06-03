import React, { useState } from "react";
import "./EditProfileModal.css";

export function EditProfileModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

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
    <div className='edit-profile-modal'>
      <h2 className="modal-title">Edit Profile</h2>
      <form onSubmit={handleSubmit} className='form-group'>
        <label className='form-label'>
          Name:
          <input
            type='text'
            value={name}
            onChange={handleNameChange}
            className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
          Email:
          <input
            type='email'
            value={email}
            onChange={handleEmailChange}
            className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
          Bio:
          <textarea
            value={bio}
            onChange={handleBioChange}
            className='form-textarea'
          />
        </label>
        <br />
        <div className='form-actions'>
          <button type='submit' className='btn-save'>
            Save
          </button>
          <button type='button' className='btn-cancel'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
