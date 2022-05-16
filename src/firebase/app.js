
import credentials from "./credentials";
import Firebase from "firebase/compat";

export const App =Firebase.initializeApp(credentials.config)
