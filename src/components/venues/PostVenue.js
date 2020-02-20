import React from 'react';
import { Col, Button, Form, Card } from 'react-bootstrap';
import VenueList from './VenueList';

function PostVenue() {
  const postNewVenue = userData => {
    const venueUrl = 'https://nextgig-be.herokuapp.com/venues/';

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
        window.location.href = 'https://nextgig-fe.herokuapp.com/post-venue';
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let venueData = {};
    venueData.name = event.target['name'].value;
    venueData.email = event.target['email'].value;

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

            {/* <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Admin" />
                        </Form.Group> */}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
      {/* <div>
                <VenueList />
            </div> */}
    </div>
  );
}

export default PostVenue;
