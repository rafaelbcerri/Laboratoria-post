import firebase from '../../firebase.js';

export function handleEmailChange(email) {
  return (dispatch) => {
    dispatch({type: "USER_EMAIL", payload: email})
  }
}

export function handlePasswordChange(password) {
  return (dispatch) => {
    dispatch({type: "USER_PASSWORD", payload: password})
  }
}

export function handleEmailError() {
  return (dispatch) => {
    dispatch({type: "ERROR", payload: {error: "email"}})
  }
}

export function handlePasswordError() {
  return (dispatch) => {
    dispatch({type: "ERROR", payload: {error: "password"}})
  }
}

export function userLogin(email, password) {
  return (dispatch) => {
    return firebase.ref('/users').once('value', snap => {
      const users = snap.val();
      const foundUser = searchUser(users, email, password);
      if (foundUser) {
        dispatch({type: "USER_FOUND", payload: foundUser})
        window.location.replace("/feed?userId=" + foundUser);
      } else {
        dispatch({type: "ERROR", payload: {error: "not_found"}})
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({type: "ERROR", payload: error});
    });
  }
}

function searchUser(users, email, password) {
  for (var key in users) {
    if (users.hasOwnProperty(key)) {
      let correctEmail = users[key].email == email;
      let correctPassword = users[key].password == password;
      if (correctEmail && correctPassword) {
        return key;
      } else {
        return null;
      }
    }
  }
}
