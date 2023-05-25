import React from 'react'

function Display({amount}){
 
  return (
    <>
      {amount > 0  ? <div className='mt-8 border-l-4 border-l-green-500 bg-green-200 w-60 h-12 p-3'>Your Amount is {amount} kyats.</div>
   : null}
     </>  
  )
}
export default Display