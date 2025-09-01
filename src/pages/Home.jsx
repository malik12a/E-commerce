import React from 'react'
import Mainbanner from '../components/Mainbanner'
import Deals from '../components/Deals'
import HomeAndOutdoor from '../components/HomeAndOutdoor'
import Gagets from '../components/Gagets'
import Hero from '../components/Hero'
import Recomended from '../components/Recomended'
import ExtraServices from '../components/ExtraServices'
import Region from '../components/Region'
import News from '../components/News'

const Home = () => {
  return (
    <div>
        <Mainbanner/>
        <Deals/>
        <HomeAndOutdoor/>
        <Gagets/>
        <Hero/>
        <Recomended/>
        <ExtraServices/>
        <Region/>
        <News/>
    </div>
  )
}

export default Home