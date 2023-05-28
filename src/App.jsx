import Title from './Title';
import Input from './Input';
import Display from './Display'; 
import { useState } from 'react'


export default function App() {
let [amount , setAmount] = useState(null);
return (
  <div className='flex flex-col lg:flex-row h-screen justify-evenly '>
    <div className='mt-24 mx-auto lg:mx-0 lg:mt-40'>
        <Title/>
        <Input setAmount={setAmount}/>
        <Display amount={amount} />
    </div>
    <div className='mt-16 mx-auto lg:mx-0 lg:mt-40'>
      <img src='calculate.svg' className='w-56 md:w-64 h-48' alt='image' />
    </div>
   
  </div>
)

}
// sm:max-w-md ml-4 md:max-w-xl lg:max-w-2xl md:mx-auto