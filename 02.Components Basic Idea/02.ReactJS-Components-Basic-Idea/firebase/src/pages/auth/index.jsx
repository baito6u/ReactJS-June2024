import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./styles.css"

export const Auth = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userId: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/tracker")
  };

  return (
    <div className="login-page">
      <p>Sign In With Google</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In
      </button>
    </div>
  );
};
