import React, {useState, useEffect} from "react";

const ControlledInput = () => {
  const [nome, setNome] = useState("");
  const [cellulare, setCel] = useState("")
  const [email, setEmail] = useState("")
  const [persona, setPersona] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nome,cellulare,email)
    if(nome && cellulare && email)
    {
      setPersona(
        [...persona, {
          id: new Date(Date.now()).getTime().toString(),
          nome:nome,
          email:email,
          cellulare:cellulare
        }]
      )
    }
  }

  const handleChange = (e) => {
    const {value} = e.target;
    setCel(value)
  }

  useEffect(() => {
    console.log(persona)
    return () => {
      console.log("cleanup");
    }
  }, [persona])
  return (
    <form className="bg-white shadow rounded p-4" >
      <div className="form-group d-flex align-items-center justify-content-around">
        <label htmlFor="nome" className="text-left font-weight-bold col-3">
          Nome:
        </label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="='form-control col-9"
        ></input>
      </div>
      <div className="form-group d-flex align-items-center justify-content-around">
        <label htmlFor="email" className="text-left font-weight-bold col-3">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="='form-control col-9"
        ></input>
      </div>
      <div className="form-group d-flex align-items-center justify-content-around">
        <label htmlFor="cellulare" className="text-left font-weight-bold col-3">
          Tel:
        </label>
        <input
          id="cellulare"
          type="tel"
          name="cellulare"
          value={cellulare}
          onChange={handleChange}
          className="='form-control col-9"
        ></input>
      </div>
      <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Invia</button>
    </form>
  );
};

export default ControlledInput;
