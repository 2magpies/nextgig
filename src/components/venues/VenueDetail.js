import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';
import moment from 'moment'

function VenueDetail(props) {
  const [venue, setVenue] = useState({});
  const [auditions, setAuditions] = useState([]);

  useEffect(() => {
    const url = `https://nextgig-be.herokuapp.com/venues/${props.match.params.id}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setVenue(response);
        response.auditions.forEach(url => {
          fetch(url)
            .then(response => response.json())
            .then(response => {
              setAuditions(auditions => [...auditions, response]);
            });
        });
      })
      .catch(console.error);
  }, []);
  if (!venue) {
    return null;
  }

  return (
    <Container>
      {/* change h4 to specific venue */}

      <h2>Venue Details</h2>

      <div className="venueList">
        <ListGroup>
          <ListGroup.Item key={venue.id}>
            <Row>
              <Col>
                <h4>{venue.name}</h4>
              </Col>

              <Button variant="outline-info" href="/update-venue/">
                Edit Venue
              </Button>
            </Row>
            <br/>
            <p>
              Visit our website to learn more about our current season and how
              you can get involved!
            </p>
            <a href={venue.website_url}>
              <p>{venue.website_url}</p>
            </a>
          </ListGroup.Item>
        </ListGroup>
        <br />
        <h5>Upcoming Auditions</h5>
        {auditions.map(audition => (
          <div key={audition.id}>
            <h6>{audition.title}</h6>
            <ul>
              <li>
                {moment(audition.date_time).format(
                  'dddd, MMMM Do YYYY, h:mm:ss a'
                )}
              </li>
              <li>{audition.location}</li>
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default VenueDetail;
