import './Footer.css';
import { Container, Row, Col } from "reactstrap";
import {Card, Button} from 'react-bootstrap';

const FooterBar = (props) => {

    return(
        <>
        {/* <div className="Footer">
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
            <Card.Body>
             <Card.Title>Poke Fight</Card.Title>
             <Card.Text>
                    This is the where we can add something to our Footer            
            </Card.Text>
            <Button variant="primary">Back to HOME</Button>
            <Button variant="primary">About Us</Button>
            <Button variant="primary">Contact Us</Button>

            </Card.Body>
            <Card.Footer className="text-muted">Copyright @2021</Card.Footer>
            </Card>
        </div> */}


<div className="footer">
      <Container>
       {/* <Row>
          <Col xs="3" sm="3" className="hoverEffect" >About Us </Col>
          <Col xs="3" xm ="3" className="hoverEffect" >Contact Us</Col>
          <Col xs="3" sm="3" className="hoverEffect">Team</Col>
          <Col xs="3" xm ="3" className="hoverEffect">Feedback</Col>    
        </Row>    */}
        <Row>
        <Col className="space copyright">Copyright by Group 2 @2021</Col>     
        </Row>
      </Container>    
    </div>

        </>
    )
}


export default FooterBar;