<script type="module">
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAb6TECuTZPapNGVG0N1CTV5nIl3r3hx3I",
    authDomain: "chat-55e0e.firebaseapp.com",
    projectId: "chat-55e0e",
    storageBucket: "chat-55e0e.appspot.com",
    messagingSenderId: "255870258654",
    appId: "1:255870258654:web:560d0e4ae21e3108b9614f"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
</script>
