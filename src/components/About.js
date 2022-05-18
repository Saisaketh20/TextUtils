import React from 'react'

function About(props) {
  // const [mystyle,setMystyle] = useState({
  //     color:'black',
  //     backgroundColor:'white',
  // })
  let mystyle = {
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':"white",

  }
  // const [btntext,setBtnText] = useState("enable Dark mode")
  
  // const toggleStyle=()=>{
  //     if(mystyle.color==='black'){
  //         setMystyle({
  //             color:'white',
  //             backgroundColor:'black',
  //             border:'1px solid white'
  //         })
  //         setBtnText("enable light mode")
  //     }
  //     else{
  //         setMystyle({
  //             color:'black',
  //             backgroundColor:'white'
  //         })
  //         setBtnText("enable dark mode");
  //     }
  // }
  return (
    <div className='container'>
        <h1 className='my-3' style={{color:props.mode==='dark'?'#dc3545':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyse your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils gives you a way to analyse your text quickly and efficiently. Be it word count,character count...
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        Its a free character counter tool that provides instant character count and word count for a given text
        Reports number of words and characters.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This word counter software works in any web browser. it suits to count characters in facebook,books,excel,word document etc
      </div>
    </div>
  </div>
</div>
   
    {/* <div className='container my-3'>
       <button onClick={toggleStyle} type="button" className='btn btn-primary'>enable dark mode</button>
    </div> */}
    </div>
  )
}

export default About