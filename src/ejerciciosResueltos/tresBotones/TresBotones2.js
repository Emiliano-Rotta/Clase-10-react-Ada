import { useState } from "react";

function App() {

  const [numero, setNumero] = useState(0)
  const [letra, setletra] = useState("cero")
  
  function uno() {
    setNumero(1)
    setletra("uno")
  }
  function dos() {
    setNumero(2)
    setletra("dos")
  }
  function tres() {
    setNumero(3)
    setletra("tres")
  }

  return (
    <div>
      <h2>{numero} - {letra}</h2>
      <button onClick={uno}>1</button>
      <button onClick={dos}>2</button>
      <button onClick={tres}>3</button>
    </div>

  )
}


export default App;