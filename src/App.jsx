// // function App(){
// //   return(
// //     <div className="app">
// //       <h1>Hello</h1>
// //       <h1>Welcome</h1>
// //     </div>
// //   )
// // }
// // export default App;

// const App = ()=>{
//   return(
//         <div className="app">
//           <h1>Hello</h1>
//           <h1>Welcome</h1>
//         </div>
//       )
// }

// export default App

// import React from 'react'

// const App = () => {
//   return (
//      <div className="app">       
//       <h1>Hello</h1>
//       <h1>Welcome</h1>
//      </div>
//   )
// }

// export default App
const cardDetails = [{
  cardTitle:"",
  cardImage:"",
  cardText:""
},{
  cardTitle:"",
  cardImage:"",
  cardText:""
},{
  cardTitle:"",
  cardImage:"",
  cardText:""
}]

import React from 'react'
import Button from './Button'

const App = () => {
  const btnValue = ["Click","Submit","Login"]
  return (
    <div className='App'>
      {btnValue.map((item)=>(<Button value = {item}/>))}
      
    </div>
  )
}

export default App