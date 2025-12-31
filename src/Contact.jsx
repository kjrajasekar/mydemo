import { useContext, useEffect, useState } from "react"
import Home from "./Home"
 
const Contact=()=>{
 
    return (
        <div>
             
            <p>Contact comp  </p>
            <input type="text" onChange={(e)=>y(e.target.value)} />
            <button onClick={()=>{y("arun")}}>click me</button>
           
        </div>
    )
}
export default Contact