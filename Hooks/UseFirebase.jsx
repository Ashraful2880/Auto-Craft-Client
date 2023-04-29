import {
  getAuth,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useAlert } from "react-alert";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import iniAuthentication from "../Firebase/Firebase.init";
iniAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const alert = useAlert();
  const router = useRouter();

  // All State Here
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [isloading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState("");

  // Signin With Google

  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const googleUser = { displayName: user.displayName, email: user.email };
        setUser(user);
        updateUser(googleUser);
        setIsLoading(false);
        alert.success("Sign In Successful");
        router.push("/");
      })
      .catch((error) => {
        alert.error(error?.message);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  };

  // Create User With Email & Password

  const handleName = (event) => {
    const name = event.target.value;
    setName(name);
  };
  const handleEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  //<-------------- RegisterUser --------------->

  const handleRegister = (event) => {
    event.preventDefault();
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const newUser = { ...user, displayName: name };
        setUser(newUser);
        updateName();
        saveUser();
        setIsLoading(false);
        alert.success("Registration Successful");
        router.push("/");
      })
      .catch((error) => {
        setIsLoading(false);
        alert.error(error?.message);
      })
      .finally(() => setIsLoading(false));
  };

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        alert.error(error?.message);
      });
  };

  // Handle Sign in Existing User

  const handleSignIn = (event) => {
    event.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setIsLoading(false);
        alert.success("Sign In Successful");
        router.push("/");
      })
      .catch((error) => {
        setIsLoading(false);
        alert.error(error?.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Handle Sign Out

  const handleSignOut = () => {
    setIsLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser("");
        setIsLoading(false);
        alert.success("Logout Successful");
        router.push("/");
      })
      .catch((error) => {
        setIsLoading(false);
        alert.error(error?.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe whether user auth state changed or not

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //<----------- Save User Info To Database ---------->

  const saveUser = () => {
    const dbUser = { displayName: name, email: email };
    fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/users`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(dbUser),
    })
      .then((res) => res.json())
      .then((result) => {});
  };

  //<----------- Update User Info To Database ---------->

  const updateUser = (googleUser) => {
    // const dbUser={displayName:name,email:email}
    fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/users`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(googleUser),
    })
      .then((res) => res.json())
      .then((result) => {});
  };

  // get Admin Data From DB
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${process.env.NEXT_PUBLIC_HOST_URL}/user/${user?.email}`)
        .then((resp) => {
          setAdmin(resp?.data?.admin);
        });
    }
  }, [user?.email]);

  return {
    handleEmail,
    handleName,
    handlePassword,
    handleRegister,
    user,
    handleSignIn,
    handleSignOut,
    googleSignIn,
    isloading,
    admin,
  };
};

export default useFirebase;
