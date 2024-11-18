import logo from './logo.svg';
import './App.css';
import React from 'react'

// jsx和react是互相独立的
function App() {
  // 新版本的-vue3的组合式api
  // React.createElement 也可以创建，创建的div和jsx编写的编译出来的是一样的
  // 首字母一定要用大写，不是大写就会被认为是一个方法 FnlHello实际上是一个React Element
  function FnlHello() {
    return React.createElement('div', [], 'hello')
  }

  //老版本的-vue2选项api
  class ClassHello extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return <div>hello Class </div>
    }
  }
  let fnlHello = <FnlHello></FnlHello>
  return (
    <div className="App">
      <FnlHello></FnlHello>
      <ClassHello></ClassHello>
    </div>
  );
}

export default App;
