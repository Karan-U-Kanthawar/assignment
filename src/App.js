import React from 'react';
import { Footer } from './Components/Footer.js';
import { Header } from './Components/Header.js';
import { HomeScreen } from './Components/Screens/HomeScreen.js';

const App = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <Footer />
    </>
  );
};

export default App;
