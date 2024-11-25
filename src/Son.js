
import React from "react";
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
            </div>
        )
    }
}
export default Son
