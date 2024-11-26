import logo from './logo.svg';
import './App.css';
import React from 'react'
import Son from "./Son";

// PureComponent 可以解决相同的状态重复更新问题
class App extends React.PureComponent {

    // 定义响应式数据
    state = {
        sonMsg: "I am son"
    }

    changeMsg(msg) {
        console.log(msg)
        this.setState({
            sonMsg: msg
        })
    }

    render() {
        return <div className="App">
            <div className="father" style={
                {
                    fontSize: "24px"
                }
            }>
                father
            </div>
            <Son>
            </Son>
        </div>
    }
}

export default App;
