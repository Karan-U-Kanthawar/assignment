import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Header.css';
import { HomeScreen } from './HomeScreen';
// //////////////////////////////////////////////////////////

import { HeroPage } from '../Screens/Pages/Hero/HeroPage.js';
import { ProductsPage } from '../Screens/Pages/Products/ProductsPage';
import { TokenomicsPage } from '../Screens/Pages/Tokenomics/TokenomicsPage.js';
import '../Screens/HomeScreen.css';
import { RoadmapPage } from './Pages/Roadmap/RoadmapPage.js';
import { FeaturesPage } from './Pages/Features/FeaturesPage.js';
import { TeamPage } from './Pages/Team/TeamPage.js';
import { ContactPage } from './Pages/Contact/ContactPage.js';

export const Header = () => {
  return (
    <Router>
      <div className='headerContainer'>
        <Container className='headerSubContainer'>
          <div>
            <h2 className='heading'>Cryption Network.</h2>
          </div>
          <div className='navContainer'>
            <div className='navLinks'>Products</div>
            <div className='navLinks'>Tokenomics</div>
            <div className='navLinks'>Roadmap</div>
            <div className='navLinks'>Features</div>
            <div className='navLinks'>Teams</div>
          </div>
        </Container>
        <div className='HomeScreenContainer'>
          <HeroPage />
          <ProductsPage id='products' className='products' />
          <div className='TokenomicsOuterContainer'>
            <TokenomicsPage />
          </div>
          <Container>
            <RoadmapPage />
          </Container>
          <div className='colorContainer'>
            <FeaturesPage />
          </div>
          <TeamPage />
          <div className='colorContainer2'>
            <ContactPage />
          </div>
        </div>
        {/* <HomeScreen /> */}
      </div>
    </Router>
  );
};
