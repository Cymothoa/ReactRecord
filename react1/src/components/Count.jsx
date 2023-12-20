import { useState } from "react";

function Count(){
    let [count,setCount]=useState(0);
    function add(){
        setCount(count+1)
    }
    function sub(){
        setCount(count-1)
    }
    // function newAdd(){
    //     setCount(count+5)
    // }
    return(
        <div>
            <h3>计数器</h3>
            <p>初始值：{count}</p>
            <button onClick={add}>+1</button>
            <button onClick={sub}>-1</button>
            <br />
            {/* 直接一次性操作大数可能会报错 采用异步的方法 */}
            <button onClick={()=>{
                setCount((a)=>a+1)
                setCount((a)=>a+1)
                setCount((a)=>a+1)
                setCount((a)=>a+1)
                setCount((a)=>a+1)
            }}>+5</button>
        </div>
    )
}

export default Count;