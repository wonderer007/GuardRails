import React from 'react'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

const SecurityScanResults = (listing=[]) => {

  const formatDate = (date) => {
    return date ? new Date(date).toDateString() : ""
  }

  const JSONValidator = (data) => {
    try {
        JSON.parse(data);
    } catch (e) {
        return false;
    }
    return true;
  }

  const findingCount = (data) => {
    const findings = JSONValidator(data) ? JSON.parse(data) : null

    return findings && findings.findings ? findings.findings.length : 0
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Repository1</th>
          <th>Status</th>
          <th>Queued At</th>
          <th>Scanning At</th>
          <th>Finished At</th>
          <th>Findings</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          listing.listing.map(result => (
            <tr key={result.id}>
              <td>{ result.repositoryName }</td>
              <td>{ result.status }</td>
              <td>{ formatDate(result.queuedAt) }</td>
              <td>{ formatDate(result.scanningAt) }</td>
              <td>{ formatDate(result.finishedAt) }</td>
              <td>
                <Badge pill variant="danger">{ findingCount(result.findings) }</Badge>
              </td>
              <td>
                <Link to={{ pathname: `/finding/${result.id}`, state: result }} > Detail </Link>
              </td>
            </tr>
          ))
        }
      </tbody>

    </Table>
  );
}

export default SecurityScanResults
