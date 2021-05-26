/* eslint-disable import/prefer-default-export */

/**
 * get the posts for a category
 * @param {Array} postsData the array containing posts data
 * @param {String} category the category label
 * @returns all the posts of a category
 */
export const getPostsByCategory = (postsData, category) => {
  let result = postsData;
  if (category !== 'Accueil') {
    result = postsData.filter((post) => post.category === category);
  }
  return result;
};

/**
 * get a post for a slug
 * @param {Array} posts the array into which searching
 * @param {String} slug the slug to look for
 * @returns a post, or undefined
 */
export const getPostBySlug = (posts, slug) => (
  posts.find((post) => post.slug === slug)
);
