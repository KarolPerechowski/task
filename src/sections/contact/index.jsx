import { useState } from 'react';
import FormInput from '../../components/formInput';
import contactModel from '../../models/Contact.model';
import './index.css';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, phone, service)
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <h2>{contactModel.heading}</h2>
          <p>{contactModel.text}</p>
        </div>
        <div className='contactForm'>
            <div className='nameInputs'>
              <FormInput onChange= {(e) => setFirstName(e.target.value)} type="text" placeholder='First Name'></FormInput>
              <FormInput onChange= {(e) => setLastName(e.target.value)} type="text" placeholder='Last Name'></FormInput>
            </div>
            <FormInput onChange= {(e) => setPhone(e.target.value)} type="tel" style={"full"} placeholder='Number Phone'></FormInput>
            <FormInput onChange= {(e) => setService(e.target.value)} type="text" style={"full"} placeholder='What Service are you interested in?'></FormInput>
          <a href="#" className="btn" type='submit' onClick={handleSubmit}>SUBMIT NOW</a>
        </div>
      </div>
    </div>
  )
};

export default Contact;
