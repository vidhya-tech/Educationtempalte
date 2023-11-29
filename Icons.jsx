import React from 'react';

import Container from 'react-bootstrap/Container';
import image from './image/london.png'; 
import image1 from './image/newyork.png'; 
import image2 from './image/washington.png'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



const Icons = () => {

  return (
    <>
    
      {[false,].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            
            <Navbar.Toggle className="icon" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
     
      <section className="header ">
        <div className="text-box">
          <h1>World's Biggest university</h1>
          <p>Making a website is now one of the easiest things in the world. You just need to learn HTML, CSS,<br />JavaScript, and you are good to go.</p>
          <a href="#" className="hero-btn">Visit us to know More</a>
        </div>
        <nav className='navbar'>
          <div className='nav-links'>

            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Course</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Contact</a></li>

            </ul>
          </div>

        </nav>
        

      </section>

      <section className="COURSE">
        <h1>Courses We offer</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, quae consequatur. Fugit harum dicta sed quasi. Maxime inventore sapiente aperiam dolorem, error aliquam excepturi adipisci accusamus, vel a officiis blanditiis</p>
        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores similique aut delectus, voluptatibus illum explicabo repellendus totam nulla aliquid accusamus dolorum. Dolorum quod, officia pariatur adipisci corporis deserunt enim.</p>
          </div>
          <div className="course-col">
            <h3>Degree</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores similique aut delectus, voluptatibus illum explicabo repellendus totam nulla aliquid accusamus dolorum. Dolorum quod, officia pariatur adipisci corporis deserunt enim.</p>
          </div>
          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores similique aut delectus, voluptatibus illum explicabo repellendus totam nulla aliquid accusamus dolorum. Dolorum quod, officia pariatur adipisci corporis deserunt enim.</p>
          </div>
        </div>
      </section>

    
      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <div className='row'>
          <div className="campus-col">
          <img src={image}  alt='london'/>
          <div className='layer'>
            <h3>LONDON</h3>
          </div>
          </div>
          <div className="campus-col">
          <img src={image1}  alt='london'/>
          <div className='layer'>
            <h3>NEW YORK</h3>
          </div>
          </div>
          <div className="campus-col">
          <img src={image2}  alt='london'/>
          <div className='layer'>
            <h3>WASHINGTON</h3>
          </div>
          </div>
        </div>
      </section>




    </>
  );
};

export default Icons;







