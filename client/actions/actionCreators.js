/**
 * Created by koyexes on 02/10/2017.
 */
const increment = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
};

const addComment = (postId, author, comment) => {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
};

const removeComment = (postId, i) => {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
};

export { increment, addComment, removeComment };