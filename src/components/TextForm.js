import React, {useState} from 'react';

export default function TextForm(props){
  const [text, updatedText] = useState("Enter text here");
  const handleOnClick = ()=>{
    let newText = text.toUpperCase();
    updatedText(newText);
    props.showAlert("coverted to upperCase","success");

    

  }
  const handleOnChange = (event)=>{
    updatedText(event.target.value); 
  }
  const handleLoClick = ()=>{
    let newLoText = text.toLowerCase();
    updatedText(newLoText);
    props.showAlert("coverted to lowerCase","success");

    

  }
const handleTitClick = ()=>{
let sentence = text.toLowerCase().split(" ");
for(let i=0;i<sentence.length;i++){
  sentence[i] = sentence[i][0].toUpperCase()+ sentence[i].slice(1);
  
}
let finalText = sentence.join(" ");
updatedText(finalText);
props.showAlert("coverted to Titlecase","success");






  }
  



  return(
    <>
    <div>

<div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>

  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}> </textarea>

</div>
 <button className="btn btn-primary" onClick = {handleOnClick}>Convert to UpperCase</button>
 <button className="btn btn-primary mx-2" onClick = {handleLoClick}>Convert to LowerCase</button>
 <button className="btn btn-primary mx-2" onClick = {handleTitClick}>Convert to TitleCase</button>
 </div>
 <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
 <h2>Your Text Summary</h2>
 <p> {text.split(" ").length} words and {text.length} characters</p>
 <p className="mx-2"> {0.008 * text.split(" ").length}Minutes read</p>
 <p>Preview</p>
 <p>{text}</p>

 </div>

 </>
  )
 
}