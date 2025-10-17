import { sendPasswordResetEmail} from "firebase/auth";

import React, { use, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../../Firebase/firebase.init";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { EmailAuthProvider } from "firebase/auth/web-extension";

const Login = () => {
  const {signInUser } = use(AuthContext)
  // console.log(signInUser);
  // console.log(user);
  const location = useLocation()
  const navigate = useNavigate();
  
  
  const emailRef = useRef();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    // console.log(email);
    
    // console.log(pass);
    signInUser(email, pass)
      .then((result) => {
        e.target.reset();
        console.log(result.user);
        navigate(location.state || '/')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleForgetPass = () => {
    // console.log("Forget Password",emailRef.current);
    const email = emailRef.current.value;
    console.log(email);
    sendPasswordResetEmail(auth,email)
    .then(()=>{
        alert('Check YOur email')
    })
    .catch()
    
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <fieldset className="fieldset">
                <h1 className="text-3xl font-bold">Login now!</h1>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div onClick={handleForgetPass}>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <p>
              New to our Website?Please
              <Link className="text-blue-500 underline ml-2" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
