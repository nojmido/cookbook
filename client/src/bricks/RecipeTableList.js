import React from "react";
import Table from "react-bootstrap/Table";

function RecipeTableList(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>

        </tr>
      </thead>
      <tbody>
        {props.recipeList.map((recipe) => {
          return (
            <tr key={recipe.id}>
              <td>{recipe.name}</td>
              <td>{recipe.category}</td>
              <td>{recipe.snipet}</td>
              <td>{recipe.price}</td>

            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default RecipeTableList;