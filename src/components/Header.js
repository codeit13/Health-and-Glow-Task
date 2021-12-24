import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
import 'bootstrap/dist/css/bootstrap.min.css';

import Offers from './Offers';
import Carousel from './Carousel';

export default function Header() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light mx-3 bg-light navbar-nav" id="mainNav">
                <div className="container-fluid">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top"><h1>Sumit</h1></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/offers" className="nav-link">Offers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/carousel" className="nav-link">Carousel</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#signup">Signup</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/offers" exact>
                    <Offers />
                </Route>
                <Route path="/carousel" exact>
                    <Carousel />
                </Route>
            </Routes>

        </Router>
    )
}
