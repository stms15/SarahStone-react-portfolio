import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact({ color }) {
  // Handle form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (value === '' || !value) {
      setErrorMessage(`Please complete the ${name} field.`);
    } else {
      setErrorMessage('');
    }

    if (name === 'name') {
      return setName(value);
    } else if (name === 'email') {
      return setEmail(value);
    } else if (name === 'description') {
      return setDescription(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    } else if ([name, email, description].some((el) => el === '')) {
      setErrorMessage('Please complete all fields before submitting.');
      return;
    }

    alert(`Message sent!`);
    setName('');
    setEmail('');
    setDescription('');
  };

  return (
    <div className="page" style={{ backgroundColor: color }}>
      <h2>Contact Me</h2>
      <form>
        <ul>
          <li>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '40%',
              }}
            >
              Name:
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                name="name"
                onChange={handleInputChange}
                style={{ height: '2em' }}
              />
            </div>
          </li>
          <li>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '40%',
              }}
            >
              Email:
              <input
                name="email"
                value={email}
                onChange={handleInputChange}
                type="email"
                placeholder="youremail@example.com"
                style={{ height: '2em' }}
              />
            </div>
          </li>
          <li id="description">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '40%',
              }}
            >
              <textarea
                name="description"
                value={description}
                onChange={handleInputChange}
                type="text"
                placeholder="Hi Sarah..."
                style={{ height: '' }}
                rows={'5'}
              ></textarea>
            </div>
          </li>
          <li>
            <i>{errorMessage}</i>
          </li>
          <li id="submit">
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
