import React, { useState, useContext } from "react";
import { data } from "../../../data";

//semplifica il passaggio dei props
const AppContext = React.createContext();

const MainComponent = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => setPeople(people.filter((el) => el.id !== id));
  return (
    <AppContext.Provider value= {{
      people,
      removePeople
    }}>

    <div>
      <h3>Passaggio di Proprietà a cascata </h3>
      <Elenco people={people}/>
    </div>
    </AppContext.Provider>
  );
};

const Elenco = ({ people}) => {
  return (
    <div>
      {people.map((el, index) => {
        return <Persona key={index} {...el} />;
      })}
    </div>
  );
};

const Persona = ({ id, name}) => {
  const {removePeople} = useContext(AppContext);
  return (
    <div className="item shadow">
      <h5> {name} </h5>
      <button className="button delete-button" onClick={() => removePeople(id)}>
        {" "}
        x{" "}
      </button>
    </div>
  );
};

export default MainComponent;
