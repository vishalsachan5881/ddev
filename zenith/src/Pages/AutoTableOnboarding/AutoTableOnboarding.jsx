import React from 'react'
import './AutoTableOnboarding.css'
import {useState} from 'react'
const AutoTableOnboarding =  function AutoTableOnboarding() {
    const [hootHref, setHootHref] = useState("");
    function collectData() {
        console.log(hootHref);
    }
  return (
    <>
   
         <div style={{margin:15}}>
        <div style={{textAlign:"center"}}>Enter Hoot Link</div>
        <div>
            <input type="text" size={50} value={hootHref} onChange={(e)=>{setHootHref(e.target.value)}}  className='Form-Box' placeholder='Enter the hoot link for the tabel'/>
            <button onClick={collectData} type='button' className='Form-Button' >Check Details</button>
        </div>
        </div>
    </>
  )
}

export default AutoTableOnboarding
