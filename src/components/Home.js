import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Carousel from './Carousel';
import Offers from './Offers';
import Footer from './Footer';

export default function Home() {

    const [appStatus, setAppStatus] = useState(true)

    useEffect(() => {
        axios.get('/db/db.json')
          .then(({ data }) => {
            setAppStatus(true)
      
          }, (err) => {
            setAppStatus(false)
          })
      }, [])

      if (appStatus === true) {
        return (
            <div>
            <div className="container">
                    <Carousel />

                    <Offers />
            </div>
            <Footer />
        </div>
        );
      } else {
        return (
          <div id="main">
            <div className="down">
              <h1>APPLICATION IS DOWN RIGHT NOW</h1>
              <br />
              <h2>VISIT LATER</h2>
            </div>
          </div>
        );
      }
}
