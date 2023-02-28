import React from 'react'
import './AutoTableOnboarding.css'
import {useState} from 'react'
import axios from 'axios';
import Filter from '../../components/Filter/Filter';
const AutoTableOnboarding =  function AutoTableOnboarding() {
    const [hootHref, setHootHref] = useState("");
    async function  collectData() {
      try { 
      await axios.post("http://localhost:3001/Onboard",  {hootHref:hootHref})
      .then(
        (res) => { console.log(res.data); }); 
      }
       catch (error) 
       { console.log(error.response.data.message); }
    }
  return (
    <>
   
        <div style={{margin:15}}>
        <div style={{textAlign:"center"}}>Enter Hoot Link</div>
        <div>
            <input type="text" size={50} value={hootHref} onChange={(e)=>{setHootHref(e.target.value)}}  className='Form-Box' placeholder='Enter the hoot link for the tabel'/>
        </div> 
        <button onClick={collectData} type='button' className='Form-Button' >Check Details</button>
            <Filter/>
        
        </div>
    </>
  )
}

export default AutoTableOnboarding
