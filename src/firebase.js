import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAX16BTr9i75zmQka0j1FLiF_RquQUA8_Q",
  authDomain: "hive-standup.firebaseapp.com",
  databaseURL: "https://hive-standup.firebaseio.com",
  projectId: "hive-standup",
  storageBucket: "hive-standup.appspot.com",
  messagingSenderId: "924061904476"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

db.collection("users")
  .where("active", "==", true)
  .get()
  .then(querySnapshot => {
    const data = querySnapshot.docs.reduce((acc, doc) => {
      if (doc && doc.exists) {
        return [
          ...acc,
          {
            id: doc.id,
            name: doc.data().name
          }
        ];
      }
      return acc;
    }, []);
    console.log("My data:", data);
  })
  .catch(error => console.log("OOPS I DID IT AGAIN", error));

export const load = () => console.log("Firebase file loaded!");
