import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';
import moment from 'moment';

function AuditionList() {
  const [auditions, setAuditions] = useState([]);

  useEffect(() => {
    const url = 'https://nextgig-be.herokuapp.com/auditions/';
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
        <h4>Auditions</h4>
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
                {/* <p>{venue_id.name}</p> */}
                <p>{audition.location}</p>

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
