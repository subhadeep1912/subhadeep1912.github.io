import './App.css';
import Neo from './Neo'
import { useState } from 'react';


function App() {

  const [val, setVal] = useState(true);


  return (
    <div id="app">
      <h1><span className="white">subhadeep19@</span><span className="yellow">github-io:~$</span>  <span className="command" onClick={() => setVal(false)}>neofetch</span>  <span className='bruh'>&lt;---click this command</span></h1>
      {val?(<></>):(<Neo/>)}
    </div>
  );
}

export default App;
