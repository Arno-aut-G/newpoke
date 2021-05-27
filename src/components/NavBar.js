import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import './NavBar.css';
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div classname ="header">
      <Navbar bg="warning" expand="lg">
        <Navbar.Brand href="#home">PokeFight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Button variant="outline-success"><Link exact to="/">Home</Link></Button>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;