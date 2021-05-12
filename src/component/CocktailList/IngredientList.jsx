import React from 'react';
import PropTypes from 'prop-types';

function IngredientList({

  ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, instructions,
  measure1, measure2, measure3, measure4, measure5, measure6,
}) {
  return (
    <div className="ingredient">
      <p>{measure1}</p>
      <p>{measure2}</p>
      <p>{measure3}</p>
      <p>{measure4}</p>
      <p>{measure5}</p>
      <p>{measure6}</p>
      <p>{ingredient1}</p>
      <p>{ingredient2}</p>
      <p>{ingredient3}</p>
      <p>{ingredient4}</p>
      <p>{ingredient5}</p>
      <p>{ingredient6}</p>
      <div className="instructions">{instructions}</div>
    </div>
  );
}
IngredientList.propTypes = {
  measure1: PropTypes.string,
  measure2: PropTypes.string,
  measure3: PropTypes.string,
  measure4: PropTypes.string,
  measure5: PropTypes.string,
  measure6: PropTypes.string,
  ingredient1: PropTypes.string,
  ingredient2: PropTypes.string,
  ingredient3: PropTypes.string,
  ingredient4: PropTypes.string,
  ingredient5: PropTypes.string,
  ingredient6: PropTypes.string,
  instructions: PropTypes.string,
};
IngredientList.defaultProps = {
  measure1: null,
  measure2: null,
  measure3: null,
  measure4: null,
  measure5: null,
  measure6: null,
  ingredient1: null,
  ingredient2: null,
  ingredient3: null,
  ingredient4: null,
  ingredient5: null,
  ingredient6: null,
  instructions: null,
};

export default IngredientList;
