import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, {useState} from 'react';
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
   


  }

  
  const [mode, setMode] = useState('light');
  const toggleDark = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("dark mode has enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has enabled", "success");
    }
  }
  return (
 
    <>
     {/*  <Navbar title = "TextUtils2" Home="myHome" aboutText = "About usama" /> */}
    {/* <Navbar/> */}
   <Navbar title="TextUtils" mode = {mode} toggleDark={toggleDark}/> 
   <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert = {showAlert} heading="Enter text here to analyze below" mode={mode}/> 
  

 
    </div>
  

    
    
      
    </>
  );
}

export default App;
