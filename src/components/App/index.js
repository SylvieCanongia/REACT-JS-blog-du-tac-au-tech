// == Import npm
import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
// import postsData from 'src/data/posts';
import categoriesData from 'src/data/categories';

import { getPostsByCategory } from 'src/utils/selectors';
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import Loader from 'src/components/Loader';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  // articles list
  const [posts, setPosts] = useState([]);
  // tell if loading is in progress
  const [loading, setLoading] = useState(true);

  const loadPosts = () => {
    // setLoading(true);

    axios.get('https://oclock-open-apis.vercel.app/api/blog/posts')
      .then((response) => {
        // handle success
        // console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
        setLoading(false);
      });
  };

  // effect only after the first render of app
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="app">
      <Header categories={categoriesData} />
      {loading && <Loader />}
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
