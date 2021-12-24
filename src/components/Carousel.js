import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Carousel({ carousels }) {
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/slider-1.png" className="d-block carousel-image" alt="..." />
                    <div className="carousel-caption d-none d-block">
                        <h5>Beauty Queen 1</h5>
                        <p>This is for Perfection in Beauty 1</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="images/slider-2.png" className="d-block carousel-image" alt="..." />
                    <div className="carousel-caption d-none d-block">
                        <h5>Beauty Queen 2</h5>
                        <p>This is for Perfection in Beauty 2</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="images/slider-3.png" className="d-block carousel-image" alt="..." />
                    <div className="carousel-caption d-none d-block">
                        <h5>Beauty Queen 3</h5>
                        <p>This is for Perfection in Beauty 3</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="images/slider-4.png" className="d-block carousel-image" alt="..." />
                    <div className="carousel-caption d-none d-block">
                        <h5>Beauty Queen 4</h5>
                        <p>This is for Perfection in Beauty 4</p>
                    </div>
                </div>

                <ol className="carousel-indicators">    
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1" className="active"></li>
                    <li data-target="#carousel" data-slide-to="2" className="active"></li>
                    <li data-target="#carousel" data-slide-to="3" className="active"></li>
                </ol>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carousel" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carousel" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    )
}
