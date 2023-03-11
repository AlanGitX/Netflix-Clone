import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="Brand">
          <img
            alt=""
            src="https://play-lh.googleusercontent.com/sgletkipb323N6ZJ024VqFXggiHn4VAKcfIX3AFOkd16m8Ot3GB4Hbp-8XbtGbx3QQ=rw"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          Sflix
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
