import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {

  f1= (a,b, e)=> {
    console.log(a,b, e)
  }
  // ● 通过调用bind方法可以获取到一个调用方法
  // ● 通过匿名箭头函数
  // ● 方法本身写成箭头函数
  // 传参需要通过bind方法
  undefined
  render() {
    return <div className="App">
      {/*方法，也可以写一个方法或者匿名方法*/}
      <div onClick={this.f1.bind(this, 1, 2 )}>

      </div>
    </div>
  }
}

export default App;
