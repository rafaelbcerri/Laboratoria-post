const defaultState = {
  userId: null,
  error: null,
  posts: null,
  newPost: {text: "", type: "public"}
};

export default function reducer(state=defaultState, action) {
  switch (action.type) {
    case "GET_POSTS": {
      return {...state, posts: action.payload.posts, userId: action.payload.userId}
    }
    case "CREATE_POST": {
      let newPostList = {...state.posts};
      let postId = action.payload.postId;
      newPostList[postId] = action.payload.post;
      return {...state, newPost: defaultState.newPost, posts: newPostList}
    }
    case "EDIT_POST": {
      return {...state, posts: action.payload}
    }
    case "DELETE_POST": {
      return {...state, posts: action.payload}
    }
    case "EDIT_NEW_POST_TEXT": {
      return {...state, newPost: {...state.newPost, text: action.payload}}
    }
    case "EDIT_NEW_POST_TYPE": {
      return {...state, newPost: {...state.newPost, type: action.payload}}
    }
  }
  return state;
}
