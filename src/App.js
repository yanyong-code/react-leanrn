import logo from './logo.svg';
import './App.css';
import React from 'react'
import Son from "./Son";

// PureComponent 可以解决相同的状态重复更新问题
class App extends React.PureComponent {

    // 定义响应式数据
    state = {
        inputValue: ""
    }


    render() {
        return <div className="App">
            I am App
            <Son sonMsg={"App 2 Son"}></Son>
        </div>
    }
}

export default App;
