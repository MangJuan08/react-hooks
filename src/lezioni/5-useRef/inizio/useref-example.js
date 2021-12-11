import React, { useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);
  const titolo = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef);
    console.log(titolo);
  };
  return (
    <div>
      <h2 ref={titolo}>Titolo</h2>
      <h4>Posizione</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef}></input>
        <button className="button" type="submit">
          invia
        </button>
      </form>
    </div>
  );
};

export default RefExample;
