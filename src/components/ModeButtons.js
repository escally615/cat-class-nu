import React from 'react';
import '../styling/main.css'; 
import { FaMoon, FaSun, FaPlus, FaMinus } from 'react-icons/fa';

function ModeButtons() {
  return (
    <>
      <button type="button" className="modebutton" onClick={changeToDark}>
        <FaMoon size={24} title="Dark Mode" />
      </button>
      <noscript>JavaScript is not supported for you. This is a button that changes the screen to dark mode.</noscript>

      <button type="button" className="modebutton" onClick={changeToLight}>
        <FaSun size={24} title="Light Mode" />
      </button>
      <noscript>JavaScript is not supported for you. This is a button that changes the screen to light mode.</noscript>

      <button type="button" className="sizebutton" onClick={increaseSize}>
        <FaPlus size={24} title="Increase Font Size" />
      </button>
      <noscript>JavaScript is not supported for you. This is a button that increases the size of the font.</noscript>

      <button type="button" className="sizebutton" onClick={decreaseSize}>
        <FaMinus size={24} title="Decrease Font Size" />
      </button>
      <noscript>JavaScript is not supported for you. This is a button that decreases the size of the font.</noscript>
    </>
  );
}

export default ModeButtons;

function changeToDark() {
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
}

function changeToLight() {
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');
}

function increaseSize() {
  document.body.style.fontSize = 'larger';
}

function decreaseSize() {
  document.body.style.fontSize = 'smaller';
}
