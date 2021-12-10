import React, {useEffect, useState} from "react";

const useEffectBasi = () => {
  const [contatore, setContatore] = useState(0)
  const aumenta = () => {
    setContatore((oldValue) => {return oldValue+1});
  }

  useEffect(() => {
     console.log('Ciao');
     if(contatore<1){
      document.title = "nessun cambiamento";
     }
     else
     {
      document.title = "Nuovo valore:" + contatore;
     }
     return () => console.log("cleanup");
  },[contatore])

  return (
    <div>
      <h4>{" "} Value : <span>{contatore}</span>{" "}</h4>
      <button className="button my-2" onClick={aumenta}>Aumenta</button>
    </div>
  );
};

export default useEffectBasi;
