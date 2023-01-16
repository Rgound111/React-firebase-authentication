import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import GoogleButton from "react-google-button"
import { useUserAuth } from "../context/UserAuthcontext";


const Login = () => {
  const { logIn, googleSignIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await logIn(email, password)
      navigate("/home")
    } catch (err) {
      console.log(err.message);
      setError(err.message)
    }
  }

  const handlegoogleSignUp = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className="p-4 box ">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handlesubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => { setEmail(e.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => { setPassword(e.target.value) }} />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton className="g-btn" type="dark" onClick={handlegoogleSignUp} />
        </div>
      </div>

      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to={"/signup"}> Sign up</Link>
      </div>
    </>
  );
};

export default Login;
