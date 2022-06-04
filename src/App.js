import './App.scss';
import React from 'react';
import Footer from './components/Footer';
import Header from "./components/Header";
import Generator from './components/Generator';

function App() {


    return (
        <div className='App'>
            <Header/>
            <Generator/>
            <Footer/>
        </div>
    );
}

export default App;
