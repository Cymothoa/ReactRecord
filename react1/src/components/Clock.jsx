import { useEffect, useState } from "react";
export default function Clock({title="北京时间"}){
    let [now,setNow]=useState(new Date());
    useEffect(()=>{
        let timer;
        timer = setInterval(()=>{
            setNow(new Date())
        },1000);
        return()=>{
            clearInterval(timer)
        };
    },[])
    return(
        <div>
            <p>{title||"当前时间"}:{now.toLocaleString()}</p>
        </div>
    )
}