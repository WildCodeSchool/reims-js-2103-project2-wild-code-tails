import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BiDrink } from 'react-icons/bi';
import Cocktail from '../CocktailList/Cocktail';
import './CocktailOfTheDay.css';

function CocktailOfTheDay({ cocktails, favorites, setFavorites }) {
  const [randomCocktail, setRandomCocktail] = useState();

  const generateRandomCocktail = () => {
    const cocktailIndex = Math.floor(Math.random() * cocktails.length);
    setRandomCocktail(cocktails[cocktailIndex]);
  };

  useEffect(() => {
    if (randomCocktail == null && cocktails.length >= 1) {
      generateRandomCocktail();
    }
  }, [cocktails]);
  return (
    <div className="contenu">
      { randomCocktail && (
        <div className="drinking">
          <Cocktail
            data={randomCocktail}
            favorites={favorites}
            setFavorites={setFavorites}
          />
          <div className="drink">
            <BiDrink size={20} className="button" p onClick={() => generateRandomCocktail()} type="button" />
          </div>
        </div>
      )}
    </div>
  );
}
CocktailOfTheDay.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.func.isRequired,
};
export default CocktailOfTheDay;
