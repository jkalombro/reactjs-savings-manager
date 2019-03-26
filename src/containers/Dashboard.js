import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { TotalDisplay } from '../components/Dashboard/TotalDisplays';
import { GraphRow1 }  from '../components/Dashboard/Graphs';

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <br />
        {/* <Jumbotron>
            <h2>Welcome to Savings Manager.</h2>
            <p>Wanna record new savings today? C'mon and let's track that..</p>
        </Jumbotron> */}
        <TotalDisplay />
        <GraphRow1 />
      </Container>
    )
  }
}

export default Dashboard;
