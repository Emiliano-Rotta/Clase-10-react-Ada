import { useState } from "react";

function App() {

  const [numero, setNumero] = useState({nombre: "" , apellido: ""})

  function handleChange(e){
    e.preventDefault ();
    setNumero({
    ...numero,
    [e.target.name] : e.target.value,

    });
    console.log("name", e.target.name)
    console.log("value", e.target.value)
    console.log("type", e.target.type)
  }

  return (
    <div>
      <h2>Hola {numero.nombre} {numero.apellido}</h2>
      <input 
        autoComplete="off"
        type="text"
        value={numero.nombre} 
        name='nombre' 
        placeholder="Nombre.."  
        onChange={(e)=>handleChange(e)} 
      />

      <input 
        autoComplete="off"
        type="text"
        value={numero.apellido} 
        name='apellido' 
        placeholder="Apellido.."  
        onChange={(e)=>handleChange(e)} 
      />

    </div>

  )
}


export default App;