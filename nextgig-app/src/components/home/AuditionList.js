import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CardColumns,
  Card,
  ListGroup,
  Container,
  Button,
  Row,
  Col
} from 'react-bootstrap';

const demoAuditionList = {
  title: 'Her Last Expedition',
  description: `HER LAST EXPEDITION tells the story of two life-long friends planning a scientific expedition to find Victor Frankenstein's monster in a melting glacier. The play explores and challenges our concepts of reality, truth, and altered-states. `,
  roles: `Margaret: Female. 65+ years-old.  Nobel-prize winning climatologist and explorer.  Dry witted; strong willed. 
Edie: Female. 65+ years-old. Renowned biologist and explorer. Sharp and poised, yet tender, and sometimes even silly. 
Percy: Male.  40-45 years-old. Adopted son of Edie. Accomplished scientist and explorer. Intent on protecting the reputations of his mentor (Margaret) and mother.`,
  date: 'April 11, 2020',
  time: '2:00PM',
  location: '3rd Floor, Ponce City Market'
};

function AuditionList() {
  const [auditions, setAuditions] = useState([]);

  useEffect(() => {
    const url = 'https://nextgig-be.herokuapp.com/auditions';
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setAuditions(response);
      })
      .catch(console.error);
  }, []);
  if (!auditions) {
    return null;
  }

  return (
    <>
      <Container>
        <h4>Auditions</h4>
        <div className="auditionList">
          <div>
            <p>{demoAuditionList.title}</p>
            <p>{demoAuditionList.date}</p>
          </div>
          <ListGroup>
            {auditions.map(audition => (
              <ListGroup.Item key={audition.id}>
                <Link to={`/${audition.id}`}>
                  <p>{audition.title}</p>
                  {/* add venue here */}
                </Link>
                <Row>
                  <Col>
                    <Button variant="outline-info">
                      <Link to={`/${audition.id}/editaudition`}>Edit</Link>
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

export default AuditionList;
