import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

export const Login = () => {
    return (
        <Container>
          <Row className="justify-content-md-center">
            <Col md="4">
              <h2 className="text-center">Login</h2>
              {error && <Alert variant="danger"></Alert>}
              <Form >
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
    
                <Button variant="primary" type="submit" block>
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    };
