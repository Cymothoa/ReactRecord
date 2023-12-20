import { Component } from "react";

class Moon extends Component{
    state = {
        now:new Date(),
        timer:null,
    }
    // 挂载后
    componentDidMount(){
        this.start();
    }
    // 更新后
    componentDidUpdate(){}
    // 卸载前
    componentWillUnmount(){
        this.stop()
    }

    // 方法 开始计时
    start(){
        let now;
        let times;
        this.timer = times = setInterval(()=>{
            now = new Date()
            this.setState({
                now:now,
                timer:times
            })
        },1000)
    }
    // 停止计时
    stop(){
        clearInterval(this.state.timer)
        this.setState({
            timer:null
        })
    }
    handleClick = ()=>{
        if(this.state.timer){
            this.stop()
        }else{
            this.start()
        }
    }
    render(){
        return(
            <div>
                <p>最新时间：{this.state.now.toLocaleString()}</p>
                <button onClick={this.handleClick}>
                    {this.state.timer?"暂停":"开始"}
                </button>
            </div>
        )
    }
}
export default Moon;