import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.testChange = this.testChange.bind(this);
    
    this.state = {
      value: '',
      option: ''
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
    if (event.target.value === "fr") {
      this.setState({ option: "<option>Paris</option><option>Marseille</option><option>Toulouse</option>" });
    }
    if (event.target.value === "us") {
      this.setState({ option: "<option>Miami</option><option>Los Angeles</option><option>Chicago</option>" });
    }
    if (event.target.value === "sp") {
      this.setState({ option: "<option>Madrid</option><option>Barcelona</option><option>Valencia</option>" });
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
            <option defaultValue>Country</option>
            <option value="us">USA</option>
            <option value="fr">France</option>
            <option value="sp">Spain</option>
          </select>

          <select id="city">
            {/* <option>Cities</option> */}

            {this.state.option}
          </select>
          {this.state.option}
      </div>
  
    );
  }
}

export default About;