import react from "react"
import {Button, Navbar, Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../img/Logo.jpg"
import "../css/topHeader.css"

function TopHeader(){

	return (
		<div>
		  <Navbar bg="warning" variant="dark">
		    <Navbar.Brand href="#home">
		     <h2 className="Logo">eCom</h2>
		    </Navbar.Brand>
		    <Form inline className="Search">
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="success">Search</Button>
		    </Form>
		    <h3 className="User">User</h3>
		  </Navbar>
		</div>
		)

}
export default TopHeader;