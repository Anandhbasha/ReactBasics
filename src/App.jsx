// // // function App(){
// // //   return(
// // //     <div className="app">
// // //       <h1>Hello</h1>
// // //       <h1>Welcome</h1>
// // //     </div>
// // //   )
// // // }
// // // export default App;

// // const App = ()=>{
// //   return(
// //         <div className="app">
// //           <h1>Hello</h1>
// //           <h1>Welcome</h1>
// //         </div>
// //       )
// // }

// // export default App

// // import React from 'react'

// // const App = () => {
// //   return (
// //      <div className="app">       
// //       <h1>Hello</h1>
// //       <h1>Welcome</h1>
// //      </div>
// //   )
// // }

// // export default App
// const cardDetails = [{
//   cardTitle:"",
//   cardImage:"",
//   cardText:""
// },{
//   cardTitle:"",
//   cardImage:"",
//   cardText:""
// },{
//   cardTitle:"",
//   cardImage:"",
//   cardText:""
// }]

// import React from 'react'
// import Button from './Button'

// const App = () => {
//   const btnValue = ["Click","Submit","Login"]
//   return (
//     <div className='App'>
//       {btnValue.map((item)=>(<Button value = {item}/>))}
      
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)
  // let [count,setCount] = useState(0)
  const [bg,setBg] = useState("dark")

  useEffect(()=>{
    console.log("UseEffect is working");
    
  },[count])
  const countClick =()=>{
    setCount((curr)=>++curr)
    // setCount(++count)
    console.log(count);
    
  }
  const bgChange = ()=>{
    setBg(bg==="dark"?"light":"dark")
  }
  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={countClick}>Count</button>
      <button onClick={bgChange} style={{backgroundColor:bg==="dark"?"black":"white",color:bg==="dark"?"white":"black"}}>{bg}</button>
    </div>
  )
}

export default App