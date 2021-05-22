import React from 'react';
import PropTypes from 'prop-types';

const Post = ({
  id,
  category,
  title,
  excerpt }) => (
    <div className="posts__card">
      <h2 className="posts_card__title">{title}</h2>
      <div className="posts__card__category">{category}</div>
      <p className="posts__card__excerpt">{excerpt}</p>
    </div>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
