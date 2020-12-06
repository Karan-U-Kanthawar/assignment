import React from 'react';
import { HeroPage } from '../Screens/Pages/Hero/HeroPage.js';
import { ProductsPage } from '../Screens/Pages/Products/ProductsPage.js';
import { TokenomicsPage } from '../Screens/Pages/Tokenomics/TokenomicsPage.js';
import '../Screens/HomeScreen.css';
import { RoadmapPage } from './Pages/Roadmap/RoadmapPage.js';
import { FeaturesPage } from './Pages/Features/FeaturesPage.js';
import { TeamPage } from './Pages/Team/TeamPage.js';
import { ContactPage } from './Pages/Contact/ContactPage.js';
import { Container } from 'react-bootstrap';

export const HomeScreen = () => {
  return (
    <>
      <div className='HomeScreenContainer'>
        <HeroPage />
        <ProductsPage />
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
    </>
  );
};
