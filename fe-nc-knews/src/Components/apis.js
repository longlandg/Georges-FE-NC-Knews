import Axios from "axios";

export const fetchAllArticles = async sortBy => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles?${sortBy}`
  );
  // console.log("hello im in the function", data.articles);
  return data.articles;
};

export const fetchUserInfo = async username => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/users/${username}`
  );
  // console.log("hello im in the fetchUserInfo function", data.user);
  return data.user;
};

export const updateArticleVotes = (direction, article_id) => {
  return Axios.patch(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: direction }
  );
};

export const fetchUserArticles = async username => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles?author=${username}`
  );
  // console.log("hello im in the userArticles function", data.articles);
  return data.articles;
};

export const postArticle = newarticle => {
  return Axios.post(
    `https://longlandncknews.herokuapp.com/api/articles`,
    newarticle
  );
};

export const postComment = (newcomment, article_id) => {
  return Axios.post(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}/comments`,
    newcomment
  );
};

export const fetchSingleArticle = async article_id => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}`
  );

  return data.article;
};

export const fetchAllCommentsByArticleId = async article_id => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}/comments`
  );

  return data.comments;
};

export const deleteComment = comments_id => {
  return Axios.delete(
    `https://longlandncknews.herokuapp.com/api/comments/${comments_id}`
  );
};

export const deleteArticle = article_id => {
  return Axios.delete(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}`
  );
};
