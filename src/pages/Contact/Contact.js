import React from 'react';
import Button from '../../components/UI/Button';

function Contact() {
  return (
    <div className="text-center">
        <h1>Contact page</h1>
        <Button btnType="Success" disabled={false}>ORDER</Button>
    </div>
  );
}

export default Contact;