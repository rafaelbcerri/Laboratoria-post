import firebase from "../../firebase.js";

export function getPosts(userId) {
  return (dispatch) => {
    return firebase.ref("/posts/" + userId).once("value", snap => {
      const posts = snap.val();
      dispatch({type: "GET_POSTS", payload: {posts: posts, userId: userId}})
    })
    .catch((error) => {
      dispatch({type: "ERROR", payload: error});
    });
  }
}

export function createPost(userId, post) {
  let postList = firebase.ref("/posts/" + userId).push();
  return (dispatch) => {
    postList.set(post)
    .then(() => {
      var postId = postList.key;
      dispatch({type: "CREATE_POST", payload: {post: post, postId: postId}})
    });
  }
}

export function deletePost(userId, postId, posts) {
  return (dispatch) => {
    firebase.ref("/posts/" + userId + "/" + postId).remove();
    let postList = {...posts};
    delete postList[postId];
    dispatch({type: "DELETE_POST", payload: postList})
  }
}

export function handleNewPostTextEdition(text) {
  return (dispatch) => {
    dispatch({type: "EDIT_NEW_POST_TEXT", payload: text})
  }
}

export function handleNewPostTypeEdition(type) {
  return (dispatch) => {
    dispatch({type: "EDIT_NEW_POST_TYPE", payload: type})
  }
}

export function handlePostEditionText(text, postID, posts) {
  return (dispatch) => {
    let newPosts = {...posts}
    let newPostsList = postEdition(postID, {text: text, type: null}, newPosts);
    dispatch({type: "EDIT_POST", payload: newPostsList})
  }
}

export function handlePostEditionType(type, postID, posts) {
  return (dispatch) => {
    let newPosts = {...posts}
    let newPostsList = postEdition(postID, {type: type, text: null}, newPosts);
    dispatch({type: "EDIT_POST", payload: newPostsList})
  }
}

export function handleFilterChange(userId, type) {
  return (dispatch) => {
    return firebase.ref("/posts/" + userId).once("value", snap => {
      let posts = snap.val();
      if (type === "friends") {
        posts = filterPostsByType(posts, type);
      }
      dispatch({type: "GET_POSTS", payload: {posts: posts, userId: userId}})
    })
    .catch((error) => {
      dispatch({type: "ERROR", payload: error});
    });
  }
}

export function handlePostEdit(postId, posts) {
  return (dispatch) => {
    let newPosts = {...posts}
    let newPostsList = changePostToEdit(postId, newPosts);
    dispatch({type: "EDIT_POST", payload: newPostsList})
  }
}

export function handlePostEdition(userId, postId, posts) {
  return (dispatch) => {
    const newPosts = {...posts}
    const newPostsList = postEditionComplete(postId, newPosts);
    const postListRef = firebase.ref("/posts/" + userId);
    postListRef.set(newPostsList)
    .then(() => {
      dispatch({type: "EDIT_POST", payload: newPostsList})
    });
  }
}

export function handleTextError() {
  return (dispatch) => {
    dispatch({type: "ERROR", payload: {error: "text"}})
  }
}

function changePostToEdit(postId,posts) {
  for (var key in posts) {
    if (posts.hasOwnProperty(key)) {
      if (key == postId) {
        posts[key].edit = true;
      }
    }
  }
  return posts;
}

function postEdition(postId, editedPost, posts) {
  for (var key in posts) {
    if (posts.hasOwnProperty(key)) {
      if (key == postId) {
        if (editedPost.text) {
          posts[key].text = editedPost.text;
        } else {
          posts[key].type = editedPost.type;
        }
      }
    }
  }
  return posts;
}

function postEditionComplete(postId, posts) {
  for (var key in posts) {
    if (posts.hasOwnProperty(key)) {
      if (key == postId) {
        posts[key].edit = null;
      }
    }
  }
  return posts;
}

function filterPostsByType(posts, type) {
  let postList = []
  for (var key in posts) {
    if (posts.hasOwnProperty(key)) {
      if (posts[key].type == type) {
        postList.push(posts[key])
      }
    }
  }
  return postList;
}
