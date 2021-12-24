import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card({ offers }) {
    return (
        <>
            <section>
                <div className="container">
                    <h2 className="text-center">OFFERS</h2>
                    <div className="row">
                        
                                    <div className="col-lg-4 col-sm-1 col-md-4 col-sm-12 col-xs-12">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="card-img-top" src="images/slider-1.png" alt="Slider 1" />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">Heading 1</h4>
                                                <p className="card-text">Description 1</p>
                                                <p className="card-text">Text 1</p>
                                            </div>
                                        </div>
                                    </div>
                                
                    </div>
                </div>
            </section>

        </>
    )
}
