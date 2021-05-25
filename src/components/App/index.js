// == Import npm
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import postsData from 'src/data/posts';
import categoriesData from 'src/data/categories';

import { getPostsByCategory } from 'src/utils/selectors';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import NotFound from '../NotFound';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header categories={categoriesData} />

    <Switch>
      {categoriesData.map((category) => {
        const postsByCategory = getPostsByCategory(postsData, category.label);

        return (
          <Route exact path={category.route} key={category.label}>
            <Posts posts={postsByCategory} />
          </Route>
        );
      })}
      {/* Test redirection */}
      {/* <Redirect from="/jquery" to="/autre" /> */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
