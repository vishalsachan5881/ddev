import React, { useState} from 'react'

const Filter = () => {
    const [val,  setVal] = useState([]);
    const handleAdd=()=>{
        const abc = [...val,[]]
        setVal(abc)
    }
    const handleChange = (e,i)=>{
            console.log(e);
    }
    const handleDelete = (i)=>{
        const delVal = [...val];
        delVal.splice(i,1)
        setVal(delVal)
    }
  return (
    <>
    <button onClick={()=>handleAdd()}>Add</button>
    {
        val.map((data,i)=>{
        return  (
        <div>
        <input value={data}  onChange={(e)=> handleChange(e,i)} />
        <button onClick={()=> handleDelete(i)}>x</button>
        </div>)
        })
    }
    </>
  )
}

export default Filter
