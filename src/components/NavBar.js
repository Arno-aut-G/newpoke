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
    <div className ="navbar">
      <Link exact to ='/'>
          <div className='logo-image'>
            <img src='https://www.freeiconspng.com/uploads/pokemon-png-23.png' alt='logo'/>
          </div>
      </Link>
      
      {/* <Navbar expand="lg">
        <Navbar.Brand href="/">
          <div className='logo-image'>
            <img src='https://www.freeiconspng.com/uploads/pokemon-png-23.png' alt='logo'/>
          </div>
          </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto">
          <Button variant="outline-success"><Link exact to="/">Home</Link></Button>
          </Nav> 
           <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> 
        </Navbar.Collapse>
      </Navbar> */} 
     
    </div>
  );
};

export default NavigationBar;


 
       