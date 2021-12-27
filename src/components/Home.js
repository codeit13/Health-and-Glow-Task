import React from 'react'

import Header from './Header';
import Carousel from './Carousel';
import Footer from './Footer';

export default function Home() {
    return (
        <div>
            <div className="container">
                    <Carousel />
            </div>
            <Footer />
        </div>
    )
}
