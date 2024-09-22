import React from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

const AddUser = () => {
  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Add User</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicChecbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary">Submit</Button>
                  </Form>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="email" placeholder="Text" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <h6 className="mt-4 text-muted">Radios</h6>
                  <hr />
                  <Form.Group className="mb-3">
                    <Form.Check type="radio" label="Toggle this custom radio" name="supportedRadios" id="supportedRadio3" />
                    <Form.Check type="radio" label="Or toggle this other custom radio" name="supportedRadios" id="supportedRadio4" />
                  </Form.Group>
                  <h6 className="mt-3 text-muted">Inline</h6>
                  <hr />
                  <Form.Group className="mb-3">
                    <Form.Check inline type="radio" label="Toggle this custom radio" name="supportedRadio" id="supportedRadio21" />
                    <Form.Check inline type="radio" label="Or toggle this other custom radio" name="supportedRadio" id="supportedRadio22" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </React.Fragment>
  );
};

export default AddUser;
