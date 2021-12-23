import React, { useState } from "react";
import {data} from '../../../data'

const MainComponent = () => {
  const [people,setPeople] = useState(data);
  const removeId = (id) => {
  setPeople(people.filter(item => item.id !== id))   
  }
  return (
    <div>
      <h2>Passaggio di Proprietà a Cascata</h2>
      <Elenco people={people} removeId={removeId}/>
    </div>
  );
};

const Elenco = ({people, removeId}) => {
  return (
    <div>
      {people.map((item) => {return <Persona key={item.id} {...item} removeId={removeId}/>})}
    </div>
  );
}

const Persona = ({name,id, removeId}) => {
  return (
    <article className="item shadow">
      <h5>{name}</h5>
      <button className="button delete-button" onClick={()=>removeId(id)}>
        x
      </button>
    </article>
  );
}

export default MainComponent;
