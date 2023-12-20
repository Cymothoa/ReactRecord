// Hooks 16.8版本后引入的一个钩子
// 主要解决：函数组件中数据修改
import { useState } from "react";

// function Demo(){
//     // hooks钩子写在函数组件顶部
//     // 可以定义多个钩子
//     let [name,setName]=useState("Kaze");
//     let [age,setAge]=useState(26);
//     return(
//         <div>
//             <p>Fujii {name}</p>
//             <p>{age}</p>
//             <button onClick={()=>{
//                 setName(":)")
//                 setAge("长得像四十")
//             }}>change</button>
//         </div>
//     )
// }
function Demo(){
    let [user,setUser]=useState({
        neme:'Kaze',
        age:26,
    })
    return(
        <div>
            <p>Fujii {user.neme}</p>
            <p>{user.age}</p>
            <button onClick={()=>{
                setUser({...user,neme:":)",age:40})
                console.log(user);
            }}>change</button>
        </div>
    )
}
export default Demo;