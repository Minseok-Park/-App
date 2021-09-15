import { firebaseApp } from "./firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
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
}

export default AuthService;
