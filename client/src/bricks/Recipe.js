import React from "react";

//Bootstrap komponenty
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";

//MDI ikony
import Icon from '@mdi/react'
import { mdiGlassCocktail, mdiIdentifier } from '@mdi/js'
import styles from "../css/recipe.module.css";

function recipe(props) {
  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.recipe.drinkImg} alt={props.recipe.name} style={{ width: "50%", margin: "auto" }} />
        <Card.Body>
          <Card.Title>
            <Icon path={mdiGlassCocktail} size={1} color="grey" />{" "}
            {props.recipe.name}
          </Card.Title>
          <Card.Text>
            <div style={{ maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}> 
            {props.recipe.description}
            </div>
          </Card.Text>
          <Button variant="primary">Order!</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default recipe;