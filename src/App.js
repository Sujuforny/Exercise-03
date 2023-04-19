import './App.css';
import ProductsList from './components/ProductsList';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
 

function App() {

  return (
    <>
    <div className='all-products'>
    <ProductsList/>
    </div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src=" " />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} size="xs" />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    
    </>
  );
}

export default App;
