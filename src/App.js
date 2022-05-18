import React, { useState } from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setalert] = useState(null);
  const showalert = (message,type)=>{
    setalert({
      msg: message,
      type:type,
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }
  const removebodyClasses=()=>{
    document.body.classList.remove('bg-lght')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const togglemode=(cls)=>{
    //removebodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Routes>
        <Route exact path="/about" element={<About/>} mode={mode}/>
        <Route exact path="/" element={   
           <Textarea title="Try TextUtils- word counter,character,remove extra spaces" showalert={showalert} mode={mode}/>}/>                        >
      </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
