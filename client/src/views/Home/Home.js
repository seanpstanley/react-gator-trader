import React from 'react';
import logo from '../../assets/logo.svg';
import Search from '../../components/Search/Search';
import List from '../../components/BooksList'
import NavBar from "../../components/Header/NavBar";
import background from '../../assets/landingPageBackground.jpg'

import './Home.css';

function Home() {


    return (

        <div container>
            <NavBar />
            <img src="landingPageBackground.jpg" alt="background" />
            <div className="intro-title">
                Welcome to Gator Trader
             </div>
            <div className="intro-message">
                A Hub for all textbook needs
             </div>

        </div>
    );
}

export default Home;
