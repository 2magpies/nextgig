import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';

function AuditionList() {
  const [auditions, setAuditions] = useState([]);

  useEffect(() => {
    const url = 'https://nextgig-be.herokuapp.com/auditions/';
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setAuditions(response);
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
        <h4>Auditions</h4>
        <div className="auditionList">
          <ListGroup>
            {auditions.map(audition => (
              <ListGroup.Item key={audition.id}>
                <Link to={`/auditions/${audition.id}`}>
                  <p>{audition.title}</p>
                </Link>
                <p>{audition.description}</p>
                <p>{audition.roles}</p>
                <p>{audition.date_time}</p>
                <p>{audition.location}</p>
                {/* add venue here */}
                <Row>
                  <Col>
                    <Button variant="outline-info">
                      <Link to={`/${audition.id}/editaudition`}>Edit</Link>
                    </Button>
                  </Col>
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
