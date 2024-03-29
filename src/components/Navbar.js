import React from 'react'
import {Link} from 'react-router-dom'
function Navbar(props) {
  return (
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">TextUtils</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        {/* <div className="form-check form-switch-text" style={{color:props.mode==='dark'?"white":"black"}} >
         <input className="form-check-input" onClick= {props.togglemode} type="checkbox"  id="flexSwitchCheckChecked" />
         <label className="form-check-label" htmlfor="flexSwitchCheckChecked">Enable Dark mode</label>
        </div>
      </div> */}
    < div className='d-flex'>
       <div className='bg-primary rounded mx-2' onClick={()=>{props.togglemode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
       <div className='bg-secondary rounded mx-2'onClick={()=>{props.togglemode('secondary')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
       <div className='bg-success rounded mx-2' onClick={()=>{props.togglemode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
       <div className='bg-danger rounded mx-2' onClick={()=>{props.togglemode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
       <div className='bg-warning rounded mx-2' onClick={()=>{props.togglemode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
       <div className='bg-light rounded mx-2' onClick={()=>{props.togglemode('light')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
       <div className='bg-dark rounded mx-2' onClick={()=>{props.togglemode('dark')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
    </div>
    </div>
    </div>
    </nav>
  )
}

export default Navbar