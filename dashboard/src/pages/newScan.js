import React from 'react'
import Header from '../components/header'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

const NewScan = () => {

  return (
    <Container>
      <Header />
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="repositoryName">
            <Form.Label>Repository Name</Form.Label>
            <Form.Control type="text" placeholder="Enter repository name" />
          </Form.Group>

          <Form.Group as={Col} controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select">
              <option value=''>Select Status</option>
              <option value='queued'>Queued</option>
              <option value='progress'>In Progress</option>
              <option value='success'>Success</option>
              <option value='failure'>Failure</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="findings">
          <Form.Label>Findings</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="{}" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="queuedAt">
            <Form.Label>Queued At</Form.Label><br/>
            <DatePicker />
          </Form.Group>

          <Form.Group as={Col} controlId="queuedAt">
            <Form.Label>scanned At</Form.Label><br/>
            <DatePicker />
          </Form.Group>

          <Form.Group as={Col} controlId="queuedAt">
            <Form.Label>finished At</Form.Label><br/>
            <DatePicker />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default NewScan
