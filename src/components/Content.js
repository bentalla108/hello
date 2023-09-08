import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";


import React from 'react'

function Content() {
  const [count , setCount]= useState(0);
  const [multiple , setMultiple]  = useState(1);
  const clickMe =  ()=>{
    console.log(`Before : ${count}`);
    setCount(count +1)
    setMultiple(count *2);
    console.log(`After : ${count}`);
  };
  return (
    
    <div>
        {console.log(`After render : ${count}`)}

     <Header />
      <p>{count} : {multiple} </p>
      <button onClick={clickMe}> click me</button>

     <Footer />
    </div>
  )
}

export default Content