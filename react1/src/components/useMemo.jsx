import { useMemo,useState } from "react";

export default function Test() {
    let [demo,setDemo]=useState(10);
    // useMemo类似于计算属性 具有缓存性
    // let newWord = demo*2;
    // 一定要判断场景 使用useMemo 有的场景使用耗性能
    let newWord=useMemo(()=>demo*2,[demo])
    return(
        <div>
            <p>{newWord}</p>
        </div>
    )
}