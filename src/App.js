import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const[interest , setinterest]=useState(0)
  const[principle , setprinciple]=useState(0)
  const[rate , setrate]=useState(0)
  const[year , setyear]=useState(0)
  const[isPrincipal,setisprinciple]= useState(true)
   const[israte,setisrate]=useState(true)
   const[isyear,setisyear]=useState(true)
const getValidate =(e)=>{
  const{name,value}=e.target
  //console.log(name,value);
  //setprinciple(value)
 // console.log(!!value.match(/^[0-9]+$));(!!)means to convert into boolean
  if(!!value.match(/^[0-9]+$/)){
    if(name==='principle')
    {setprinciple(value)
    setisprinciple(true)}

    else if(name==='rate')
    {
      setrate(value)
        setisrate(true)
    
    }
    else{
      setyear(value)
      setisyear(true)
    }

  }

  else{
    if(name==='principle')
    {setprinciple(value)
    setisprinciple(false)
  }
    else if(name==='rate'){
      setrate(value)
      setisrate(false)
    }
    else{
      setyear(value)
      setisyear(false)
    }
  }
}
 
const eheh= (e)=>{
 e.preventDefault()
 if(!principle||!rate||!year){
  alert('write somthing u cunt')
}
else{
  setinterest(principle*rate*year/100)
}

}
const naaa=(e)=> {
  setinterest(0)
  setinterest(0)
  setinterest(0)
  setyear(0)
  setisprinciple(true)
  setisrate(true)
  setisyear(true)
}

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark' >
    <div className='bg-light p-5 rounded'> <h1>simple interest app</h1>
    <p>calculate simple interest easily</p>
    <div className='bg-warning d-flex justify-content-center align-items-center w-100 p-5 flex-column rounded mt-4 shadow' >
      <h1>₹{''}{interest}</h1>
       <p>total simple interest</p>
    </div>
    <form className='mt-4' onSubmit={eheh}>
      <div className='mb-3'>
      <TextField name='principle' value={principle||""} onChange={(e)=>getValidate(e)}     className='w-100' id="outlined-basic" label="₹principal amount" variant="outlined" />
      
        {!isPrincipal &&
       <div> <p className='text-danger tw-bolder'>*nigger input</p> </div> 
      }
      </div>
      <div className='mb-3'>
      <TextField value={rate||""} name='rate' onChange={(e)=>getValidate(e)}  className='w-100' id="outlined-basic" label="rate of interest (p.a)" variant="outlined" />
      </div>
      {!israte &&
       <div> <p className='text-danger tw-bolder'>*nigger input</p>
       </div> 
      }
      
      <div className='mb-3'>
      <TextField value={year||""} name='year' onChange={(e)=>getValidate(e)}  className='w-100' id="outlined-basic" label="year(yr)" variant="outlined" />
      </div>
      {!isyear &&
       <div> <p className='text-danger tw-bolder'>*nigger input</p>
       </div> 
      }
      
      <Stack direction="row" spacing={2} className='mt-5'>
      <Button type='submit' disabled={isPrincipal&&israte&&isyear?false:true} className='bg-success' style={{width:"200px", height:"50px"}} variant="contained">Calculate</Button>
      <Button onClick={naaa} style={{width:"200px", height:"50px"}} variant="outlined">reset</Button>
</Stack>
    </form>
      </div>
    </div>
  );
}

export default App;
