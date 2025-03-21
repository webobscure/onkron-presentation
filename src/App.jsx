import React, { useState } from 'react'
import Header from './Header.jsx'
import MainInfo from './MainInfo.jsx'
import Services from './Services.jsx'
import LogisticsHero from './LogisticsHero.jsx'
import ServicesHero from './ServicesHero.jsx'
import Preloader from './Preloader.jsx'
import DeliveryLogistics from './DeliveryLogistics.jsx'
import MarketplaceSupport from './MarketplaceSupport.jsx'
function App() {

  return (
    <>
          <Header />
          <LogisticsHero  />
          <ServicesHero />
          <MainInfo />
          <Services />
          <DeliveryLogistics />
          <MarketplaceSupport />
    </>
  )
}

export default App
