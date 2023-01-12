import { useState } from "react";

function App() {

  const [count, setCount] = useState("0 - cero")

  function click(e) {
    const bId = e.target.id
    if (bId === "1")
    setCount("1 - uno");
    if (bId === "2")
    setCount("2 - dos");
    if (bId === "3")
    setCount("3 - tres");
  }
   // function uno() {
  //   setCount("1 - uno");
  // }
  // function dos() {
  //   setCount("2 - dos");
  // }
  // function tres() {
  //   setCount("3 - tres");
  // }

    // return (
    //   <div>
    //     <h2>{count}</h2>
    //     <button onClick={uno}>1</button>
    //     <button onClick={dos}>2</button>
    //     <button onClick={tres}>3</button>
    //   </div>
    // )


  return (
    <div>
      <h2>{count}</h2>
      <button id="1" onClick={click}>1</button>
      <button id="2" onClick={click}>2</button>
      <button id="3" onClick={click}>3</button>
    </div>
  )
}


export default App;