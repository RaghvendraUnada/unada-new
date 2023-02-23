import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import { config } from "react-spring";
import CaraImg from "../../assets/Images/MetaVerse/CaraImg1.svg";
export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    // showNavigation: true,
    config: config.gentle,
  };

  slides = [
    {
      key: 1,
      content: (
        <img
          src={CaraImg}
          alt="1"
          style={{
            height: "auto",
            width: "100%",
            borderRadius: "20px",
          }}
        />
      ),
    },
    {
      key: 2,
      content: (
        <img
          src={CaraImg}
          alt="2"
          style={{
            height: "auto",
            width: "100%",
            borderRadius: "20px",
          }}
        />
      ),
    },
    {
      key: 3,
      content: (
        <img
          src={CaraImg}
          alt="3"
          style={{
            height: "auto",
            width: "100%",
            borderRadius: "20px",
          }}
        />
      ),
    },
    {
      key: 4,
      content: (
        <img
          src={CaraImg}
          alt="4"
          style={{
            height: "auto",
            width: "100%",
            borderRadius: "20px",
          }}
        />
      ),
    },
    {
      key: 5,
      content: (
        <img
          src={CaraImg}
          alt="5"
          style={{
            height: "auto",
            width: "100%",
            borderRadius: "20px",
          }}
        />
      ),
    },
    {
      key: 6,
      content: (
        <img
          src={CaraImg}
          alt="6"
          style={{
            height: "auto",
            width: "100%",
            borderRadius: "20px",
          }}
        />
      ),
    },
    {
      key: 7,
      content: (
        <img
          src={CaraImg}
          alt="7"
          style={{
            height: "auto",
            width: "100%",
            borderRadius: "20px",
          }}
        />
      ),
    },
    {
      key: 8,
      content: (
        <img
          src={CaraImg}
          alt="8"
          style={{
            height: "auto",
            width: "100%",
            borderRadius: "20px",
          }}
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          // showNavigation={true}
          animationConfig={"slow"}
        />
      </div>
    );
  }
}
