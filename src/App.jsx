import { useState } from 'react'
import logo from './assets/images/logo.svg';
import "./App.css";
import { Banner } from "./component/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./component/Navbar";
import Skills from "./component/Skills";
import {Project} from "./component/Project";
import Footer from "./component/Footer"
import  {Contact}  from './component/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
