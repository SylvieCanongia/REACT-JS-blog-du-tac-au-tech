// == Import npm
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
// import postsData from 'src/data/posts';
import categoriesData from 'src/data/categories';

import { getPostsByCategory } from 'src/utils/selectors';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import NotFound from '../NotFound';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPosts = () => {
    setLoading(true);
    console.log('C\'est le moment de charger les articles');

    axios.get('https://oclock-open-apis.vercel.app/api/blog/posts')
      .then((response) => {
        // handle success
        // console.log('.then');
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        // handle error
        // console.log('.catch');
        console.log(error);
      })
      .finally(() => {
        // always executed
        // console.log('finally');
        setLoading(false);
      });
    console.log('Après l\'envoi de la requête');

    // console.log(loading);
  };
  return (
    <div className="app">
      <Header categories={categoriesData} />
      <button type="button" onClick={loadPosts}>Charger les articles</button>
      {loading && <div>Chargement en cours...</div>}
      <Switch>
        {categoriesData.map((category) => (
          <Route exact path={category.route} key={category.label}>
            <Posts posts={getPostsByCategory(posts, category.label)} />
          </Route>
        ))}
        <Redirect from="/jquery" to="/autre" />
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
