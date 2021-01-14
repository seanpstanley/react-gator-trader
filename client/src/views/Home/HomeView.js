import React from 'react';
import logo from '../../assets/logo.svg';
import Search from '../../components/Search/Search';
import List from '../../components/BooksList'
import NavBar from "../../components/Header/NavBar";
import background from '../../assets/landingPageBackground.jpg'
import {Button} from 'react-bootstrap'

import './Home.css';

function Home(props) {


    return (

        <div container>
            {/* <NavBar /> */}
            <img src="landingPageBackground.jpg" alt="background" width="100%" height="100%" />
            <div className="intro-title">
                Welcome to Gator Trader
             </div>
            <div className="intro-message">
                A Hub for all textbook needs
                <div>
                <Button onClick={() => props.setView(1)}>
                    View Textbooks
                </Button>
            </div>
                
             </div>
            

        </div>
    );
}

export default Home;
