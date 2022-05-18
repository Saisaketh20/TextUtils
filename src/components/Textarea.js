import React, {useState} from 'react'

function Textarea(props) {
  const handleupclick=()=>{
    let newtext = text.toUpperCase();
     setText(newtext)
     props.showalert("Converted to uppercase","success")
  }

  const handleonclick=()=>{
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showalert("Converted to lowercase","success")
  }

  const handleclearclick=()=>{
      let newtext = '';
      setText(newtext)
      props.showalert("Text cleared!","success")
  }
  const handleonchange = (event)=>{
      console.log("on change")
      setText(event.target.value)
  }

  const handleExtraSpaces = ()=>{
      let newtext = text.split(/[]+/);
      setText(newtext.join(" "));
      props.showalert("Removed Extra Spaces","success")
  }

  const handlecopy=()=>{
   navigator.clipboard.writeText(text);
   props.showalert("Copied to clipboard","success")
  }

  const [text,setText]=useState(" ");
  return (
  <>
  <div className='container' style = {{color:props.mode==='dark'?'white':'#042743'}}>
  <h1>{props.title} </h1>
  <div className="mb-3">
    <label for="myBox" className="form-label">Example textarea</label>
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode
    ==='dark'?'#13466e':'white', color:props.mode==='dark'?'#f9fafb':'#042743'}}  rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleupclick}>Convert To uppercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleonclick}>Convert To Lowercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleclearclick}>Clear Text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlecopy}>Copy Text</button>
  </div>

  <div className='container my-3' style={{color:props.mode==='dark'?'#f9fafb':'#042743'}} >
      <h2> Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length} Minutes Read </p>
      <h2>Preview</h2>
      <p>{ text.length>0?text:"Enter something to have preview" }</p>
  </div>
  
  </>
  )
}

export default Textarea