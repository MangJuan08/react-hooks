import React, {useState} from "react";

const StateObject = () => {
 
  const [persona, setPersona] = useState({
    name:'John',
    age:27,
    saluto:'ciao'
  })

  const cambiaSaluto = () => {
    setPersona({
      ...persona,
      age:28,
      saluto:"HAPPY BDAY"
    })
  }

  return <div className='item shadow'>
    <div className="'text-left">
      <h5>{persona.name}</h5>
      <h5>{persona.age}</h5>
      <h5>{persona.saluto}</h5>
    </div>
    <button className='button' onClick={cambiaSaluto}>Cambia il Saluto</button>
    </div>;
};

export default StateObject;
