const defaultState = {
  email: "",
  password: "",
  userID: null,
  error: null
};

export default function reducer(state=defaultState, action) {
  switch (action.type) {
    case "USER_FOUND": {
      return {...state, userID: action.payload, error: null}
    }
    case "ERROR": {
      return {
        ...state,
        userID: null,
        error: action.payload.error,
        email: "",
        password: ""}
    }
    case "USER_EMAIL": {
      return {...state, email: action.payload}
    }
    case "USER_PASSWORD": {
      return {...state, password: action.payload}
    }
  }

  return state;
}
