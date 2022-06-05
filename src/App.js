import './App.css';
import Neo from './Neo'
import { useState } from 'react';


function App() {

  const [val, setVal] = useState(true);


  return (
    <div id="app">
      <h1><span className="brown">subhadeep19@</span><span className="yellow">localhost:~$</span>  <span className="command" onClick={() => setVal(false)}>neofetch</span></h1>
      {val?(<></>):(<Neo/>)}
    </div>
  );
}

export default App;
