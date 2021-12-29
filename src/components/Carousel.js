import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


export default function Carousel() {
    const [carousels, setcarousels] = useState([])

    useEffect(() => {
        axios.get('/db/db.json')
          .then(({ data }) => {
            data = data.api
            setcarousels(data.cards);
        
          }, (err) => {
            console.log("Error in Carousels");
          })
      }, [])

    return (
        <>
        <div id="carousel" className="carousel slide mb-4" data-ride="carousel">
            <div className="carousel-inner">
                {
                    carousels.map((carousel, index) => {
                        return <>
                            <div className={(index === 0) ? "carousel-item active" : "carousel-item"}>
                                <img src={carousel.image} className="d-block carousel-image" alt="..." />
                                <div className="carousel-caption d-none d-block">
                                    <h5>{carousel.heading}</h5>
                                    <p>{carousel.description}</p>
                                </div>
                            </div>
                        </>
                    })
                }
                <ol className="carousel-indicators">
                    {
                        carousels.map((carousel, index) => {
                            return <>
                                <li data-target="#carousel" data-slide-to={index} className={(index === 0) ? "active" : ""}></li>
                            </>
                        })
                    }
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
        </>
    )
}
