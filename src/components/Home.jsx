import React from 'react'
import Footer from '../layouts/Footer'
import FooterOne from '../layouts/FooterOne'
import Navbar from '../layouts/Navbar'
import Coins from './coins/Coins'
import Hero from './Hero'
import HighPoint from './highpoint/HighPoint'
import Subscription from './subscription/Subscription'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HighPoint />
      <Coins />
      <Subscription />
      <FooterOne />
      <Footer />
    </div>
  )
}

export default Home