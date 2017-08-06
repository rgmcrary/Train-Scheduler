// Initialize Firebase

var config = {
  apiKey: "AIzaSyBcd7My_AkrA_y0qdWe-YnIk3Z2oAMuC04",
  authDomain: "train-scheduler-b860a.firebaseapp.com",
  databaseURL: "https://train-scheduler-b860a.firebaseio.com",
  projectId: "train-scheduler-b860a",
  storageBucket: "",
  messagingSenderId: "630326143015"
};

firebase.initializeApp(config);

        // FirebaseUI config.

        var uiConfig = {
            signInSuccessUrl: 'trainscheduler.html',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID
            ]
        };

         // Initialize the FirebaseUI Widget using Firebase. 
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
