import React from 'react';
import PropTypes from 'prop-types';

const Post = ({
  id,
  category,
  title,
  excerpt }) => (
    <article className="posts__single">
      <h2 className="posts_single__title">{title}</h2>
      <div className="posts__single__category">{category}</div>
      <p className="posts__single__excerpt">{excerpt}</p>
    </article>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
