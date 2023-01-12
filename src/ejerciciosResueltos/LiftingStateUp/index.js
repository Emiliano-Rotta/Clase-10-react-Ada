import React from "react";

function App() {
  const [listas, setListas] = React.useState (["Dar la clase", "ir al super", "ir al GYM"])
  return (
    <>
      <Contador listas = {listas}/>
      <Listado listas = {listas}/>
      <Agregar setListas = {setListas}/>
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

function Agregar ({setListas}) {
  function handleSubmit (e) {
    e.preventDefault ();
    const lista = e.target.elements.lista.value;
    setListas (e =>[... e, lista])
  }

return (
  <form onSubmit = {handleSubmit}>
    <input autocomplete="off" type = "text" id = "lista"/>
    <button type="Submit"> Agregar </button>
  </form>
)
}


export default App;