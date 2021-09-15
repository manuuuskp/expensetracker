import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBKcIZegVst1iViHhuiX1P3R3BIBV7hXew",
  authDomain: "fbauth-de927.firebaseapp.com",
  projectId: "fbauth-de927",
  storageBucket: "fbauth-de927.appspot.com",
  messagingSenderId: "10571904998",
  appId: "1:10571904998:web:23943246c9c88e51250827"
})

export const auth = app.auth()
export default app