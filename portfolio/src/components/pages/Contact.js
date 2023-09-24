import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <form>
        <ul>
          <li>
            Name: <input type="text" placeholder="Your Name" />
          </li>
          <li>
            Email:
            <input type="email" placeholder="youremail@example.com" />
          </li>
          <li id="description">
            <input type="text" placeholder="Hi Sarah..." />
          </li>
          <li id="submit">
            <input type="submit" />
          </li>
        </ul>
      </form>
    </div>
  );
}
