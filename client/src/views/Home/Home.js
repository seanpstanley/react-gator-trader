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
                <Search className="search-bar" />
            </main>
        </>
    );
}

export default Home;
