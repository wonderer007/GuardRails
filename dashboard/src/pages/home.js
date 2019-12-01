import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadResults } from '../actions/index'
import Container from 'react-bootstrap/Container'
import SecurityScanResults from '../components/securityScanResults'
import Header from '../components/header'

const Home = ({ loadResults, listing }) => {

  useEffect(() => {
    loadResults()
  }, [loadResults]);

  return (
    <Container>
      <Header title='Security Scan Results' />
      <SecurityScanResults listing={listing} />
    </Container>
  );
}

const mapStateToProps = state => ({
  listing: state.results.listing
})

export default connect(mapStateToProps, { loadResults })(Home)
