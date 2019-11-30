import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadResults } from '../actions/index'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'

const SecurityScanResults = (listing=[]) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Repository</th>
          <th>Status</th>
          <th>Queued Time</th>
          <th>Scanning Time</th>
          <th>Finished Time</th>
          <th>Findings</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          listing.listing.map(result => (
            <tr>
              <td>{ result.repositoryName }</td>
              <td>{ result.status }</td>
              <td>{ result.queuedAt }</td>
              <td>{ result.scanningAt }</td>
              <td>{ result.finishedAt }</td>
              <td>
                <Badge pill variant="primary">Primary</Badge>
                <Badge pill variant="success">Success</Badge>
                <Badge pill variant="danger">Danger</Badge>
                <Badge pill variant="warning">Warning</Badge>
                <Badge pill variant="info">Info</Badge>
              </td>
              <td><a href='#'>Detail</a></td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default SecurityScanResults
