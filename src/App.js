import React, { Component } from "react";
import ReactDOM from "react-dom";
  
class ReactClass extends Component {
    state = {
        isHeaderHidden: false,
        title: 'React test'
    }

    handleClick = () => {
        this.setState(prevState => ({
            isHeaderHidden: !prevState.isHeaderHidden
        }));
    }

    render () {
        const {
            isHeaderHidden
        } = this.state;

        if (isHeaderHidden) {
            return (
                <button className="btn btn-default" onClick={this.handleClick}>Toggle Header</button>
            );
        }
        
        return (
            <div>
                <h1 className="header">{this.state.title}</h1>
                <button className="btn btn-default" onClick={this.handleClick}>Toggle Header</button>
            </div>
        );
    }
};
  
ReactDOM.render(
    <ReactClass />, 
    document.getElementById("app")
);

export default ReactClass;
