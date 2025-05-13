import React from 'react';
import '../ProfileCard.css';

const ProfileCard = ({ name, title, bio, imageUrl, coverImg, darkMode, followers, following }) => {
  return (
    <div className={`profile-card ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <span className="shimmer"></span>
      
      {/* Cover Image */}
      <div className="cover-image-container">
        <img
          src={coverImg}
          alt="Cover"
          className="cover-image"
        />
       
        {/* Menu Button */}
        <button className="menu-button">
          <div className="menu-dots">
            <div className="menu-dot"></div>
            <div className="menu-dot"></div>
            <div className="menu-dot"></div>
          </div>
        </button>
      </div>
     
      {/* Profile Image - Overlapping */}
      <div className="profile-image-container">
        <div className={`profile-image-wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          <img
            src={imageUrl}
            alt={`${name}'s profile`}
            className="profile-image"
          />
        </div>
      </div>
     
      {/* Profile Information */}
      <div className="profile-info">
        {/* Name and Title */}
        <h2 className="profile-name">{name}</h2>
        <p className={`profile-title ${darkMode ? 'dark-mode' : 'light-mode'}`}>{title}</p>
       
        {/* Stats */}
        <div className="stats-container">
          <div className="stat-item">
            <p className={`stat-value ${darkMode ? 'dark-mode' : 'light-mode'}`}>{followers}</p>
            <p className={`stat-label ${darkMode ? 'dark-mode' : 'light-mode'}`}>Followers</p>
          </div>
          <div className="stat-item">
            <p className={`stat-value ${darkMode ? 'dark-mode' : 'light-mode'}`}>{following}</p>
            <p className={`stat-label ${darkMode ? 'dark-mode' : 'light-mode'}`}>Following</p>
          </div>
        </div>
       
        {/* Follow Button */}
        <button className={`follow-button ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          Follow
        </button>
       
        {/* Bio */}
        <p className={`profile-bio ${darkMode ? 'dark-mode' : 'light-mode'}`}>{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;