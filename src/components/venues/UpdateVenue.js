import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function UpdateVenue(props) {
  const { match } = props;
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    getVenue();
  }, []);

  const url = `https://nextgig-be.herokuapp.com/venues/${match.params.id}`;

  const handleChange = event => {
    setVenue({ ...venue, [event.target.name]: event.target.value });
  };

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

    putVenue(data);
  };

  const putVenue = data => {
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
        window.location.href = `https://nextgig-be.herokuapp.com/venues/update-venue/${venue.id}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  function getVenue() {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setVenue(response);
        console.log(response);
      })
      .catch(console.error);
  }

  const deleteVenue = () => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        window.location.href = 'https://nextgig-be.herokuapp.com/venues/';
      })
      .catch(console.error);
  };

  if (!venue) {
    return null;
  }

  return (
    <>
      <div>
        <h4>Edit Venue</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={venue.name}
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Form.Label>Website URL</Form.Label>
              <Form.Control
                type="text"
                value={venue.website_url}
                name="website_url"
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          {/* <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Admin" />
                    </Form.Group> */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br></br>
          <Button variant="danger" id="delete" onClick={deleteVenue}>
            Delete Venue
          </Button>
          <br></br>
          <Button variant="outline-secondary" id="cancel">
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
}

export default UpdateVenue;
