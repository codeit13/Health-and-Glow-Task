import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer({ offers }) {
    return (
        <section className="bg-dark text-light">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div>
                                <h4>Popular Categories</h4>
                                <ul className="list-unstyled">
                                    <br />
                                    <li><a href="#home" className="btn text-light" >Makeup</a></li>
                                    <li><a href="#home" className="btn text-light" >Skincare</a></li>
                                    <li><a href="#home" className="btn text-light" >Hair Care</a></li>
                                    <li><a href="#home" className="btn text-light" >Bath and Body</a></li>
                                    <li><a href="#home" className="btn text-light" >Natural & Herbal</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div>
                                <h4>Skin Care Products</h4>
                                <ul className="list-unstyled">
                                    <br />
                                    <li><a href="#home" className="btn text-light" >Wash & Cleansers</a></li>
                                    <li><a href="#home" className="btn text-light" >Toners</a></li>
                                    <li><a href="#home" className="btn text-light" >Scrubs & Exfoliants</a></li>
                                    <li><a href="#home" className="btn text-light" >Lip Care</a></li>
                                    <li><a href="#home" className="btn text-light" >Eye Care</a></li>
                                    <li><a href="#home" className="btn text-light" >Face Wash</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div>
                                <h4>Hair Care Products</h4>
                                <ul className="list-unstyled">
                                    <br />
                                    <li><a href="#home" className="btn text-light" >Hair Care</a></li>
                                    <li><a href="#home" className="btn text-light" >Hair Styling Products</a></li>
                                    <li><a href="#home" className="btn text-light" >Hair Accessories</a></li>
                                    <li><a href="#home" className="btn text-light" >Dryers</a></li>
                                    <li><a href="#home" className="btn text-light" >Combs and Brushes</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4>Follow Us</h4>
                            <ul>
                                <br />
                                <li><a href="#home" className="btn text-light" title="Facebook"><i className="bi bi-facebook"></i></a></li>
                                <li><a href="#home" className="btn text-light" title="Linkedin"><i className="bi bi-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 copy">
                            <p className="text-center">&copy; Copyright 2018 - Health & Glow Task.  All rights reserved.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}