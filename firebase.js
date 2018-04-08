import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDzw8_LZn4AgtLi5zMqgi6B2tGjciTNzlc",
  authDomain: "post-example.firebaseapp.com",
  databaseURL: "https://post-example.firebaseio.com",
  projectId: "post-example",
};

firebase.initializeApp(config);

export default firebase.database();
