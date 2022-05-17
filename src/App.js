import React, { useState } from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import Textarea from './components/Textarea';
function App() {
  const [mode,setMode] = useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
  <>
    <Navbar mode={mode} togglemode={togglemode}/>
    <div className='container my-3'>
    <Textarea title = "Analyse the text here" mode={mode}/>
    </div>
    <About/>
  </>
  );
}

export default App;
