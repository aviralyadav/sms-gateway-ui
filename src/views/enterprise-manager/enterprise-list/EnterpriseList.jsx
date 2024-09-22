import React from 'react';
import { Row, Col, Card, Table, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EnterpriseList = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">View Enterprise</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={12} style={{ overflowX: 'auto' }}>
                  <Form className="d-inline-flex">
                    <Form.Group className="d-inline-flex mr-5 mx-3 align-items-center">
                      {/* <Form.Label className="mb-0">Password:</Form.Label> */}
                      <Form.Control className="mx-2" type="test" placeholder="Search user name" />
                    </Form.Group>
                    <Form.Group className="d-inline-flex mx-3" style={{ overflow: 'unset' }}>
                      <Button className="mb-0">Search</Button>
                    </Form.Group>
                    <Form.Group className="d-inline-flex mx-3" style={{ overflow: 'unset' }}>
                      <Button className="mb-0">Clear Search</Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between">
                <span>Total users available: 30</span>
                <Link>Download</Link>
              </div>
            </Card.Header>
            <Card.Body>
              <Table striped responsive>
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>User Id</th>
                    <th>Role Type</th>
                    <th>Created On</th>
                    <th>Last Login Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">mark</th>
                    <td>Mark</td>
                    <td>so user</td>
                    <td>10/07/2024 15:20</td>
                    <td>15/07/2024 17:20</td>
                    <td>
                      <Link>Edit</Link>|<Link>Reset Password</Link>|<Link>Disable</Link>|<Link>Delete</Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">mark</th>
                    <td>Mark</td>
                    <td>so user</td>
                    <td>10/07/2024 15:20</td>
                    <td>15/07/2024 17:20</td>
                    <td>
                      <Link>Edit</Link>|<Link>Reset Password</Link>|<Link>Disable</Link>|<Link>Delete</Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">mark</th>
                    <td>Mark</td>
                    <td>so user</td>
                    <td>10/07/2024 15:20</td>
                    <td>15/07/2024 17:20</td>
                    <td>
                      <Link>Edit</Link>|<Link>Reset Password</Link>|<Link>Disable</Link>|<Link>Delete</Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default EnterpriseList;
