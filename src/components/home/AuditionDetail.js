import React { useState, useEffect } from 'react';
import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';

function AuditionDetail(props) {
    const { match } = props;
    const [auditionDetails, setAuditionDetails] = useState([]);

  useEffect(() => {
    const url = `https://nextgig-be.herokuapp.com/auditions${match.params.id}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setAuditions(response);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Container>
        <h4>{demoAuditionList.title}</h4>
        <div className="auditionDetail">
          <div>
            <p>{demoAuditionList.date}</p>
          </div>
          <ListGroup>
            {auditions.map(audition => (
              <ListGroup.Item key={props.audition.title}>
                <Row>
                  <Col>
                    <Button variant="outline-info">
                      <Link to={`/${audition.title}/editaudition`}>Edit</Link>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Container>
    </>
  );
}




export default AuditionDetail;
