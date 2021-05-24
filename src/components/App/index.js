// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
import postsData from 'src/data/posts';
import categoriesData from 'src/data/categories';

import { getPostsByCategory } from 'src/utils/selectors';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header categories={categoriesData} />
    {categoriesData.map((category) => {
      const postsByCategory = getPostsByCategory(postsData, category.label);

      return (
        <Route exact path={category.route} key={category.label}>
          <Posts posts={postsByCategory} />
        </Route>
      );
    })}
    <Footer />
  </div>
);

// == Export
export default App;
