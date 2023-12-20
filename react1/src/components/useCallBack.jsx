import { useCallback,useState,useEffect } from "react";
// props中自带一个children属性 在react中
function Main({children,onClick}){
    // 副作用
    useEffect(()=>{
        console.log("changed")
    })
    return(
        <button onClick={onClick}>{children}</button>
    )
}
// useCallback 做缓存 缓存一个函数
export default function TestUseCallBack(){
    let [word,setWord]=useState("一个普通文本");
    // function handleClick(){
    //     setWord("这是一个新闻本1")
    // }
    const handleClick = useCallback(()=>setWord("这是一个新闻本2"))
    return(
        <div>
            <p>{word}</p>
            <Main onClick={handleClick}>修改内容</Main>
        </div>
    )
}