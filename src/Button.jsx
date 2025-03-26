// import React from 'react'

// const Button = (props) => {
//   return (
//     <div className='button'>
//         <button>{props.value}</button>
//     </div>
//   )
// }

// export default Button
import React from 'react'

const Button = ({value}) => {
  return (
    <div className='button'>
        <button>{value}</button>
    </div>
  )
}

export default Button