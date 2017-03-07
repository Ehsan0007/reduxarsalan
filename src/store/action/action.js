
import firebase from 'firebase'
 var config = {
    apiKey: "AIzaSyCMlqXeNC9neoYJmVtnnHyns8e7KrXXEx4",
    authDomain: "login-9e34a.firebaseapp.com",
    databaseURL: "https://login-9e34a.firebaseio.com",
    storageBucket: "login-9e34a.appspot.com",
    messagingSenderId: "47637167713"
  };
  firebase.initializeApp(config);


  var provider = new firebase.auth.GithubAuthProvider();
export function names(ikj) {
    return (dispatch) => {
       console.log(ikj)
        /*return firebase.auth().signInWithPopup(provider).then(function (result) {
            dispatch({
                type:"LoginSuccess",
                result
            })
            
            return console.log("succesfull", result)
        }).catch(function (error) {
          
            var errorCode = error.code;
            var errorMessage = error.message;
         
            var email = error.email;
        return console.log(error.message)
            var credential = error.credential;
      
        });*/
    }
}