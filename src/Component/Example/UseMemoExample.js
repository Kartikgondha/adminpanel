import { TextField } from '@mui/material';
import React, { useState } from 'react';

function UseMemoExample(props) {
    const[counter, setCounter]=useState(0);
    const[number, setNumber]=useState(0);

    const findFactorial=(n)=>{
        if(n > 1){
            return n*findFactorial(n-1);
           
        }else{
            return 1;
        }
    }

    const result= findFactorial(number)

    return (
        <div>
          <TextField 
           margin="dense"
           onChange={(e)=>setNumber(e.target.value)}
          />

          <button onClick={()=>setCounter(counter + 1)}>Counter</button>

          <p>counter : {counter}</p>
          <p>Number : {result}</p>
        </div>
    );
}

export default UseMemoExample;