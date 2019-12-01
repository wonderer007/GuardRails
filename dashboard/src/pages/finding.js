import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import Header from '../components/header'

const Finding = ({location}) => {

  const [result, setResult] = useState(location.state)
  const findings = JSON.parse(result.findings)

  const formatDate = (date) => {
    return date ? new Date(date).toDateString() : ""
  }

  return (
    <Container>
      <Header />
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>Repository</th>
            <td>{result.repositoryName}</td>
          </tr>

          <tr>
            <th>Status</th>
            <td>{result.status}</td>
          </tr>

          <tr>
            <th>Queued At</th>
            <td>{formatDate(result.queuedAt)}</td>
          </tr>

          <tr>
            <th>Scanning At</th>
            <td>{formatDate(result.scanningAt)}</td>
          </tr>

          <tr>
            <th>Finished At</th>
            <td>{formatDate(result.finishedAt)}</td>
          </tr>

          <tr>
            <th>Findings</th>
            <td>
              {
                findings.findings.map(result => (
                  <div>
                    <ListGroup>
                      <ListGroup.Item action><b>Rule Id: </b>{result.ruleId}</ListGroup.Item>
                      <ListGroup.Item action href="#link2" disabled>
                        <b>Description: </b> {result.metadata.description}
                      </ListGroup.Item>
                      <ListGroup.Item action>
                        <b>Severity: </b> {result.metadata.severity}
                      </ListGroup.Item>
                      <ListGroup.Item action>
                        <b>File: </b> {`${result.location.path}#${result.location.positions.begin.line}`}
                      </ListGroup.Item>
                    </ListGroup>
                    <br/>
                  </div>
                ))
              }
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}


export default Finding
