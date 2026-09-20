import React from 'react';
import {useState} from 'react';

const calculator = () => {
  const [data,setData] = useState("");
  const calculate=()=>{
    setData(eval(data).toString())
  }
  const back =()=>{
    setData(data.slice(0,-1))
  }
  const clear=()=>{
    setData("")
  }
  
  const getValue=(event)=>{
    console.log(event.target.value)
    setData(data.concat(event.target.value))  
  }
  return (
    <div className="calculator">
      <div className="result">
        <input placeholder ="0" value={data} onChange={getValue}/></div>
     
      <div className="row1">
        <button onClick={getValue} value='('>(</button>
        <button onClick={getValue} value =')'>)</button>
        <button onClick={getValue} value ='%'>%</button>
        <button onClick={clear}>AC</button>
      </div>
       <div className="row2">
        <button onClick={getValue} value ='7'>7</button>
        <button onClick={getValue} value ='8'>8</button>
        <button onClick={getValue} value ='9'>9</button>
        <button onClick={getValue} value ='*'>*</button>
      </div>
      <div className="row3">
        <button onClick={getValue} value ='4'>4</button>
        <button onClick={getValue} value ='5'>5</button>
        <button onClick={getValue} value ='6'>6</button>
        <button onClick={getValue} value ='-'>-</button>
      </div>
      <div className="row4">
        <button onClick={getValue} value ='1'>1</button>
        <button onClick={getValue}value ='2'>2</button>
        <button onClick={getValue} value ='3'>3</button>
        <button onClick={getValue}value ='+'>+</button>
      </div>
      <div className="row5">
        <button onClick={getValue} value ='0'>0</button>
        <button onClick={back} value ='Back'>Back</button>
        <button onClick={calculate}>=</button>
        <button onClick={getValue} value ='/'>/</button>
      </div>        
    </div>
  );
};
export default calculator;