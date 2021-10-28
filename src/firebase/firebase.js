import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkBctF-6ml3XJp3LA-VAfJ6p6XYUjHzU0",
  authDomain: "streak-4828e.firebaseapp.com",
  projectId: "streak-4828e",
  storageBucket: "streak-4828e.appspot.com",
  messagingSenderId: "644241386261",
  appId: "1:644241386261:web:18de04f1b0694aad92571c",
  measurementId: "G-Q3T0145K8P"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").doc(user.uid).set({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        streak: 0,
        entries: [],
        highscore: 0
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").doc(user.uid).set({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      streak: 0,
      entries: [],
      highscore: 0
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};

const gituser = async (user) => {
    try {
      const query = await db
      .collection('users')
      .where('uid', '==', user?.uid)
      .get();
      let newUser;
      query.forEach(async (doc) => {
        newUser = {
          name: doc.data().name,
          email: doc.data().email,
          uid: doc.data().uid,
          streak: doc.data().streak,
          entries: doc.data().entries,
          highscore: doc.data().highscore
        }
      })
      return newUser
    } catch (error) {
      console.error(error)
    }
}

const setStreak = async (user, num) => {
  try {
    await db
    .collection('users')
    .doc(user.uid)
    .update({
      streak: user.streak + num
    })
  } catch (error) {
    console.error(error)
  }
}

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
  gituser,
  setStreak
};