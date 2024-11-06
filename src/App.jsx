// App.js
import React, { useState, useEffect } from "react";
import { auth, provider } from "./firebase"; // Import Firebase functions
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import "./App.css";
import Ecommerce from "./Ecommerce";

const App = () => {
  const [user, setUser] = useState(null);

  // Google Sign-In function
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      setUser(user);
      console.log("Hello, " + user.displayName);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  // Check the authentication state when the app loads
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user);
        setUser(user);
      } else {
        console.log("No user is signed in");
        setUser(null);
      }
    });

    // Cleanup subscription when component unmounts
    return () => unsubscribe();
  }, []);

  // Google Sign-Out function
  const signOutUser = async () => {
    try {
      await signOut(auth);
      console.log("User signed out.");
      setUser(null);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <div className="App">
      <h1>React Firebase Google Sign-In</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <img src={user.photoURL} alt={user.displayName} />
          <br />
          <button onClick={signOutUser}>Sign Out</button>

          <Ecommerce />
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};

export default App;
