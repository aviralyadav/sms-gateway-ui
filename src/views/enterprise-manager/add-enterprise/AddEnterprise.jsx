import React from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

const AddEnterprise = () => {
  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Add Enterprise</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Enterprise Id</Form.Label>
                      <Form.Control type="text" placeholder="Please Enter Enterprise Id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Enterprise User Id</Form.Label>
                      <Form.Control type="text" placeholder="Please Enter User Id" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select">
                      <option>Active</option>
                      <option>Inactive</option>
                    </Form.Control>
                  </Form.Group>
                    {/* <Form.Group className="mb-3">
                      <Form.Label className='mx-2'>Allow Push Access</Form.Label>
                      <Form.Check inline type="radio" label="Yes" name="supportedRadio" id="supportedRadio21" />
                      <Form.Check inline type="radio" label="No" name="supportedRadio" id="supportedRadio22" />
                    </Form.Group> */}
                    <Form.Group className="mb-3">
                      <Form.Label className='mx-2'>Allow Pull Access</Form.Label>
                      <Form.Check inline type="radio" label="Yes" name="supportedRadio" id="supportedRadio21" />
                      <Form.Check inline type="radio" label="No" name="supportedRadio" id="supportedRadio22" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enterprise Name</Form.Label>
                    <Form.Control type="text" placeholder="Please Enter Enterprise Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enterprise Password</Form.Label>
                    <Form.Control type="password" placeholder="Please Enter Password" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='mx-2'>Allow InstaAlert Access</Form.Label>
                    <Form.Check inline type="radio" label="Yes" name="supportedRadio" id="supportedRadio21" />
                    <Form.Check inline type="radio" label="No" name="supportedRadio" id="supportedRadio22" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                      <Form.Label className='mx-2'>Allow Push Access</Form.Label>
                      <Form.Check inline type="radio" label="Yes" name="supportedRadio" id="supportedRadio21" />
                      <Form.Check inline type="radio" label="No" name="supportedRadio" id="supportedRadio22" />
                    </Form.Group>
                  {/* <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select">
                      <option>Active</option>
                      <option>Inactive</option>
                    </Form.Control>
                  </Form.Group> */}
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Button variant="primary">Preview</Button>
                  <Button variant="primary">Reset</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AddEnterprise;
