import React from 'react';
import logo from '../../assets/logo.svg';
import Search from '../../components/Search/Search';
import List from '../../components/BooksList'
import NavBar from "../../components/Header/NavBar";

import './Home.css';

function Home() {
    return (
       <div>
           <NavBar />
            <div> 
            <Search />
            {/* <List /> */}
            </div>
       </div>
           
            
            
           
       
    );
}

export default Home;
