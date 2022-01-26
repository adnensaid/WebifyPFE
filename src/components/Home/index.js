import React from 'react';

//import { Banner, Expertises, ServicesPacks, Portfolio, Avis, Newsletter, Footer } from './components';
import { Banner, Expertises, ServicesPacks, Portfolio, Avis } from './components';
const index  = () =>{
  return(
    <div className="d-flex flex-column">
        <Banner />
        <Expertises />
        <ServicesPacks />
        <Portfolio />
        <Avis />
    </div>
/*     <>
    <Banner />
    
    
    
    
    <Newsletter />
    <Footer />
    </> */
  )
}
export default index;