import React, { Component } from 'react';
import styles from './Contact.module.css';
//import Button from '../../components/UI/Button';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className={styles.contactPage}>
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col">
              <form onSubmit={this.handleSubmit}>
                <label for="fullName">Full Name</label>
                <div className="inputContainer">
                    <i className="fas fa-user-friends icon aubergine"></i>
                    <input className="inputAubergine" type="text" placeholder="Full name" id="fullName" name="name" />
                </div>
                <label for="email">Email</label>
                <div className="inputContainer">
                    <i className="fas fa-at icon aubergine"></i>
                    <input className="inputAubergine" type="email" placeholder="Email" id="email" name="name" />
                </div>
                <label for="message">Message</label>
                <textarea className="textareaAubergine" name="subject" placeholder="Write your message here..." id="message"></textarea>
                <input className="button aubergine" type="submit" value="Submit" />
              </form>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

// function Contact() {
//   return (
//     <div className="container">
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//       <br/>
//       <div className="text-center">
//           <h1>Contact page</h1>
//           <Button btnType="Danger" disabled={false}>ORDER</Button>
//       </div>


//     </div>
//   );
// }

// export default Contact;