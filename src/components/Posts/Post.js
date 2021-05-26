import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

function createMarkup(htmlContent) {
  return {
    __html: DOMPurify.sanitize(htmlContent),
  };
}

const Post = ({
  category,
  title,
  excerpt }) => (
    <article className="posts__single">
      <h2 className="posts_single__title">{title}</h2>
      <div className="posts__single__category">{category}</div>
      <p className="posts__single__excerpt" dangerouslySetInnerHTML={createMarkup(excerpt)} />
    </article>
);

Post.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
