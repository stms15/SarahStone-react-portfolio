import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <ul>
        <li>
          <img src="./assets/images/GitHub-icon.svg" alt="GitHub icon" />
          <a href="https://github.com/stms15" target="_blank">
            GitHub/stms15
          </a>
        </li>
        <li>
          <img src="./assets/images/LinkedIn-icon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/sarahtmstone/" target="_blank">
            LinkedIn/sarahtmstone
          </a>
        </li>
        <li>
          <img src="./assets/images/envelope.svg" alt="envelope icon" />
          <a href="#">stms15@mun.ca</a>
        </li>
      </ul>
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
