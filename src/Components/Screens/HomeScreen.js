import React from 'react';
import { HeroPage } from '../Screens/Pages/Hero/HeroPage.js';
import { ProductsPage } from '../Screens/Pages/Products/ProductsPage.js';
import { TokenomicsPage } from '../Screens/Pages/Tokenomics/TokenomicsPage.js';
import '../Screens/HomeScreen.css';

export const HomeScreen = () => {
  return (
    <>
      <div className='HomeScreenContainer'>
        <HeroPage />
        <ProductsPage />
        <TokenomicsPage />
      </div>
    </>
  );
};
