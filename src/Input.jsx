import {useState} from 'react'

function Input({setAmount}){
  let [num,setNum] = useState(null);
  
  let handleSubmit=(e)=>{
     e.preventDefault();
     let unit = [200, 150, 100, 75, 50, 30, 1];
     let rate = [125, 120, 110, 90, 70, 50, 35];
     let usedunit = [50, 50, 25, 25, 20, 30];

     let u = unit.find(i => num > i);
     let j = unit.indexOf(u);
     let amount = (num - u) * rate[j];

     let i = j + 1;
     for (i; i < unit.length; i++) {
      amount += rate[i] * usedunit[j];
      j++;
      }
     
     
     setAmount(amount);
    
  }

  return(
    <div className='mt-9'>
      <form onSubmit={handleSubmit}>
       <input type='number' placeholder='Enter Unit...' className='w-52 h-11 p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:border-blue-500' value={num} onChange={(e)=>setNum(e.target.value)}/>
      </form>
    
    
    </div>
  )
}
export default Input