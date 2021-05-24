/* eslint-disable import/prefer-default-export */
//  get the posts for a category

export const getPostsByCategory = (postsData, category) => {
  let result = postsData;
  if (category !== 'Accueil') {
    result = postsData.filter((post) => post.category === category);
  }
  return result;
};
