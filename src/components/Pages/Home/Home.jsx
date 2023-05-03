import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="carousel-field">
          <img
            className="d-block w-100 carousel-img"
            src="https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=1480&t=st=1683089060~exp=1683089660~hmac=8fcedd522d267c00013c9238cc95fa85ad1a9e81912aec3983f9e48bb66b7c99"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-field">
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/coffee-beans-with-props-making-coffee_1220-4536.jpg?w=1380&t=st=1683089131~exp=1683089731~hmac=5a2f155c5fa4f7cf6cc97d15fb6b0b326faeb5726323ba0a027cf9142fdcf08a"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-field">
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/healthy-lunch-go-packed-lunch-box_1220-4541.jpg?w=1380&t=st=1683089189~exp=1683089789~hmac=cf53fc4750061b3600a3e99abc665aadcf058fd1aa12d2425bff428f5dc38a0b"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
