import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 把项目挂载到指定的dom中
// 把APP组件挂载到root页面上
// reactdom 把一个react组件从一个真正的dom，或者卸载真正的dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// 可以把组件卸载掉
setTimeout(() => {
    root.unmount();
}, 2000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
