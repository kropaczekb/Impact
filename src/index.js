import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA0v_NLvhgQUHHJxRjmZVZ9iLq7e-kTcDk",
  authDomain: "my-impact-6acb3.firebaseapp.com",
  projectId: "my-impact-6acb3",
  storageBucket: "my-impact-6acb3.appspot.com",
  messagingSenderId: "260266455933",
  appId: "1:260266455933:web:bef5305078612cd5d19214",
  measurementId: "G-9YWJLNH8JY"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);

export default app
