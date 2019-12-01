import React, { useState } from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import DatePicker from 'react-datepicker'
import { submitSecurityScanReport } from '../actions/index'

import "react-datepicker/dist/react-datepicker.css"

const NewScan = ({submitSecurityScanReport}) => {

  const [validated, setValidated] = useState(false)

  const submitForm = (event, params) => {
    const form = event.currentTarget
    if (form.checkValidity() === false)
      event.stopPropagation()
    else
      submitSecurityScanReport(params)

    setValidated(true)
    event.preventDefault()
  }

  const [repositoryName, setRepositoryName] = useState('')
  const [status, setStatus] = useState('')
  const [findings, setFindings] = useState('')
  const [queuedAt, setQueuedAt] = useState(new Date())
  const [scanningAt, setScanningAt] = useState(new Date())
  const [finishedAt, setFinishedAt] = useState(new Date())

  return (
    <Container>
      <Header />
      <Form noValidate validated={validated} onSubmit={
        (event) => {
          submitForm(event,{
                        repositoryName: repositoryName,
                        status: status,
                        findings: findings,
                        queuedAt: new Date(queuedAt).toDateString(),
                        scanningAt: new Date(scanningAt).toDateString(),
                        finishedAt: new Date(finishedAt).toDateString()
                      })
        }}>
        <Form.Row>
          <Form.Group as={Col} controlId="repositoryName">
            <Form.Label>Repository Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter repository name" value={repositoryName} onChange={event => setRepositoryName(event.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control required as="select" value={status} onChange={event => setStatus(event.target.value)}>
              <option value=''>Select Status</option>
              <option value='queued'>Queued</option>
              <option value='progress'>In Progress</option>
              <option value='success'>Success</option>
              <option value='failure'>Failure</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="queuedAt">
            <Form.Label>Queued At</Form.Label><br/>
            <DatePicker
              selected={queuedAt}
              onChange={(date) => { setQueuedAt(date) }} />

          </Form.Group>

          <Form.Group as={Col} controlId="queuedAt">
            <Form.Label>scanned At</Form.Label><br/>
            <DatePicker
              selected={scanningAt}
              onChange={(date) => { setScanningAt(date) }} />

          </Form.Group>

          <Form.Group as={Col} controlId="queuedAt">
            <Form.Label>finished At</Form.Label><br/>
            <DatePicker
              selected={finishedAt}
              onChange={(date) => { setFinishedAt(date) }} />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="findings">
          <Form.Label>Findings</Form.Label>
          <Form.Control required as="textarea" rows="3" placeholder="{}" value={findings} onChange={event => setFindings(event.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { submitSecurityScanReport })(NewScan)
