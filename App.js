import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 

function App() {
  // const a = "Huzefa Asif";
  // const b = 20;
  // let c = ["a", "b", "c"]
  let [txt, setTxt] = useState("abc");
  let [list, setList] = useState([]);

  // let list = [];
  // let txt = "";

  function add() {
    if(!txt) {
      alert("Text is required")
      return;
    }
    list.push(txt);
    console.log(list);
    setList([...list]);
  }
  return (
    <div className="App">
      <header className="App-header">
      {/* <h1>Hello {a}</h1>
      <p>
        the square root of {b} is {b * b}
      </p>
      <p>{c}</p>
      {c.map((x,i)=>{
        return <p key={i}>{x}</p>;
      })} */}
      <input onChange={(e) => {
        setTxt(e.target.value);
        console.log(txt);
      }} />
      <button onClick={add}>Add</button>
      <ul>
        {list.map((e,i) => {
        return <li 
        style={{
          color: "blue",
          backgroundColor: "lightcyan",
        }}
        key={i}
      >
        <Button click={add} btnValue={e} />
        {e}
      </li>;
      })}
      </ul>
      </header>
    </div>
  );
}

export default App;
