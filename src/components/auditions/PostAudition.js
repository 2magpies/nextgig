import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

function PostAudition() {
  const postNewAudition = data => {
    const url = 'https://nextgig-be.herokuapp.com/auditions/';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        window.location.href = 'https://nextgig-fe.herokuapp.com/post-audition';
      })
      .catch(error => {
        console.error('Error:', error);
      });
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

    postNewAudition(data);
  };

  return (
    <>
      <div className="postAudition">
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter production title"
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
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" name="time" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location of the audition"
              name="location"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              name="description"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Roles</Form.Label>
            <Form.Control type="text" placeholder="Enter roles" name="roles" />
          </Form.Group>
          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default PostAudition;
