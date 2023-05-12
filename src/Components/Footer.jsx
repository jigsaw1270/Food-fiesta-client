import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
            voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">Home</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Login</a>
            </li>
            <li>
              <a href="#!" className="text-dark">About</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Register</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">Social Media</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-dark">
                <FaGithub className="me-2" />
                Github
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                <FaLinkedin className="me-2" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center p-3 bg-dark text-white">
      © 2023 Your Company
    </div>
  </footer>
  );
};

export default Footer;



