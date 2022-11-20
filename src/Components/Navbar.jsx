import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar as NavbarBs,
  NavDropdown,
  Button,
  Offcanvas,
} from "react-bootstrap";
import "./Navbar.css";
import Logo from "../images/logo.svg";
import ArrowDown from "../images/icon-arrow-down.svg";
import ArrowUp from "../images/icon-arrow-up.svg";
import Todo from "../images/icon-todo.svg";
import Calendar from "../images/icon-calendar.svg";
import Reminders from "../images/icon-reminders.svg";
import Planning from "../images/icon-planning.svg";

const Navbar = () => {
  const [featuresIcon, setFeaturesIcon] = useState(false);
  const [companyIcon, setCompanyIcon] = useState(false);

  const handleFeaturesIcon = () => {
    setFeaturesIcon(!featuresIcon);
  };
  const handleCompanyIcon = () => {
    setCompanyIcon(!companyIcon);
  };

  return (
    <>
      {["lg"].map((expand) => (
        <NavbarBs
          key={expand}
          expand={expand}
          className="py-md-4 nav-bg"
        >
          <Container fluid>
            <NavbarBs.Brand className=" me-md-5">
              <img src={Logo} alt="Logo" />
            </NavbarBs.Brand >
            <NavbarBs.Toggle
              className="border-0"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <NavbarBs.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1">
                  <NavDropdown
                    onClick={handleFeaturesIcon}
                    title={
                      <span>
                        Features
                        {featuresIcon ? (
                          <img className="ms-2" src={ArrowUp} alt="Logo" />
                        ) : (
                          <img className="ms-2" src={ArrowDown} alt="Logo" />
                        )}
                      </span>
                    }
                  >
                    <NavDropdown.Item>
                      <img className="me-3" src={Todo} alt="Todo" />
                      Todo List
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <img className="me-3" src={Calendar} alt="Calendar" />
                      Calendar
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <img className="me-3" src={Reminders} alt="Reminders" />
                      Reminders
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <img className="me-3" src={Planning} alt="Planning" />
                      Planning
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    onClick={handleCompanyIcon}
                    title={
                      <span>
                        {"Company"}
                        {companyIcon ? (
                          <img className="ms-2" src={ArrowUp} alt="Logo" />
                        ) : (
                          <img className="ms-2" src={ArrowDown} alt="Logo" />
                        )}
                      </span>
                    }
                  >
                    <NavDropdown.Item>History</NavDropdown.Item>
                    <NavDropdown.Item>Our Team</NavDropdown.Item>
                    <NavDropdown.Item>Blog</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>Careers</Nav.Link>
                  <Nav.Link> About</Nav.Link>
                </Nav>
                <Nav>
                  <Button className="btn-login me-md-3">Login</Button>
                  <Button className="btn-register">Rigister</Button>
                </Nav>
              </Offcanvas.Body>
            </NavbarBs.Offcanvas>
          </Container>
        </NavbarBs>
      ))}
    </>
  );
};

export default Navbar;
