import './App.css';
import {Route} from 'react-router-dom';
import React from 'react';
import {Button,Navbar,NavDropdown,FormControl,Nav,Form} from 'react-bootstrap'
import Order from './pages/Order'

function App() {
  return (
    <div className="App">

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Caffe!!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/order">Order</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
      <Route path="/" exact={true}>
      <div class="jumbotron">
        <h1 class="display-4">Welcome HeeGun's Caffe!!</h1>
        <p class="lead">리액트,뷰,앵귤러 등등 프론트엔드 프레임워크들을 배우고 싶다.</p>
        <hr class="my-4" />
        <p>리액트를 이용한 온라인 카페 홈페이지 입니다!!</p>
        <a class="btn btn-primary btn-lg" href="/order" role="button">주문하기</a>
      </div>
      </Route>
      <Route path="/order" component={Order}>
      </Route>
    </div>
  );
}

export default App;
