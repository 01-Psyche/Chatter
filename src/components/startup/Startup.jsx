import React from "react";

import logoWhite from "../../icons/main-logo.png";

const Startup = () => {
  const menuClick = () => {
    const button = document.querySelector(".menu");
    button.classList.toggle("opened");
    button.setAttribute("aria-expanded", button.classList.contains("opened"));
  };

  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="header-title">
            <img
              src={logoWhite}
              alt="Chatter logo"
              className="header-title-img"
            />
            <h1 className="header-h1">Chatter</h1>
          </div>

          <button className="menu" onClick={menuClick} aria-label="Main Menu">
            <svg width="20" height="20" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="hero-section">
        <div className="welcome">
          <h3 className="welcome-h3">Step into the world of Chats</h3>
          <h4 className="welcome-h4">Where your words come Alive!</h4>
        </div>

        {/* Iphone Section */}
        <div className="iphone-main">
          <div className="iphone-body">
            <div className="screen">
              <i className="dynamic-island"></i>
            </div>
            <i className="iphone-button button-1"></i>
            <i className="iphone-button button-2"></i>
            <i className="iphone-button button-3"></i>
            <i className="button-4"></i>
          </div>
        </div>

        <div className="craft">
          <h3 className="hero-subheader">
            Craft Your Conversations, Your Way: ✏️🌈
          </h3>
          <h4 className="craft-h3 h3-text">
            Chatter is more than just a messaging app; it's a canvas for your
            thoughts and expressions🚀🌟
          </h4>
        </div>
      </div>
    </>
  );
};

export default Startup;
