import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
    constructor () {
      super()
      this.state = {
        isHidden: true
      }
    }
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    render () {
      return (
        <div>
          <button onClick={this.toggleHidden.bind(this)} >
            Click to show modal
          </button>
          {!this.state.isHidden && <Child />}
        </div>
      )
    }
  }
  
  const Child = () => (
    <div className={styles.module}>
        Hello, World!
    </div>
  )

  
  export default Searchbar;