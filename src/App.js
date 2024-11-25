import logo from './logo.svg';
import './App.css';
import React from 'react'

// PureComponent 可以解决相同的状态重复更新问题
class App extends React.PureComponent {

    // 定义响应式数据
    state = {
        inputValue: ""
    }


    render() {
        return <div className="App">
            <input value={this.state.inputValue} onInput={(e) => {
                this.setState({
                    inputValue: e.target.value
                })
                console.log(e.target.value)
            }}/>

            <div>
                <input type="checkbox" name="choose" value="c1" onChange={(e) => {
                    console.log(e.target.value)
                    console.log(e.target.checked)
                }}/>选项1
                <input type="checkbox" name="choose" value="c2" onChange={(e) => {
                    console.log(e.target.value)
                    console.log(e.target.checked)

                }}/>选项2
                <input type="checkbox" name="choose" value="c3" onChange={(e) => {
                    console.log(e.target.value)
                    console.log(e.target.checked)

                }}/>选项3
            </div>
        </div>
    }
}

export default App;
