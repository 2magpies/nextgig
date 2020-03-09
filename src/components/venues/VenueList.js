import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';

const demoVenueList = {
  name: 'Ponce Playhouse',
  website_url: 'https://ponceplayhouse.weebly.com/'
};

function VenueList() {
  const [venues, setVenue] = useState([]);

  useEffect(() => {
    const url = 'https://nextgig-be.herokuapp.com/venues/';
    fetch(url)
      .then(response => response.json())
      .then(response => {
        //   setVenue(response);
        console.log(response);
      })
      .catch(console.error);
  }, []);
  if (!venues) {
    return null;
  }
  //   console.log(venues);
  return (
    <>
      <Container>
        <h4>Venues</h4>
        <div className="venueList">
          <div>
            <p>{demoVenueList.name}</p>
            <p>{demoVenueList.website_url}</p>
          </div>
          <ListGroup>
            {venues.map(venue => (
              <ListGroup.Item key={venue.id}>
                <Link to={`/${venue.id}`}>
                  <p>{venue.name}</p>
                  <p>({venue.website_url})</p>
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
      </Container>
    </>
  );
}

export default VenueList;
