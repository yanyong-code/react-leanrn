import logo from './logo.svg';
import './App.css';
import React from 'react'

// PureComponent 可以解决相同的状态重复更新问题
class App extends React.PureComponent {

  // 定义响应式数据
  state = {
    a: 0,
    obj : {
      c1: 111,
      c2: 133,
      c3: 122
    },
    arr: [1,2,3]
  }

  changeVal() {
    this.state.a = this.state.a + 1;
    // setState方法是异步执行的，如果需要获取到结果可以在第二个参数中写回调函数
    this.state.arr.push(4)
    // 数组和对象-》 判断是否改变 -》 内存地址判断的
    this.setState({
     arr: this.state.arr
    }, () => {
      console.log(this.state.arr)
    })
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
      数组
      <div>
        {this.state.arr}
      </div>
    </div>
  }
}
export default App;
