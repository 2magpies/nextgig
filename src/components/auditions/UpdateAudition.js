import React, { useEffect, useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';

function UpdateAudition(props) {
  const { match } = props;
  const [audition, setAudition] = useState([]);

  useEffect(() => {
    getAudition();
  }, []);

  const url = `https://nextgig-be.herokuapp.com/auditions/${match.params.id}`;

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
        window.location.href = 'https://nextgig-be.herokuapp.com/auditions/';
      })
      .catch(console.error);
  };

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
                  placeholder={audition.title}
                  name="title"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Venue</Form.Label>
                <Form.Control as="select" name="venue">
                  <option value="" disabled defaultValue>
                    Choose One
                  </option>
                  <option value="venue1">Need Venue Variable</option>
                  <option value="venue2">Need Venue Variable</option>
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
                  placeholder="Enter a date"
                  name="date"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Time {audition.time}</Form.Label>
                <Form.Control type="time" name="time" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder={audition.location}
              name="location"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder={audition.description}
              name="description"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Roles</Form.Label>
            <Form.Control
              type="text"
              placeholder={audition.roles}
              name="roles"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="outline-danger" id="deleteEventButton" onClick={deleteAudition}>
            Delete
          </Button>
        </Form>
      </div>
    </>
  );
}

export default UpdateAudition;
