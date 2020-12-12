import React from 'react';
import { Container } from 'react-bootstrap';
import './MyWebsite.css';

import { HeroPage } from './Pages/Hero/HeroPage.js';
import { ProductsPage } from './Pages/Products/ProductsPage';
import { TokenomicsPage } from './Pages/Tokenomics/TokenomicsPage.js';
import '../Screens/HomeScreen.css';
import { RoadmapPage } from './Pages/Roadmap/RoadmapPage.js';
import { FeaturesPage } from './Pages/Features/FeaturesPage.js';
import { TeamPage } from './Pages/Team/TeamPage.js';
import { ContactPage } from './Pages/Contact/ContactPage.js';
import { Footer } from './Footer.js';
import { Navbars } from '../Navbar/Navbars.js';

export const MyWebsite = () => {
  return (
    <div className='FullContainer'>
      <Navbars />
      {/* <Container className='headerSubContainer'>
        <div>
          <h2 className='heading'>Cryption Network.</h2>
        </div>
        <div className='navContainer'>
          <div className='navLinks'>
            <a href='#products'>Products</a>
          </div>
          <div className='navLinks'>
            <a href='#tokenomics'>Tokenomics</a>
          </div>
          <div className='navLinks'>
            <a href='#roadmap'>Roadmap</a>
          </div>
          <div className='navLinks'>
            <a href='#features'>Features</a>
          </div>
          <div className='navLinks'>
            <a href='#team'>Teams</a>
          </div>
        </div>
      </Container> */}
      <div className='HomeScreenContainer'>
        <HeroPage />
        <div id='products'>
          <ProductsPage className='products' />
        </div>
        <br />
        <br />
        <br />
        <Container id='tokenomics' className='TokenomicsOuterContainer'>
          <TokenomicsPage />
        </Container>
        <Container id='roadmap'>
          <RoadmapPage />
        </Container>
        <div id='features' className='colorContainer'>
          <FeaturesPage />
        </div>
        <div id='team'>
          <TeamPage />
        </div>
        <div className='colorContainer2'>
          <div id='contact'>
            <ContactPage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
