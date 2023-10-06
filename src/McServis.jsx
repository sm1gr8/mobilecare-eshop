import React, {useState} from 'react'
import Header from './components/header/Header';

const McServis = () => {
  
  const [btnshow, setBtnShow] = useState(false);

  return (
    <>   
    <Header />
    <div>McService Page</div>
    </>
  )
 
}

export default McServis;

