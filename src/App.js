import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Product, Profile } from './components/cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Product 
          imageurl={'https://image.flaticon.com/icons/png/128/74/74472.png'}
          imagetext="Profile"
          producttitle="Demo"
          price="$ 9999.99"
        ></Product>
        <Profile 
          imageurl={'https://image.flaticon.com/icons/png/128/74/74472.png'}
          imagetext="Profile"
          firstname="John"
          lastname="Doe"
          email="jd@test.org"
          jobtitle="Copywriter"
          employer="Marketing"
        ></Profile>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
