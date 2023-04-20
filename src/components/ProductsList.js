import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Buttons from './Buttons';
import { Placeholder } from 'react-bootstrap';

export default function ProductsList() {
  let placeholder = [];
    const [data,setdata]=useState([]);
    const product = document.querySelector('.product');
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products").then(item=> item.json()).then(data => setdata(data))
    },[])
    // loop placeholder
  
  for (let i = 0; i < 50; i++) {
    placeholder.push(
      <Card className="d-inline-flex m-3" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.dribbble.com/users/594619/screenshots/16710203/media/a4a970dc53a3aa851927f338751dea2d.gif"
        />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} />
            <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    );
  }
  return (
      <>
      {data.map((product) => (
          <Card style={{ width: '18rem' }} className="m-4">
            <Card.Img variant="top" src={product.images}/>
              <Card.Body>
                <Card.Title>{product?.title || "Empty"}</Card.Title>
                <Card.Text>
                  {product.description || "Empty"}
                </Card.Text>
                <p>${product.price}</p>
                <Buttons/>
              </Card.Body>
        </Card>
        ))}
        {placeholder}
      </>
  )
}
