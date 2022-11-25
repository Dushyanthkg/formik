// import React,{Fragment, useState} from 'react'
// import JSON from "./db.json"

// const Apifetch =  () => {
// let [state,Usestate]=useState(JSON)



//   return (
//     <div>
//       {
//         state.map((val,i)=>{
//             return(
//                 <Fragment key={i+1}>
//                     <h1>{val.title}</h1>
//                     <h1>{val.place}</h1>
//                 </Fragment>
//             )
//         })
//       }
//     </div>
//   )
// }

// export default Apifetch



// import React, { Fragment } from 'react'
// import { useState } from 'react';

// const Apifetch = () => {
//     let [state,setState]=useState([])

//     let fetchdata=async()=>{
//         let data=await window.fetch("https://api.github.com/users")
//         let fdata=await data.json()
//         setState(fdata)
//         console.log(fdata)
//     console.log(state);
//     }
//     fetchdata()
//   return (
//     <div>
//         {
//           state.map((val,i)=>{
//             return(

//                 <Fragment key={i+1}>

//                   <h1>{val.login}</h1>
//                   <img src={val.avatar_url} alt="" />
                
//                 </Fragment>
                
//             )
//           })
//         }
//     </div>
//   )
// }

// export default Apifetch


import React, { Component } from 'react'

export default class Apifetch extends Component {
    state={
        github:[]
    }
 render() {
    let fetchdata= async()=>{
        let  data=await window.fetch("https://api.github.com/users")
        let fdata=await data.json()
        console.log(fdata);
        this.setState({github:this.state.github.fdata})
        console.log(this.state.github);
       }
       fetchdata()
       
    return (
      <div>
         {
           this.state.github.map((val,i)=>{
            return(
                <h1>{val.login}</h1>
            )
           })
         }
            
      </div>
    )
  }
}









