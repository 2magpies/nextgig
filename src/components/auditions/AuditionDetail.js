import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuditionList from './AuditionList';
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';

function AuditionDetail(props) {
  const { match } = props;
  const [auditionDetails, setAuditionDetails] = useState([]);

  useEffect(() => {
    const url = `https://nextgig-be.herokuapp.com/auditions/${match.id}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setAuditionDetails(response);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Container>
        <h4>{auditionDetails.title}</h4>
        <div className="auditionDetail">
          <ListGroup>
            {auditionDetails.map(audition => (
              <ListGroup.Item key={props.audition.id}>
                <p>{auditionDetails.description}</p>
                <p>{auditionDetails.roles}</p>
                <p>{auditionDetails.date_time}</p>
                <p>{auditionDetails.location}</p>
                {/* <Link to={`/venues/${venue.id}`}>
                  <p>{venue.name}</p>
                </Link> */}
                <Row>
                  <Col>
                    <Button variant="outline-info">
                      <Link to={`/${auditionDetails.title}/editaudition`}>Edit</Link>
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

export default AuditionDetail;
