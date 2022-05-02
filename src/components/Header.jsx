import React from 'react';
import '../../public/App.css';
import ReactTypingEffect from 'react-typing-effect';

class Header extends React.Component {
  render() {
    return (
      <header className="fixed text-white text-center top-0 w-full pt-1 h-8 bg-gray-900">
        <ReactTypingEffect
          speed="200"
          eraseSpeed="200"
          text={["React + Vite and Tailwind!", "⚛ + ⚡ and 🌬!"]}
        />
      </header>
    );
  };
};

export default Header;