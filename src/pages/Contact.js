import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
    return (
        <Container fluid="md">
            <h1 className='text-center mt-3'>Contact Me</h1>
            <Row>
                <Col>
                    <Form action='https://formsubmit.co/aristizabalsebastian93@gmail.com' method='POST'>
                        <Row className="mb-3">
                        <Form.Label>Add Name</Form.Label>
                            <Col>
                                <Form.Control placeholder="First name" name='first_name'/>
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" name='last_name'/>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email'/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name='message'/>
                        </Form.Group>
                       
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )

}

export default Contact;




