import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          working: false
        };
      }
    handleClick = () => {
        this.setState({ working: !this.state.on })
    };
  render() {
    const light = this.state.on ? 'on' : 'off';
    return (
      <div className="Lamp">
        <button 
        onClick={this.handleClick}
        className={light}
        >
        {light.toUpperCase()}
        </button>
        <figure className={light} />
      </div>
    );
  }
}

export default Lamp;