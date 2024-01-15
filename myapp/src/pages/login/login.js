import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/Input/Input";
import { auth, provider } from "../../components/firebaseConfig/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import "./login.css"


export const Login = () =>{
  const history = useHistory();
  const initialValues = { email: "", password: "" };
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      return setError("Please fill in all fields");
    }
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };


  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      await signInWithPopup(auth, provider);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
    setGoogleLoading(false);
  };


  const handlePassword = async () => {
    setMessage(null);
    setError(null);
    const { email } = values;
    if (!email) {
      return setError("Please enter an email first");
    }
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth,email);
      setMessage("Successfully sent email reset link");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div class="login-container">
        <form className="op-container">
            <h3>Sign In</h3>
            <label className="label" >Email Address</label>
            <Input
              name="email"
              type="email"
              placeholder="Email address"
              label="Email address"
              value={values.email}
              handleChange={handleChange}
            />
            <label className="label" >Password</label>
            <div className="space-y-3">
              <Input
                name="password"
                type="password"
                placeholder="Enter password.."
                label="Password"
                value={values.password}
                handleChange={handleChange}
              />
              <div onClick={handlePassword}>Forgot password?</div>
            </div>
            {message && <div className="text-primary font-semibold">{message}</div>}
            {error && <div className="text-red-600">{error}</div>}
            <button className="button" value="Sign In" onClick={handleSubmit} loading={loading}>Sign In</button>
            <div>
              Want to become a member? <Link to="/sign-up">Sign Up</Link>
            </div>
        </form>
        <button className="googlebutton-login" value="Continue with Google" onClick={handleGoogleSignIn} loading={googleLoading}>Continue with Google</button>
    </div>
  );
}