import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import NavBar from "../Header/NavBar";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0 && username >0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
        <NavBar />
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup bsSize="large">
                <FormLabel>Username</FormLabel>
                <FormControl
                    autoFocus
                    required
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                </FormGroup>
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
                    placeholder="At least 6 characters, must contain 1 number"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
                </FormGroup>
                <Link className = "button" to='/Trade'>
                    <Button type = "submit" variant = "primary">
                        Create Account
                    </Button>
                </Link>
                <p>Already have an account?</p>
                <Link to='/Login'>
                    Click here to sign in.
                </Link>
                {/*<Button block bsSize="large" disabled={!validateForm()} type="submit">
                Login
                </Button>*/}
            </form>
        </div>
    </div>
  );
}