import React, {useState,useEffect} from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log("Render");
  const dimensioneFinestra = () => {
    setSize(window.innerWidth)
  }
  
  useEffect(() => {
    console.log('Set addEvent')
   window.addEventListener("resize",dimensioneFinestra);
   /*return () => {
    console.log('Rimuovo addEvent')
    window.addEventListener("resize",dimensioneFinestra);
   }*/
  },[])
  return (
    <div className="container w-75 col-6 offset-3 bg-white shadow" style={{textAlign:"center"}}>
      <h1> {size} </h1>
    </div>
  );
};

export default CleanUp;
