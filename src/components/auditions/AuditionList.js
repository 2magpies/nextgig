import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Button, Row, Col, CardColumns, Card } from 'react-bootstrap';
import moment from 'moment';

function AuditionList() {
  const [auditions, setAuditions] = useState([]);

  useEffect(() => {
    const url = 'https://gigz-be.herokuapp.com/auditions/';
    fetch(url)
      .then(response => response.json())
      .then(response => {
        response.forEach(audition => {
          console.log(audition);
          fetch(audition.venue)
            .then(response => response.json())
            .then(response => {
              audition.venue = response;
              setAuditions(auditions => [...auditions, audition]);
              console.log(response);
            });
        });
      })
      .catch(console.error);
  }, []);
  if (!auditions) {
    return null;
  }
  console.log(auditions);
  return (
    <>
      <Container>
        {/* add variable for venue to h4 */}
        <Row>
          <Col>
            <h4>Auditions</h4>
          </Col>
          <Button variant="success" href="/post-audition">
            Add Audition
          </Button>
        </Row>
        <br></br>

        <div className="auditionList">
          <ListGroup>
            {auditions.map(audition => (
              <ListGroup.Item key={audition.id}>
                <Link to={`/auditions/${audition.id}`}>
                  <p>{audition.title}</p>
                </Link>
                <p>
                  <Link to={`/venues/${audition.venue.id}`}>
                    {audition.venue.name}
                  </Link>
                </p>
                <p>{audition.location}</p>
                <p>
                  {moment(audition.date).format(
                    'dddd, MMMM Do YYYY'
                  )}
                </p>
                <p>
                  {moment(audition.time).format(
                    'h:mm:ss a'
                  )}
                </p>
                <Row>
                  <Col></Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Container>
    </>
  );
}

export default AuditionList;
