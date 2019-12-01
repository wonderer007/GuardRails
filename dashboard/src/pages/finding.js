import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup'
import Header from '../components/header'

const Finding = ({location}) => {

  const [result] = useState(location.state)
  if(!result)
    window.location = window.location.origin
  const findings = JSON.parse(result.findings)

  const formatDate = (date) => {
    return date ? new Date(date).toDateString() : ""
  }

  return (
    <Container>
      <Header title='Security Scan Result Findings'/>
      <Table striped bordered hover>
        <tbody>
          <tr key="repositoryName">
            <th>Repository</th>
            <td>{result.repositoryName}</td>
          </tr>

          <tr key="status">
            <th>Status</th>
            <td>{result.status}</td>
          </tr>

          <tr key="queuedAt">
            <th>Queued At</th>
            <td>{formatDate(result.queuedAt)}</td>
          </tr>

          <tr key="scanningAt">
            <th>Scanning At</th>
            <td>{formatDate(result.scanningAt)}</td>
          </tr>

          <tr key="finishedAt">
            <th>Finished At</th>
            <td>{formatDate(result.finishedAt)}</td>
          </tr>

          <tr key="findings">
            <th>Findings</th>
            <td>
              {
                findings.findings.map((result,index) => (
                  <div key={index}>
                    <ListGroup>
                      <ListGroup.Item action key="ruleId"><b>Rule Id: </b>{result.ruleId}</ListGroup.Item>
                      <ListGroup.Item action key="description">
                        <b>Description: </b> {result.metadata.description}
                      </ListGroup.Item>
                      <ListGroup.Item action key="severity">
                        <b>Severity: </b> {result.metadata.severity}
                      </ListGroup.Item>
                      <ListGroup.Item action key="file">
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
