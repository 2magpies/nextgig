import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Button, Form, Card } from 'react-bootstrap';
import '../../App.css';

function PostVenue() {
  let history = useHistory();

  const postNewVenue = data => {
    const url = 'https://gigz-be.herokuapp.com/venues/';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
          history.push('/venues/');
      })
      .catch(error => {
        console.error('Error', error);
      });
  };
  const handleSubmit = event => {
    event.preventDefault();
    let data = {};
    data.name = event.target['name'].value;
    data.email = event.target['website_url'].value;

    postNewVenue(data);
  
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
                <Form.Label>Website URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter website URL address"
                  name="website_url"
                />
              </Form.Group>
            </Form.Row>

            <Button variant="outline-success" type="submit">
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
