import React, { useState } from 'react';
import '../public/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="text-center items-center content-center" style={{marginTop: "40px", marginBottom: "60px"}}>
          <p>This project uses <span className="text-white bg-gradient-to-r from-indigo-500 to-purple-700 rounded-full shadow-lg p-1 pr-1.5 pl-1.5">
              React ⚛ + Vite ⚡ and Tailwind 🌬
            </span> on Repl.it with Node.js v16!</p>
          <p>Edit and save to test HMR updates.</p>
          <iframe className="block m-0 m-auto rounded-md" frameBorder="0" width="400px" height="400px" src="https://replit.com/@Moeefa/ReactVite?embed=true&lite=true"></iframe>
        </div>
        <Footer/>
      </div>
    );
  };
};

export default App;
