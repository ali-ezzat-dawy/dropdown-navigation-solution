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
    <header className="py-md-5">
      <Container>
        <Row className=" d-flex justify-content-around flex-md-row-reverse g-5">
          <Col xs={12} md={4} className="p-0">
            <picture>
              <source media="(min-width:600px)" srcSet={heroDesktop} />
              <img src={heroMobile} alt="hero" className="img-fluid" />
            </picture>
          </Col>
          <Col
            xs={12}
            md={5}
            className="text-md-start text-center align-self-end "
          >
            <h1 className="title">
              <span className="d-md-block"> Make </span> remote work
            </h1>
            <p className="text-muted my-4">
                Get your team in sync, no matter your location.
              <br/>
                Streamline processes, create team rituals, and
                <br/>
              watch productivity soar.
            </p>
            <Button className="btn-home">Learn more</Button>
            <Row className=" mt-5 d-flex justify-content-between me-md-5">
              <Col xs={3} md={2}>
                <img
                  className="me-md-4 me-2 img-fluid"
                  src={DatabizLogo}
                  alt="Databiz"
                />
              </Col>
              <Col xs={3} md={2}>
                <img
                  className="me-md-4 me-2 img-fluid"
                  src={AudiophileLogo}
                  alt="Audiophile"
                />
              </Col>
              <Col xs={3} md={2}>
                <img
                  className="me-md-4 me-2 img-fluid"
                  src={MeetLogo}
                  alt="Meet"
                />
              </Col>
              <Col xs={3} md={2}>
                <img
                  className="me-md-4  me-2 img-fluid"
                  src={MakerLogo}
                  alt="Maker"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Home;
