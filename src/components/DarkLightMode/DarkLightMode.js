import "./style.css";
import React from "react";
import { useState, useEffect } from "react";
// className={`toggle ${darkMode ? 'dark-mode toggle-active' : ''}`}
// onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
export default function DarkLightMode(props) {
const setDarkMode=props.setDarkMode;
const darkMode=props.darkMode;


  useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
    
    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if( darkMode === true ) {
      toggle.classList.add('toggle-active')
    } else {
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])
  return (
    <header>
    <div
      id="toggle"
      onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
    >
      <div className="toggle-inner"/>
    </div>
  </header>
  
  );
}