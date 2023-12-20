import { useEffect, useState } from "react";

function MainItem({name,age}){
    useEffect(()=>{
        return(
            // 3.组件销毁前之前
            // 这里返回回调 会在组件卸载前执行
            // 处理一些冗余的
            console.log("卸载组件")
        )
    },[])
    return(
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
        </div>
    )
}

function Test({name="Fujii"}){
    let [msg,setMsg]=useState("这是一个关键信息");
    // 1.在每次组件渲染时就会调用  执行一些副作用代码
    // 格式：useEffect(()=>{副作用代码})
    // useEffect(()=>{
    //     console.log("展示副作用")
    // })

    // 2.代表生命周期 componentDidMount 挂载后
    // 例如这里点击button调用setMsg("新的信息") 2.不会再展示而1.会
    // useEffect(()=>{
    //     console.log("组件渲染")
    // },[])

    // 4.监听state或者props发生变化 （组件初次渲染时也会发生监听事件）
    // []中括号里放监听
    useEffect(()=>{
        // console.log("名字发生变化了")
        console.log("信息发生变化了")
    },[msg,name])

    return(
        <div>
            <h3>useEffect</h3>
            <p>副作用</p>
            {/* 第4种时注释掉的 */}
            {/* 1.2. */}
            {/* <p>{msg}</p>
            <button onClick={()=>{
                setMsg("新的信息")
            }}>button</button> */}

            {/* 3. */}
            {/* <div>
                <MainItem name={"Fujii"} age={26}></MainItem>
            </div> */}

            {/* 4. */}
            <div>
                {name}
            </div>
            <p>{msg}</p>
            <button onClick={()=>{
                setMsg("新的信息")
            }}>button</button>
        </div>
    )
}

export default Test;