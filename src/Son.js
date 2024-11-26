
import React from "react";

import proptyes from "proptypes";
import './Son.css';

class Son extends React.PureComponent {


    state = {
        sonMes:"Hello son"
    }

    render() {
        return (
            <div className="son">
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
