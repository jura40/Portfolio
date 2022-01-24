import { BrowserRouter as Router,Routes,Route ,Link } from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import React from "react";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import {useNavigate} from 'react-router-dom';
import SearchBar from "./SearchBar/SearchBar";



class App extends React.Component {

  constructor (props) {
    super(props);
    this.state ={
      title : 'Djura Dzakula',
      headerLinks: [
        {title : 'Home', path : '/'},
        {title : 'About', path : '/aboutPage'},
        {title : 'contact', path : '/contactPage'},
      ],
      home : {
        title : 'Just in time',
        subTitle : 'Project with React',
        text: 'Kolla på min repositori'
      },
      about : {
        title : 'About me',
      },
      contact : {
        title : 'Lets talk',
    }
  }
}
  render() {
    return (
      <Router>
        <Container className="p=0" fluid ={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand ="lg">
            <Navbar.Brand > Mitt namn</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id = "navbar-toggle">
              <Nav className ="ml-auto">
                <Link className="nav-link" to ="/">Home</Link>
                <Link className="nav-link" to ="/about">About</Link>
                <Link className="nav-link" to ="/contact">Contact</Link>

              </Nav>
            </Navbar.Collapse>
              <SearchBar />
          </Navbar>
                <Routes>
                <Route path="/" element = {<HomePage />} />
                <Route path="/about" element ={<AboutPage />} />
                <Route path="/contact" element ={<ContactPage />} />
                <Route path="*" element = {<ErrorPage />} />
                </Routes>

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;