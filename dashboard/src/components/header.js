import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { Link } from 'react-router-dom'
import './header.css';

const Header = ({title}) => {
  return (
    <div className="header">
      <Row>
        <Col md={8}>
          <h1>{title}</h1>
        </Col>
        <Col md={4}>
          <ButtonToolbar>
            <Link to="/">
              <Button variant="primary">Home</Button>
            </Link>
            &nbsp;&nbsp;
            <Link to="/newSecurityScanResults">
              <Button variant="primary">Scan</Button>
            </Link>
          </ButtonToolbar>
        </Col>
      </Row>
    </div>
  );
}

export default Header
