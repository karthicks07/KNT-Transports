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
/* <h1>This is about</h1>
<h2>Count : {countval.count}</h2>
<button onClick={()=> updatecount({type:"sub"})}>-</button>
<button onClick={()=> updatecount({type:"add"})}>+</button>
<button onClick={()=> updatecount({type:"res"})}>Reset</button>
<br /><br /><br />
<Link to="/useref"><button>useRef example</button></Link>
<Link to="/memo"><button>useMemo example</button></Link> 

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
}*/
// export default Abt
import React from "react"
import './css/About.css'
const Abt=()=>
{
    return(
        <div className="about">
           <h1 className="abouth1">About Us</h1>
           <div className="line">
        <div className="line11"></div>
        </div>
        <div className="abtmain">
            <div className="abtouter">
                <div className="abtinner">
                    <div className="cont1">
                    </div>
                    <div className="cont2">
                    <p>"With a rich legacy spanning over two decades in the tractor industry, our company has earned a reputation for excellence in providing a wide array of services tailored to meet the evolving needs of agricultural and construction sectors. From precision ploughing and efficient harvesting to meticulous rotavating and dependable transportation of construction materials, we have remained at the forefront of delivering quality solutions that drive productivity and success for our valued clients. Throughout our journey, we have cultivated strong relationships built on trust, reliability, and a steadfast commitment to exceeding expectations. Our team's collective expertise and unwavering dedication have been instrumental in delivering exceptional results, establishing us as a trusted partner in the industry." </p>
                    </div>
                </div>
                <div className="abtinner">
                <div className="cont2">
                <p>As we look towards the horizon, we envision expanding our business horizons to include trucking and logistics services. This strategic move is not only a testament to our adaptability but also a testament to our unwavering commitment to innovation and growth. By integrating trucking into our operations, we aim to offer end-to-end solutions that seamlessly connect the supply chain, ensuring efficiency, reliability, and unparalleled customer satisfaction. Our vision for the trucking business encompasses a holistic approach that prioritizes efficiency, sustainability, and customer-centricity. From optimizing routes and leveraging cutting-edge technology to implementing rigorous quality control measures, we are dedicated to setting new standards of excellence in the transportation industry.</p>
                </div>
                <div className="cont11">

                </div>
                </div>
            </div>
      </div>
        </div>
    )
}

export default Abt