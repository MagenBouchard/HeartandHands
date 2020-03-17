import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./style.css"

function NavBar(){
    return <div className="navvbar">
         <Nav className="justify-content-left fixed-top" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Services</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      {/* <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link> */}
    </Nav.Item>
  </Nav>
 
    </div>

}

export default NavBar;