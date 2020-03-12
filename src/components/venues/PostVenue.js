import React from 'react';
import { Col, Button, Form, Card } from 'react-bootstrap';

function PostVenue() {
  const postNewVenue = 'https://gigz-be.herokuapp.com/venues/';

  fetch(venueUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(userData => {
      console.log('Success:', userData);
      window.location.href = 'https://gigz-be.herokuapp.com/venues';
    })
    .catch(error => {
      console.error('Error', error);
    });

  const handleSubmit = event => {
    event.preventDefault();
    let venueData = {};
    venueData.name = event.target['name'].value;
    venueData.email = event.target['website_url'].value;

    postNewVenue(venueData);
  };

  return (
    <div id="managevenues">
      <div>
        <h4>Add New Venue</h4>
        <Card id="manageVenuePost" style={{ width: '18rem', padding: '1rem' }}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter website URL address"
                  name="website_url"
                />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="outline-secondary" id="cancel" href="venues">
              Cancel
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default PostVenue;
