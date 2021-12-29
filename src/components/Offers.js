import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'

export default function Card() {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        axios.get('/db/db.json')
          .then(({ data }) => {
            data = data.api
            setOffers(data.cards);

        
          }, (err) => {
            console.log("Error in Offers");
          })
      }, [])

    return (
        <>
            <section>
                <div className="container mb-4">
                    <h2 className="text-center">OFFERS</h2>
                    <div className="row">
                        {
                            offers.map((offer, index) => {
                                return <>
                                    <div className="col-lg-4 col-sm-1 col-md-4 col-sm-12 col-xs-12">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="card-img-top" src={offer.image} alt="Slider 1" />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">{offer.heading}</h4>
                                                <p className="card-text">{offer.description}</p>
                                                <p className="card-text">{offer.percent_off}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}
