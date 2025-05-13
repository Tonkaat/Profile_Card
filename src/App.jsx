import React, { useState, useEffect } from 'react';
import ProfileCard from './assets/ProfileCard';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [fadeActive, setFadeActive] = useState(false);
 
  // Sample profile data with anime character names
  const profiles = [
    {
      id: 1,
      name: "Phoebe",
      title: "Golden Princess",
      bio: "I love fishing 🎣💙💛",
      imageUrl: "./public/img/Phoebe.jpg",
      coverImg: "./public/img/Phoebe-cover.jpg",
      followers: "212k",
      following: "2"
    },
    {
      id: 2,
      name: "Nahida",
      title: "God of Wisdom",
      bio: "Don't underestimate my power 😉",
      imageUrl: "./public/img/Nahida.jpg",
      coverImg: "./public/img/Nahida-cover.jpg",
      followers: "143k",
      following: "567"
    },
    {
      id: 3,
      name: "Firefly",
      title: "Dream Soldier",
      bio: "Caelus is life 🗑️",
      imageUrl: "./public/img/Firefly.jpg",
      coverImg: "./public/img/Firefly-cover.jpg",
      followers: "1.2m",
      following: "258"
    }
  ];
 
  const toggleDarkMode = () => {
    // Activate fade transition
    setFadeActive(true);
    
    // Apply theme change after a short delay to create smooth transition
    setTimeout(() => {
      setDarkMode(!darkMode);
      
      // Deactivate fade transition
      setTimeout(() => {
        setFadeActive(false);
      }, 400);
    }, 100);
  };

  // Ensure background images are preloaded for smooth transitions
  useEffect(() => {
    const lightBg = new Image();
    lightBg.src = './public/img/day.webp';
    
    const darkBg = new Image();
    darkBg.src = './public/img/night.webp';
  }, []);
 
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Fade transition overlay */}
      <div className={`theme-transition-fade ${fadeActive ? 'active' : ''}`}></div>
      
      <div className="content-wrapper">
        {/* Dark Mode Toggle */}
        <div className="toggle-container">
          <button
            onClick={toggleDarkMode}
            className={`toggle-button ${darkMode ? 'dark-mode' : 'light-mode'}`}
          >
            Switch to {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
       
        {/* Profile Cards */}
        <div className="profiles-container">
          {profiles.map(profile => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              title={profile.title}
              bio={profile.bio}
              imageUrl={profile.imageUrl}
              coverImg={profile.coverImg}
              darkMode={darkMode}
              followers={profile.followers}
              following={profile.following}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;