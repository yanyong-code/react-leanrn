
import React from "react";

import proptyes from "proptypes";
import sonCss from './Son.module.css';

import classnames from 'classnames/bind'
// 如果需要配合模块化,需要引入bind
let sonBind = classnames.bind(sonCss)
;
console.log(sonCss)
// 组件名-module.css 可以定义为组件CSS
class Son extends React.PureComponent {
    state = {
        sonMes:"Hello son"
    }
    render() {
        return (
            <div className={sonBind({
                son: true,
                son1: true
            })}>
               son
            </div>
        )
    }
}

// 类型验证 可以借用proptypes 库
Son.propTypes = {
    // sonMes: proptyes.string,
    a: function () {

    }
}
// 默认值
Son.defaultProps = {
    sonMes: "I am default"
}
export default Son
