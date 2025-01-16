import "./App.css";
import {useState} from 'react';

function App() {

  const[newValue,setValue]=useState(0);
  function decreaseHandler(){
    setValue(newValue-1)
  }
  function increaseHandler(){
    setValue(newValue+1)
  }
  function resetHandler(){
    setValue(0);
    console.log("submit button clicked")
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-5">

      <div className="text-[#0398d4] text-2xl">Increment and Decrement</div>

      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button className="border-r-2 text-center w-20 border-[]#bfbfbf text-5xl" onClick={decreaseHandler}> - </button>
        <div className="font-bold gap-12 text-5xl"> {newValue}</div>
        <button className="border-l-2 text-center w-20 border-[]#bfbfbf text-5xl" onClick={increaseHandler}> + </button>
      </div>

      <button className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg" onClick={resetHandler} type="button">Reset</button>
      
    </div>
  );
}

export default App;
