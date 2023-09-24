import React from 'react';

export default function Contact({ color }) {
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
                type="text"
                placeholder="Hi Sarah..."
                style={{ height: '' }}
                rows={'5'}
              ></textarea>
            </div>
          </li>
          <li id="submit">
            <input type="submit" />
          </li>
        </ul>
      </form>
    </div>
  );
}
