import React from 'react'
import Hero from '../components/home/Hero'
import Aboutme from '../components/home/Aboutme'
import Concat from '../components/home/Concat'
import Footer from '../components/home/Footer'
import Work from '../components/home/Work'
import Header from '../components/home/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Work />
            <Concat />
            <Aboutme />
            <Footer />
        </div>
    )
}

export default Home