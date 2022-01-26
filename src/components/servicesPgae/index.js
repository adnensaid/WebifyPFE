import React from 'react';
import { Packs, Footer } from './components';
const index =  () =>{
  return(
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column'}}>
      <Packs />
      <Footer />
    </div>
  )
}
export default index;