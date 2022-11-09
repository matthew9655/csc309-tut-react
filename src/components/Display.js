import React from 'react';
import './Display.css';

class Display extends React.Component {
    render() {
        let res = this.props.result;
        return (
            <div className="result">
                <p>{res}</p>
            </div>
        );
    }
}
export default Display;