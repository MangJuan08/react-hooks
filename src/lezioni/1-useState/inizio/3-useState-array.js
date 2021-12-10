import React, {useState} from "react";
import {data} from "../../../data";
const ArrayState = () => {
  const [people, setPeople] = useState(data)
  const changeName = (id) => {
      /*let newPeople = people.filter(word => word.id !== id)//prende tutti i nome che hanno l'id diverso da quello che è stato passato nella funzione e crea un array*/
      setPeople((oldPeople) => {
        return oldPeople.filter(item => item.id !== id)
      });
  }
  return (
    <>
      {
        people.map(item => {
          const {id,name} = item;
          return (
          <div key={id} className="item shadow">
            <h5>{name}</h5>
            <button type="button" className="button delete-button shadow m-3" onClick={()=>changeName(id)}>x</button>
          </div>)
        })
      }
    </>
  );
};

export default ArrayState;
