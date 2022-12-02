import React from 'react';
import './Display.css';

class Display extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.hex}} className="result">
                <p>{this.props.result}</p>
            </div>
        );
    }
}
export default Display;