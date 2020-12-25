import firebase from 'firebase';



  
  var firebaseConfig = {
    apiKey: "AIzaSyCjhIveFzYBF9u_tkJfiUOEaCCVw9BOzCg",
    authDomain: "register-temp.firebaseapp.com",
    projectId: "register-temp",
    storageBucket: "register-temp.appspot.com",
    messagingSenderId: "1016478177259",
    appId: "1:1016478177259:web:d749f7dbbbf7f7335a2bae"
  };
 
  firebase.initializeApp(firebaseConfig);

  export default firebase;