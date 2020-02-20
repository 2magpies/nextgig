import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Col } from 'react-bootstrap';

function UpdateVenue(props) {
  const { match } = props;
  const [venue, setVenue] = useState([]);

  useEffect(() => {
    getVenue();
  }, []);

  const url = `https://nextgig-be.herokuapp.com/venues/${match.params.id}`;

  const handleSubmit = event => {
    event.preventDefault();

    let data = {};

    data.name = event.target['name'].value;
    data.website_url = event.target['website_url'].value;

    for (var propName in data) {
      if (
        data[propName] === null ||
        data[propName] === '' ||
        data[propName] === undefined
      ) {
        delete data[propName];
      }
    }

    updateVenue(data);
  };

  function getVenue() {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setVenue(response);
      })
      .catch(console.error);
  }

  const updateVenue = data => {
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
        console.log('Success:');
        window.location.href =
          'https://nextgig-be.herokuapp.com/venues/update-venue';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const deleteVenue = () => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        window.location.href =
          'https://nextgig-be.herokuapp.com/venues/update-venue';
      })
      .catch(console.error);
  };

  return (
    <div>
      <h4>Edit Venue</h4>
      <Card style={{ width: '18rem', padding: '1rem' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGrid">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder={venue.name} name="name" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder={venue.website_url}
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
        <br></br>
        <Button variant="danger" id="delete" onClick={deleteVenue}>
          Delete Venue
        </Button>
        <br></br>
        <Button variant="outline-secondary" id="cancel" onClick={deleteVenue}>
          Cancel
        </Button>
      </Card>
    </div>
  );
}

export default UpdateVenue;
