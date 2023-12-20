import { Component } from "react";
import "./Table.css"
class Table extends Component {
    state={
        data:[
            {
                score:[90,90,100],
                bonus:1500,
                name:"高聪慧"
            },
            {
                score:[40,92,10],
                bonus:500,
                name:"高大壮"
            },
            {
                score:[99,9,95],
                bonus:600,
                name:"高晓松"
            },
            {
                score:[90,90,100],
                bonus:800,
                name:"高德纲"
            },
        ]
    }
    sortData(){
        return this.state.data.sort((a,b)=>b.bonus-a.bonus)
    }
    newTable(){
        var data = this.sortData(this.state.data);
        return data.map((item,index)=>{
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    {item.score.map((a,b)=><td key={b}>{a}</td>)}
                    <td>{item.score.reduce((c,d)=>c+d)}</td>
                    <td>{item.bonus}</td>
                </tr>
            )
        });
    }
    render() {
        return (
            <div>
                <table className="sell">
                    <thead>
                        <tr>
                            <th>名次</th>
                            <th>名字</th>
                            <th colSpan={3}>分数</th>
                            {/* <th></th>
                        <th></th> */}
                            <th>总分</th>
                            <th>奖金</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>第一名</td>
                            <td>高小花</td>
                            <td>90</td>
                            <td>90</td>
                            <td>100</td>
                            <td>280</td>
                            <td>200</td>
                        </tr> */}
                        {this.newTable()}
                        <tr>
                            <td colSpan={6}>高老庄奖金总计</td>
                            <td>{this.state.data.reduce((a,b)=>a+b.bonus,0)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table;