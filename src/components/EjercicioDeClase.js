import React from "react";

function App() {
  const [listas, setActividad] = React.useState (["Dar la clase", "ir al super", "ir al GYM"])
  return (
    <>
      <Contador listas = {listas}/>
      <Listado listas = {listas}/>
      <Agregar setActividad = {setActividad}/>
    </>
  );
}

function Contador ({listas}){
  return <div> Cosas para hacer el Lunes: {listas.length}</div>;
}

function Listado ({listas}){
  

return (
  <ul>
    {listas.map ((lista) =>(
      <li key = {lista}>{lista}</li>
    ))}
  </ul>
);
}




function Agregar ({setActividad}) {

  function handleSubmit (event) {
    event.preventDefault ();

    setActividad (e =>[... e, event.target.idd.value])
  }

return (
  <form onSubmit = {handleSubmit}>

    <input autoComplete="off" type = "text" id ="idd"/>

    <button type="submit"> Agregar </button>

  </form>
)
}


export default App;