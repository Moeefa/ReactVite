import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="fixed bottom-0 left-0 w-full h-10 text-white text-center bg-gray-900">
        <p>
          Made with ❤ by <a href="//github.com/Moeefa" className="text-blue-400 visited:text-purple-600">Moeefa</a>
        </p>
      </footer>
    );
  };
};

export default Footer;