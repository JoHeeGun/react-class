import './App.css';
import {Button,Navbar,NavDropdown,FormControl,Nav,Form} from 'react-bootstrap'
import Detail from './page/detail'


const foodILike = [
  {
    id:0,
    name: 'Kimchi',
    content : '한국',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg'
  },
  {
    id:1,
    name: 'Samgyeopsal',
    contnent: '일본',
    image:
      'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg' 
  },
  {
    id:2,
    name: 'Bibimbap',
    contnent: '중국',
    image:
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb'
  },
  {
    id:3,
    name: 'Doncasu',
    contnent: '태국',
    image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg'
  },
  {
    id:3,
    name: 'Kimbap',
    contnent: '필리핀',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg'
  },
];

function Food({name,picture}){
  return (
    <div>
  <h3> I Like {name} </h3>
  <img src={picture} width="50%" alt ={name}/>
  </div>
  )
}

function App() {
  const style = {
    display: 'flex'
  }
  return (

    <div className="App">

<Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">YK20213784조희건</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
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

      
      

      <h2>Coffee</h2>
      <button>YK반 20213784 조희건</button>
      <div style={style}>
      {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image} />
      ))}
      <Route exact path="/detail" component={Detail} />
      </div>


    </div>
  );
}

export default App;
