import React from "react";
import Card from "react-bootstrap/Card";


function Item(props) {
    return (
      <Card style={{ width: '18rem' }} className="cards">
        <Card.Img variant="top" src={props.recipe.imgUri} />
        <Card.Body>
          <Card.Title>{props.recipe.name}</Card.Title>
          <Card.Text classname="text">
          {props.recipe.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  
export default Item;

