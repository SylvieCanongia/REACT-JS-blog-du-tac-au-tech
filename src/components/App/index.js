// == Import npm
import React from 'react';
import posts from 'src/data/posts';
import categories from 'src/data/categories';

import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header categories={categories} />
    <Posts posts={posts} />
    <Footer />
  </div>
);

// == Export
export default App;
