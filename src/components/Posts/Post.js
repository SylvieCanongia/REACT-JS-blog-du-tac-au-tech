/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

function createMarkup(htmlContent) {
  return {
    __html: DOMPurify.sanitize(htmlContent),
  };
}

const Post = ({
  category,
  title,
  excerpt,
  slug,
}) => (

    // update of the url into a link for displaying single articles
    <Link to={`/post/${slug}`}>
      <article className="posts__single">
        <h2 className="posts_single__title">{title}</h2>
        <div className="posts__single__category">{category}</div>
        <p className="posts__single__excerpt" dangerouslySetInnerHTML={createMarkup(excerpt)} />
      </article>
    </Link>
);

Post.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Post;
