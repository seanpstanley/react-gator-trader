import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import NavBar from "../Header/NavBar";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let history = useHistory();

  function validateForm() {
    // return email.length > 0 && password.length > 0 && username >0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
        username: fullName,
        email: email,
        password: password,
        affiliation: affiliation,
        phoneNumber: phoneNumber
    }
    axios.post("/api/users", user)
    .then(  history.push({
        pathname: '/Trade',
        state: {username: fullName, email: email, affiliation: affiliation, phoneNumber: phoneNumber}
      }))
    .catch((err) => console.log(err))
    
  }

  return (
    <div>
        <NavBar />
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup bsSize="large">
                <ControlLabel>Full Name</ControlLabel>
                <FormControl
                    autoFocus
                    required
                    type="text"
                    placeholder="Andrew Garfield"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Affiliation</ControlLabel>
                <FormControl
                    required
                    placeholder="University of Florida"
                    value={affiliation}
                    onChange={e => setAffiliation(e.target.value)}
                    type="text"
                />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Phone Number</ControlLabel>
                <FormControl
                    required
                    placeholder="329948294"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    type="number"
                />
                </FormGroup>
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
                    placeholder="At least 6 characters, must contain 1 number"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
                </FormGroup>
                
                    <Button type = "submit" variant = "primary">
                        Create Account
                    </Button>
                
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