import React from 'react';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RestaurantList />
      <Footer />
    </div>
  );
}

export default App;
