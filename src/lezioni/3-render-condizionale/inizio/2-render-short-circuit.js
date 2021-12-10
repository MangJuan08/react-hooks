import React, {useState} from "react";

const ShortRender = () => {
  const [parola, setParola] = useState("Valore");
  const [toggle, setToggle] =useState(false);
  //Short Ciruit Evaluation con OR operator
  //const esempio = parola || "sono un esempio";

  //Short Circuit evaluation witn AND operator
  //const esempio2 = parola === "Valore" ? 'Corretto' : ' Sbagliato';

  //Ternary Operator Esempio
  return (
    <div>
      <h2>{parola || 'Sono un Esempio'}</h2>
      { toggle ? <h2 className='text-success'>Vero Toggle</h2> : <h2 className='text-danger'>False toggle</h2>}
      <button className="button" onClick={() => setToggle(!toggle)}>Cambia Toggle</button> {/*cambia lo stato del toggle diverso dallo stato di prima*/}
    </div>
  );
};

export default ShortRender;
