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
        <Row>
          <Col>
            <h3>Venues</h3>
          </Col>
          <Col>
            <Button variant="success" href="/post-venue">
              Add Venue
            </Button>
          </Col>
        </Row>

        <div className="venueList">
          <ListGroup>
            {venues.map(venue => (
              <ListGroup.Item key={venue.id}>
                {/* change link below to nav to auditions for that specific venue */}
                <Link to={`/venues/${venue.id}`}>
                  <h4>{venue.name}</h4>
                </Link>
                <p>To visit our website, click the following link:</p>
                <a href={venue.website_url}>
                  <p>{venue.website_url}</p>
                </a>
                <Row>
                  <Col>
                    <Button
                      variant="outline-info"
                      href={`/update-venue/${venue.id}`}
                    >
                      Edit
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="outline-success" href={`/venues/${venue.id}`}>
                      Open Auditions
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
