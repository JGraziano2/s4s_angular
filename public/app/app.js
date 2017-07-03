(function() {
    'use strict';

    var config = {
        apiKey: "AIzaSyBasD54el1S0oTm-x_r63hKD1NtavqSrZY",
        authDomain: "staged4sale-1700d.firebaseapp.com",
        databaseURL: "https://staged4sale-1700d.firebaseio.com",
        projectId: "staged4sale-1700d",
        storageBucket: "staged4sale-1700d.appspot.com",
        messagingSenderId: "802853226360"
    };
    firebase.initializeApp(config);

    angular
        .module('app', ['ui.router', 'firebase', 'angularModalService']);
})();