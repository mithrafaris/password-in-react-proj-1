import React, {useCallback,useEffect, useState,useRef } from 'react'

const App = () => {
const [length, setlength] = useState(8)
const [numberAllowed, setnumberAllowed] = useState(false)
const [charAllowed, setcharAllowed] = useState
(false)
const [Password, setPassword] = useState('')

const PasswordRef=useRef(null)


const GeneratePassword = useCallback(()=>{
  let pass = " "
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed)str+= "0123456789"
  if(charAllowed)str+="!@#$%&*()-+"
  for (let i = 1; i < length; i++) {
 const char = Math.floor( Math.random()*str.length +1)
 pass += str.charAt(char)
    
  }
  setPassword(pass)
},[length,numberAllowed,charAllowed])
useEffect(()=>{
  GeneratePassword()

},[length,charAllowed,numberAllowed])
const copyPassword=()=>{
  window.navigator.clipboard.writeText(Password)
  PasswordRef.current?.select()
}


  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-fuchsia-950 text-orange-500'>
   <h1 className='text-center'>Password Generator</h1>
   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
   <input
   type='text'
   value={Password}
  className='outline-none w-full py-1 px-3'
   placeholder='password'
   readOnly
   ref={ PasswordRef}
   />
  


   <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
   </div>
   <div className='flex text-sm gap-x-2'>
   <div className='flex items-center gap-x-1'>
   <input type='range'
   min={6}
   max={100}
   value={length}
   className='cursor-pointer'
   onChange={(e)=>setlength(e.target.value)}
   name=''
   id=''
   />
   <label htmlFor='length'>Length:{length}</label>
   </div>
   </div>
   <div className='flex text-sm gap-x-2'>
   <div className='flex items-center gap-x-1'>
   <input type='checkbox'
   defaultChecked={numberAllowed}
   onChange={()=>{
    setnumberAllowed((prev)=>!prev)
   }}
   name=''
   id=''/>
   <label htmlFor='number'>Number</label>

  
   </div>
   <div className='flex items-center gap-x-1'>
   <input type='checkbox'
   defaultChecked={charAllowed}
   onChange={()=>{
    setcharAllowed((prev)=>!prev)
   }}
   name=''
   id=''/>
   <label htmlFor='charInput'>character</label>
  
   
  
   </div>
   </div>
   
   </div>
    
   
  )
}

export default App