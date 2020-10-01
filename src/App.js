import React from 'react';
import './App.css';

//Components
import Header from './components/Header';
import Slider from './components/Slider';
import OnSale from './components/OnSale';
import FeauredProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <OnSale/>
      <FeauredProducts/>
      <Footer/>
    </div>
  );
}

export default App;
