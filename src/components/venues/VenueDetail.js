import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import '../../App.css';

function VenueDetail(props) {
  const [venue, setVenue] = useState({});
  const [auditions, setAuditions] = useState([]);

  useEffect(() => {
    const url = `https://gigz-be.herokuapp.com/venues/${props.match.params.id}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setVenue(response);
        response.auditions.forEach(url => {
          fetch(`https://gigz-be.herokuapp.com/auditions/${venue.audition}`)
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

      <h4>Venue Details</h4>

      <div className="venueList">
        <ListGroup>
          <ListGroup.Item key={venue.id}>
            <Row>
              <Col>
                <h4>{venue.name}</h4>
              </Col>

              <Button variant="outline-info" href={`/update-venue/${venue.id}`}>
                Edit Venue
              </Button>
              <br />
              <br></br>
            </Row>
            
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
            <h4>{audition.title}</h4>
            <p>{audition.description}</p>
            <p>{audition.roles}</p>
            <p>{moment(audition.date).format('dddd, MMMM Do YYYY')}</p>
            <p>{audition.time}</p>
            <p>{audition.location}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default VenueDetail;
