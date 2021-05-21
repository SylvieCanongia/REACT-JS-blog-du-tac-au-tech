// == Import npm
import React from 'react';
import Header from '../Header';
import Posts from '../Posts';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Posts />
    <div>Footer</div>
  </div>
);

// == Export
export default App;
