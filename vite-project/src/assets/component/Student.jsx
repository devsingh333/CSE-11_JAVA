import React from 'react'

function Student(props) {
  return (
    <div>

        <h1>Student Information</h1>
        <h3>Name is {props.name}</h3>
        <p>Age is {props.age}</p>
        <p>Marks {props.marks} </p>

    </div>
  )
}

// or

// function Student({name,age}) {
//   return (
//     <div>
//       <h1>Name is {props.name}</h1>
//       <p>Your age is {props.age}</p>
//     </div>
//   )
// }



export default Student
