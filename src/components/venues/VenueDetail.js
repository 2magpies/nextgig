import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';

function VenueDetail() {
  
  const [venue, setVenue] = useState([]);

  useEffect(() => {
    const url = `https://nextgig-be.herokuapp.com/venues/${venue.id}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        response.forEach(venue => {
          console.log(venue);
          fetch(venue.audition)
            .then(response => response.json())
            .then(response => {
              venue.audition = response;
              setVenue(venues => [...venues, venue]);
              console.log(response);
            });
        });
      })
      .catch(console.error);
  }, []);
  if (!venue) {
    return null;
  }
  console.log(venue);
  return (
    <>
      <Container>
        {/* change h4 to specific venue */}
        <h4>Venue</h4>
        <p>Audition at this venue 1</p>
        <p>Audition at this venue 2</p>
        <div className="venueList">
          <ListGroup>
            {venue.map(venue => (
              <ListGroup.Item key={venue.id}>
                {/* <Link to={`/venues/${venue.id}`}>
                  <p>{venue.name}</p>
                </Link>
                <p>
                  <Link to={`/audition/${venue.audition.id}`}>
                    {venue.audition.title}
                  </Link>
                </p> */}
                {/* <p>{venue_id.name}</p> */}
                <p>{venue.name}</p>
                <p>{venue.website_url}</p>
                <ul>{venue.audition.title}</ul>

                <Row>
                  <Col>
                    {/* <Button variant="outline-info">
                      <Link to={`/${venue.id}/update-venue`}>Edit</Link>
                    </Button> */}
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

export default VenueDetail;
