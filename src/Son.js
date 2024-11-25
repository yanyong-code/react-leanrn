
import React from "react";

import proptyes from "proptypes";

class Son extends React.PureComponent {


    state = {
        sonMes:"Hello son"
    }

    render() {
        console.log(this.props)
        return (
            <div>

                I am Son
                <br/>
                {this.state.sonMes}
                <br/>
                {this.props.sonMes}
            </div>
        )
    }
}

// 类型验证 可以借用proptypes 库
Son.propTypes = {
    sonMes: proptyes.string,
    a: function () {

    }
}
// 默认值
Son.defaultProps = {
    sonMes: "I am default"
}
export default Son
