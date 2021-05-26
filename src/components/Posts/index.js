import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

import './posts.scss';

const Posts = ({ posts, categoryLabel }) => (
  <main className="posts">
    <h1 className="posts__title">{categoryLabel === 'Accueil' ? 'Du tac au tech' : categoryLabel }</h1>
    <section className="posts__wrapper">
      {posts.map((post) => (
        <Post
          key={post.id}
          {...post}
        />
      ))}
    </section>
  </main>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  category: PropTypes.string.isRequired,
};

export default Posts;
