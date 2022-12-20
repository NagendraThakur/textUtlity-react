import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      message, type
    }
    )
    setTimeout (()=>{
      setAlert(null);
    }, 1500)
    
  }
  const [mode, setmode] = useState('light')
  const toggleMode = ()=>{
    if (mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert('dark mode enabled', 'success')
      
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('light mode enabled', 'success')
      
    }
  }
  return (
    <>

    <BrowserRouter>
    <NavBar title='NavBar' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} showAlert={showAlert}/>
      <Routes>
        <Route path='/' element={<TextForm mode={mode} alert={alert} showAlert={showAlert}/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
   

    
    </>
  );
}

export default App;
