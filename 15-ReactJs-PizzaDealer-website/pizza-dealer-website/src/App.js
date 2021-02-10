import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData} from './components/Products/data';
import Feature from './components/Feature';

function App() {
  return (
    <Router>
      <GlobalStyle/>
     <Hero></Hero>
     <Products heading={'Choose your favorite'} data={productData}></Products>
     <Feature/>
    </Router>
  );
}

export default App;
