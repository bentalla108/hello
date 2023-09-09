import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";


import React from 'react'

function Content() {
  const [count , setCount]= useState(0);
  const clickMe = () => {
    console.log(`Before : ${count}`);
    setCount(c => {
      console.log(`Inside Callback : ${c}`);
      return c + 1;
    });
  };
  
  return (
    
    <div>
        {console.log(`After render : ${count}`)}

     <Header />
      <p>{count} : {} </p>
      <button onClick={clickMe}> click me</button>

     <Footer />
    </div>
  )
}

export default Content