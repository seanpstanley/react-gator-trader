import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel, Alert } from "react-bootstrap";
import "./Login.css";
import NavBar from "../Header/NavBar";
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  let history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // if (email === 'albert@gmail.com' && password === '123456') {
    //   history.push("/Trade")
    // } else {
    //   setShowAlert(true);
    // }
    axios.get("/api/users")
    .then((users) => {
      users.data.forEach(function(user){
        if(email === user.email && password === user.password){
          history.push({
            pathname: '/Trade',
            state: {username: user.username, email: user.email, affiliation: user.affiliation, phoneNumber: user.phoneNumber}
          })
        }else{
          setShowAlert(true);
        }
      })
    });
  }

  function AlertMessage() {
    if(showAlert){
      return (
        <Alert variant="danger" dismissible>
          Incorrect Email or Password
        </Alert>
      )
    }else{
      return(
        null
      );
    }
  }

  return (
    <div>
      {/* <NavBar /> */}
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              required
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>

          <Button type="submit" variant="primary">
            Login
                    </Button>

          <p>Don't have an account?</p>
          <Link onClick={() => props.setView(3)}>
            Click here to create one.
                </Link>
          {/*<Button block bsSize="large" disabled={!validateForm()} type="submit">
                Login
                </Button>*/}
          <br />
          <br />
          <AlertMessage />
        </form>

      </div>
    </div>
  );
}