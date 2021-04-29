import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Footer from './component/Footer/Footer';
import CocktailList from './component/CocktailList/CocktailList';
import Header from './component/Header/Header';
import CreateCocktail from './component/Header/CreateCocktail';
import CocktailOfTheDay from './component/Header/CocktailOfTheDay';
import Favorites from './component/Header/Favorites';

function App() {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    Promise.all(
      'abcdefghijklmnopqrstuvwxyz0123456789'.split('').map((letter) => (
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      )),
    ).then((responses) => {
      setCocktailList(
        responses.reduce((acc, response) => {
          if (response.data.drinks == null) {
            return acc;
          }
          return [
            ...acc,
            ...response.data.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink)),
          ];
        }, []),
      );
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" exact>
          <CocktailList cocktails={cocktailList} />
        </Route>
        <Route path="/create" exact>
          <CreateCocktail cocktails={cocktailList} />
        </Route>
        <Route path="/cocktail-of-the-day" exact>
          <CocktailOfTheDay cocktails={cocktailList} />
        </Route>
        <Route path="/favorites" exact component={Favorites} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
