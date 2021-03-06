import React from 'react';

const Recipe = ({ deleteRecipe, getIndexOfRecipe, title, ingredients, index }) =>
  <div className="recipe col-12 col-sm-6 col-md-4 col-lg-4">
    <table className="table table-hover">
      <thead className="thead-inverse">
        <tr>
          <th className="text-center">
            {title}
          </th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient, ind) =>
          <tr key={ind}>
            <td className="text-center">
              {ingredient}
            </td>
          </tr>
        )}
      </tbody>
    </table>

    <div className="button-container">
      <button
        className="btn btn-sm btn-primary"
        onClick={() => getIndexOfRecipe(index)}>Edit
          </button>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => deleteRecipe(index)}>Delete
          </button>
    </div>
  </div >
export default Recipe;
