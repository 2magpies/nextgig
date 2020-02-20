import React, { useEffect, useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

function UpdateAudition(props) {
  const { match } = props;
  const [audition, setAudition] = useState(null);

  useEffect(() => {
    getAudition();
  }, []);

  const url = `https://nextgig-be.herokuapp.com/auditions/${match.params.id}`;

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
        window.location.href = `https://nextgig-fe.herokuapp.com/update-audition/${audition.id}`;
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
      .then(response => response.json())
      .then(response => {
        window.location.href = 'https://nextgig-fe.herokuapp.com/auditions/';
      })
      .catch(console.error);
  };

  if (!audition) {
    return null;
  }

  return (
    <>
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
                <Form.Control
                  type="text"
                  name="venue"
                  value={audition.venue}
                  disabled='true'
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={audition.date_time}
                  name="date"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Time {audition.time}</Form.Label>
                <Form.Control type="time" name="time" onChange={handleChange} />
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button
            variant="outline-danger"
            id="deleteEventButton"
            onClick={deleteAudition}
          >
            Delete
          </Button>
          <Button variant="outline-secondary" id="cancel">
            <Link to={`/auditions/${audition.id}`}>Cancel</Link>
          </Button>
        </Form>
      </div>
    </>
  );
}

export default UpdateAudition;
