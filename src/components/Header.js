import React from 'react';

export default function Header() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light mx-3 bg-light navbar-nav" id="mainNav">
                <div className="container-fluid">
                    <a className="navbar-brand js-scroll-trigger" href="/"><h1>Sumit</h1></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/offers">Offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/carousel">Carousel</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">Signup</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
