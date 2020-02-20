import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';
// import UpdateVenue from './UpdateVenue';

function VenueList() {
  const [venues, setVenue] = useState([]);

  useEffect(() => {
    const url = 'https://nextgig-be.herokuapp.com/venues/';
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setVenue(response);
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
          <ListGroup>
            {venues.map(venue => (
              <ListGroup.Item key={venue.id}>
                {/* change link below to nav to auditions for that specific venue */}
                <Link to={`/${venue.id}`}>
                  <p>{venue.name}</p>
                </Link>
                <p>{venue.website_url}</p>
                <Row>
                  <Col>
                    <Button variant="outline-info">
                      <Link to={`venues/${venue.id}`}>Edit</Link>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          {/* <div>
            <UpdateVenue />
          </div> */}
        </div>
      </Container>
    </>
  );
}

export default VenueList;
