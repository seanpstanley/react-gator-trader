import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import NavBar from "../Header/NavBar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
        <NavBar />
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
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
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
                </FormGroup>
                <Link to='/Trade'>
                    <Button type = "submit" variant = "primary">
                        Login
                    </Button>
                </Link>
                <p>Don't have an account?</p>
                <Link to='/Register'>
                    Click here to create one.
                </Link>
                {/*<Button block bsSize="large" disabled={!validateForm()} type="submit">
                Login
                </Button>*/}
            </form>
        </div>
    </div>
  );
}