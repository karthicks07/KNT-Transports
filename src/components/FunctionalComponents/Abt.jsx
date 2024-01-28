// import React, { useState } from "react"
// const Abt=()=>
// {
//     const[college,updateCollege]=useState(1)
//     const increment =()=>
//     {
//         updateCollege(college+1)
//     }
//     const decrement=()=>
//     {
//         if(college>0)
//         {
//             updateCollege(college-1)
//         }
//     }
//     return(
//         <div style={{height:"583px"}}>
//             <h1>This is {college}</h1>
//             <button onClick={increment}>Plus</button>
//             <button onClick={decrement}>Minus</button>
//         </div>
//     )
// }

// export default Abt

import { useReducer } from "react";
import { Link } from "react-router-dom";
const value = {count:0}
function countfunction(state,action)
{
    switch(action.type)
    {
        case 'sub':
            return {count:state.count-1}
        case 'add':
            return {count:state.count+1}
        case 'res':
            return {count:value.count=0}
        default:
            break
    }
}
const Abt=()=>
{
    const [countval,updatecount]=useReducer(countfunction,value)
    return(
        <div style={{height:"583px"}}>
            <h1>Under development🚧</h1>
            {/* <h2>Count : {countval.count}</h2>  
            <button onClick={()=> updatecount({type:"sub"})}>-</button>
            <button onClick={()=> updatecount({type:"add"})}>+</button>
            <button onClick={()=> updatecount({type:"res"})}>Reset</button>
            <br /><br /><br />
            <Link to="/useref"><button>useRef example</button></Link>
            <Link to="/memo"><button>useMemo example</button></Link> */}
        </div>
    )
}

export default Abt