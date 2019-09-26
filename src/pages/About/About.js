import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.testChange = this.testChange.bind(this);
    
    this.state = {
      value: '',
      us: ['Miami', 'Los Angeles', 'Chicago'],
      fr: ['Paris', 'Marseille', 'Toulouse'],
      sp: ['Madrid', 'Barcelona', 'Valencia']
    };


  }
  handleClick() {
    console.log('Click happened');
  }

  selectChange(event) {
     console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  testChange(event) {
    console.log(event.target.value);
    if (event.target.value === "2") {
      console.log(this.state.us);
    }
  }


  render() {
    return (

      <div className="container">
          <h1>About page</h1>

          <button onClick={this.handleClick}>Click Me</button>
  
          <input type="text" value={this.state.value} onChange={this.selectChange} />

          <p>{this.state.value}</p>

          <select onChange={this.testChange}>
            <option disabled defaultValue>Country</option>
            <option>USA</option>
            <option>France</option>
            <option>Spain</option>
          </select>

          <select id="city">
            <option>Cities</option>
          </select>
  
      </div>
  
    );
  }
}

export default About;