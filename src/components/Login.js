import Button from "@material-ui/core/Button";
import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { auth, provider } from "../Firebase/FirebaseConfig";
import { SET_USER } from "../reducer/ActionTypes";
import "../styles/Login.css";
// import { actionTypes } from "./reducer";
// import { useStateValue } from "./StateProvider";

const Login = () => {
  // const [state, dispatch] = useStateValue();
  const { dispatch } = useContext(UserContext);

  const signIn = () => {
    //signIn
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user?.email);
        dispatch({
          type: SET_USER,
          payload: result.user,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Login
      </Button>
    </div>
  );
};

export default Login;
