// == Import npm
import React from 'react';
import postsData from 'src/data/posts';
import categoriesData from 'src/data/categories';

import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header categories={categoriesData} />
    <Posts posts={postsData} />
    <Footer />
  </div>
);

// == Export
export default App;
