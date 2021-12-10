import React, { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
  const [titolo, setTitolo] = useState("Basi useState");
  const changeTitolo = () => {
    setTitolo("Nuovo Titolo")
  }
  return (
    <>
      <h2>{titolo}</h2>
      <button type="button" className="btn btn-primary shadow m-3" onClick={changeTitolo}>Change Titolo</button>
    </>
  );
};

export default UsoBase;
