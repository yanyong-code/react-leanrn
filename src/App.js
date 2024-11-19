import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {

  // 定义响应式数据
  state = {
    a: 0,
    obj : {
      c1: 111,
      c2: 133,
      c3: 122
    }
  }

  changeVal() {
    this.state.a = this.state.a + 1;
    // setState方法是异步执行的，如果需要获取到结果可以在第二个参数中写回调函数
    this.setState({
      a: 999,
      obj: {
        ...this.state.obj,
        c1: 2222
      }
    }, () => {
      console.log(this.state.obj.c1)
    })
    console.log(this.state.a)
  }
  render() {
    return <div className="App">
      <div>
        {this.state.a}
      </div>
      <button onClick={this.changeVal.bind(this)}>改变a</button>
      <div>
        {this.state.obj.c1}
      </div>
      <div>
        {this.state.obj.c2}
      </div>
      <div>
        {this.state.obj.c3}
      </div>
    </div>
  }
}
export default App;
