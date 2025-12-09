import React, { useState } from 'react'
import { InputGroup, FormControl, Button, Card, Container, Row, Col, Navbar, Nav, Form } from "react-bootstrap";
import Apj from '../../assets/APJ.jpeg'; import Aadu from '../../assets/Aadu.jpeg'
import Balya from '../../assets/Balya.jpeg'; import mathil from '../../assets/Mathilukal.jpeg';import chemmeen from '../../assets/chemmeen.jpeg'

const books = [
  { title: "Mathilukal", author: "Vaikom Muhammad Basheer ", img: `${mathil}` },
  { title: "Wings of Fire: An Autobiography", author: " A. P. J. Abdul Kalam and Arun Tiwari", img: `${Apj}` },
  { title: "Aatujeevitham", author: " Benyamin", img: `${Aadu}` },
  { title: "Balyakalasakhi", author: "Vaikom Muhammad Basheer", img: `${Balya}` },
  { title: "Chemmeen", author: "Thakazhi Sivasankara Pillai", img: `${chemmeen}` }
];

function Home() {

    const [search, setSearch] = useState('');

    const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()));



  return (
        <Container fluid>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Libib</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link>Library</Nav.Link>
            <Nav.Link>Add Items</Nav.Link>
            <Nav.Link>Collection</Nav.Link>
            <Nav.Link>Reports</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Start Searching..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="me-2"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <h4 className="mt-4 mb-2">My Books</h4>
      <Row xs={2} md={4} lg={6} className="g-4">
        {filteredBooks.map((book, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <h4 className="mt-4 mb-2">Books</h4>
      <Row xs={2} md={4} lg={6} className="g-4">
        {filteredBooks.map((book, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
}
export default Home
