import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Row>
        <Col md={8}>
          <h1> Security Scan Results </h1>
        </Col>
        <Col md={4}>
          <Link to="/"> Home </Link> |
          <Link to="/newSecurityScanResults"> New Scan </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Header
