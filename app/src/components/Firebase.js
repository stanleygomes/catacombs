import * as firebase from "firebase";

class Firebase {

    static initialise() {
        try {
            firebase.initializeApp({
                apiKey: 'AIzaSyCSugAHlcMv18cKCfzIA7q9zgOAlftvaL4',
                authDomain: 'bible-30469.firebaseapp.com',
                databaseURL: 'https://bible-30469.firebaseio.com',
                storageBucket: "bible-30469.appspot.com",
                messagingSenderId: "1008791411753"
            });
        } catch (error) {
            // console.log(error.toString());
        }
    }

    static set(url, data) {
        return firebase.database().ref(url).set(data)
    }

    static listen(url, callback) {
        firebase.database().ref(url).on('value', (snapshot) => {
            callback(snapshot.val())
        });
    }
}

module.exports = Firebase;