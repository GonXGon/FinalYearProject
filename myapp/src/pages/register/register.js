import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/Input/Input";
import { auth, provider } from "../../components/firebaseConfig/firebaseConfig";
import {createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import "./register.css"

export const SignUp = () =>{
  const history = useHistory();
  const initialValues = { email: "", password: "" };
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [googleLoading, setGoogleLoading] = useState(false);
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
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
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

  return (
    <div class="register-container">
      <form className="form">
        <h3>Sign Up</h3>
        <label className="label" >Email Address</label>
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={values.email}
          handleChange={handleChange}
        />
        <label className="label" >Password</label>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          handleChange={handleChange}
        />
        {error && <div className="text-red-600">{error}</div>}
        <button className="button" value="Sign Up" onClick={handleSubmit} loading={loading}>Sign Up</button>
        <div className="h2">
          Already have an account ? <Link to="/login">LogIn Here</Link>
        </div>
      </form>
      <button className="googlebutton-register" value="Continue with Google" onClick={handleGoogleSignIn} loading={googleLoading}>Continue with Google</button>
    </div>
  );
}