import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';
import moment from 'moment';

function AuditionDetail(props) {
  const { match } = props;
  const [auditionDetails, setAuditionDetails] = useState([]);

  useEffect(() => {
    const url = `https://nextgig-be.herokuapp.com/auditions/${match.params.id}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setAuditionDetails(response);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Container>
        <h4>{auditionDetails.title}</h4>
        <div className="auditionDetail">
          <ListGroup>
            <ListGroup.Item key={match.params.id}>
              <p>{auditionDetails.description}</p>
              <p>{auditionDetails.roles}</p>
              <p>
                {moment(auditionDetails.date_time).format(
                  'dddd, MMMM Do YYYY, h:mm:ss a'
                )}
              </p>
              <p>{auditionDetails.location}</p>
              {/* <Link to={`/venues/${venue.id}`}>
                  <p>{venue.name}</p>
                </Link> */}
              <Row>
                <Col>
                  <Button variant="outline-info">
                    <Link to={`/update-audition/${auditionDetails.id}`}>
                      Edit
                    </Link>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    </>
  );
}

export default AuditionDetail;
