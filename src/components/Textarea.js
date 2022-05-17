import React, {useState} from 'react'

function Textarea(props) {
  const handleupclick=()=>{
    let newtext = text.toUpperCase();
     setText(newtext)
  }

  const handleonclick=()=>{
      let newtext = text.toLowerCase();
      setText(newtext)
  }

  const handleclearclick=()=>{
      let newtext = '';
      setText(newtext)
  }
  const handleonchange = (event)=>{
      console.log("on change")
      setText(event.target.value)
  }

  const handleExtraSpaces = ()=>{
      let newtext = text.split(/[]+/);
      setText(newtext.join(" "));
  }

  const handlecopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    text.selectforRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }

  const [text,setText]=useState(" ");
  return (
  <>
  <div className='container' style = {{color:props.mode==='dark'?'white':'#042743'}}>
  <h1>{props.title} </h1>
  <div className="mb-3">
    <label for="myBox" className="form-label">Example textarea</label>
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode
    ==='dark'?'grey':'white', color:props.mode==='dark'?'#f9fafb':'#042743'}}  rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleupclick}>Convert To uppercase</button>
    <button className='btn btn-primary mx-1' onClick={handleonclick}>Convert To Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={handleclearclick}>Clear Text</button>
    <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
    <button className='btn btn-primary mx-1' onClick={handlecopy}>Copy Text</button>
  </div>

  <div className='container my-3' style={{color:props.mode==='dark'?'#f9fafb':'#042743'}} >
      <h2> Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes Read </p>
      <h2>Preview</h2>
      <p>{ text.length>0?text:"Enter something to have preview" }</p>
  </div>
  </>
  )
}

export default Textarea