import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData, productDataTwo} from './components/Products/data';
import Feature from './components/Feature';

function App() {
  return (
    <Router>
      <GlobalStyle/>
     <Hero></Hero>
     <Products heading={'Choose your favorite'} data={productData}></Products>
     <Feature/>
     <Products heading={'Sweet Treats for You'} data={productDataTwo}></Products>
    </Router>
  );
}

export default App;
