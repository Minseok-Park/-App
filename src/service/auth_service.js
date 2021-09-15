import { firebaseApp } from "./firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.firebaseApp = firebaseApp;
  }

  login(providerName) {
    let provider;
    if (providerName === "Google") {
      provider = new GoogleAuthProvider();
    } else if (providerName === "Github") {
      provider = new GithubAuthProvider();
    }

    const auth = getAuth();

    return signInWithPopup(auth, provider);
  }

  onAuthChange(onUserChanged) {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      onUserChanged(user);
    });
  }

  logout() {
    const auth = getAuth();
    return signOut(auth);
  }
}

export default AuthService;
