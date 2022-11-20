import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import heroDesktop from "../images/image-hero-desktop.png";
import heroMobile from "../images/image-hero-mobile.png";
import DatabizLogo from "../images/client-databiz.svg";
import AudiophileLogo from "../images/client-audiophile.svg";
import MeetLogo from "../images/client-meet.svg";
import MakerLogo from "../images/client-maker.svg";

const Home = () => {
  return (
    <Container className="my-md-5">
      <Row  className=" d-flex justify-content-between align-items-center flex-md-row-reverse g-5">
        <Col xs={12} md={5} className="p-0">
          <picture>
            <source media="(min-width:600px)" srcSet={heroDesktop} />
            <img src={heroMobile} alt="hero" className="img-fluid" />
          </picture>
        </Col>
        <Col
          xs={12}
          md={7}
          className="text-md-start text-center align-self-end "
        >
          <span className="title">
            <span className="d-md-block"> Make </span> remote work
          </span>
          <p className="text-muted">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <Button className="btn-home my-md-5">Learn more</Button>

          <Row className=" mt-5">
            <Col xs={3}><img className="me-md-4 me-2 img-fluid" src={DatabizLogo} alt="Databiz" /></Col>
            <Col xs={3}><img className="me-md-4 me-2 img-fluid" src={AudiophileLogo} alt="Audiophile"/></Col>
            <Col xs={3}><img className="me-md-4 me-2 img-fluid" src={MeetLogo} alt="Meet" /></Col>
            <Col xs={3}><img className="me-md-4  me-2 img-fluid" src={MakerLogo} alt="Maker" /></Col>
          </Row>
        </Col>
      </Row>

      <div className="attribution mt-5">
        {"Challenge by "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          {"Frontend Mentor "}
        </a>
        Coded by <a href="https://github.com/ali-ezzat-dawy">Ali Ezzat</a>
      </div>
    </Container>
  );
};

export default Home;
// {} ( )
