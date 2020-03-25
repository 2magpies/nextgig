import React, { useEffect, useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import moment from 'moment';

function UpdateAudition(props) {
  useEffect(() => {
    fetch('https://gigz-be.herokuapp.com/venues/')
      .then(response => response.json())
      .then(data => setVenues(data));
  }, []);
  const [venues, setVenues] = useState([]);

  let history = useHistory();
  const { match } = props;
  const [audition, setAudition] = useState(null);

  useEffect(() => {
    getAudition();
  }, );

  const url = `https://gigz-be.herokuapp.com/auditions/${match.params.id}`;

  const handleChange = event => {
    setAudition({ ...audition, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    let data = {};
    data.title = event.target['title'].value;
    data.date = event.target['date'].value;
    data.time = event.target['time'].value;
    data.location = event.target['location'].value;
    data.description = event.target['description'].value;
    data.roles = event.target['roles'].value;
    data.venue = event.target['venue'].value;
    for (var propName in data) {
      if (
        data[propName] === null ||
        data[propName] === '' ||
        data[propName] === undefined
      ) {
        delete data[propName];
      }
    }

    putAudition(data);
  };
  console.log(audition);

  const putAudition = data => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        response.json();
      })
      .then(data => {
        history.push(`/auditions/${audition.id}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  function getAudition() {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setAudition(response);
        console.log(response);
      })
      .catch(console.error);
  }

  const deleteAudition = event => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        history.push('/auditions');
      })
      .catch(console.error);
  };

  if (!audition) {
    return null;
  }

  return (
    <div className="updateAudition">
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={audition.title}
                name="title"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Venue</Form.Label>
              <Form.Control as="select" name="venue" value={audition.venue}>
                {venues.map(venue => (
                  <option value={venue.id} key={venue.id}>
                    {venue.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={moment(audition.date).format('YYYY-MM-DD')}
                name="date"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Time </Form.Label>
              <Form.Control
                // type="time"
                value={moment(audition.date_time).format('h:mm a')}
                name="time"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            value={audition.location}
            name="location"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={audition.description}
            name="description"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Roles</Form.Label>
          <Form.Control
            type="text"
            value={audition.roles}
            name="roles"
            onChange={handleChange}
          />
        </Form.Group>
        <Row>
          <Col>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-danger"
              id="deleteEventButton"
              onClick={deleteAudition}
            >
              Delete
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-secondary"
              id="cancel"
              href={`/auditions/${audition.id}`}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default UpdateAudition;
