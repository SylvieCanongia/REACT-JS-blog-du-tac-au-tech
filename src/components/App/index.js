// == Import npm
import React from 'react';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Posts />
    <Footer />
  </div>
);

// == Export
export default App;
