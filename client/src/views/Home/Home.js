import React from 'react';
import logo from '../../assets/logo.svg';
import Search from '../../components/Search/Search';
import List from '../../components/BooksList'
import NavBar from "../../components/Header/NavBar";
import background from '../../assets/landingPageBackground.jpg'

import './Home.css';
import SearchBar from '../../components/Search/SearchBar';

function Home() {
    return (
        <>
            <NavBar />
            <main className="home-main">
                {/* <img src="landingPageBackground.jpg" alt="background" width="100%" height="100%" /> */}
                {/* <div className="intro-title">
                    Welcome to Gator Trader
                </div> */}
                <Search className="search-bar" />
                {/* <div className="intro-message">
                    A Hub for all textbook needs
                </div> */}
            </main>
        </>
    );
}

export default Home;
