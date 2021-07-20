/*eslint-disable*/
import Link from "next/link";
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="12">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "} <Link href="#">APK Panel</Link>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
