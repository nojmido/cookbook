import React from "react";
import Recipe from "./Recipe";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

/* function RecipeGridList(props) {
  return props.recipeList.map((recipe) => {
    return <Recipe key={recipe.id} recipe={recipe} />;
  });
}
 */
function RecipeGridList(props) {
    function getRecipeList(recipeList) {
      return recipeList.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      });
    }

    return (
    <Container>
      <Row>
      {getRecipeList(props.recipeList)};
      </Row>
  
    </Container>
    )
  }

export default RecipeGridList;