import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CardColumns, Card } from 'react-bootstrap';
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';

function VenueList(props) {
  const [venues, setVenue] = useState([]);

  useEffect(() => {
    const url = 'https://ibcc.herokuapp.com/users'; //temporary url
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setVenue(response);
      })
      .catch(console.error);
  }, []);
  if (!venues) {
    return null;
  }

  return (
    <Styles>
      <h4>Venues</h4>
      <div className="">
        <ListGroup>
          {venues.map(venue => (
            <ListGroup.Item key={venue.id}>
              <Link to={`/${venue.id}`}>
                <p>
                  {venue.name} ({venue.website_url})
                </p>
              </Link>
              <Row>
                <Col>
                  <Button variant="outline-info">
                    <Link to={`/${venue.id}/editvenue`}>Edit</Link>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Styles>
  );
}

export default VenueList;
