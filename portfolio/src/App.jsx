import React from 'react'
import Sidebar from './components/sidebar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import Style_Switcher from './components/style-switcher.jsx';

const App= () => {

    return (
        <div class='main-container'>
            <Sidebar></Sidebar>
            <div class= 'main-content'>
                <Home></Home>
                <About></About>
                <Skills></Skills>
                <Portfolio></Portfolio>
                <Contact></Contact>
                <Style_Switcher></Style_Switcher>
            </div>
        </div>
    );
};

export default App;