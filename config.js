import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBfE3XK82Rkend2ahR3DyzQVJ6_honep0M",
  authDomain: "schoolattendance-97fa9.firebaseapp.com",
  projectId: "schoolattendance-97fa9",
  storageBucket: "schoolattendance-97fa9.appspot.com",
  messagingSenderId: "318472083004",
  appId: "1:318472083004:web:70d173a77ff910c2ab9539"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


  export default firebase.database()
 

  