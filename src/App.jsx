import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      {/*<Home />*/}
      <Register/>
      <Footer />
    </div>
  );
};

export default App;
