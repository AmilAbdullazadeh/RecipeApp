import React, { Component } from "react";
import "./App.css";

import Form from "./component/form";
import Recipes from "./component/recipes";

const API_KEY = "aedbb2d845263a9cad4857bcec585195";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    const url = `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`;

    e.preventDefault();

    const call_api = await fetch(url);
    const data = await call_api.json();

    this.setState({
      recipes: data.recipes
    });

    console.log(this.state.recipes);
  };

  componentDidMount() {
      // const json = localStorage.getItem("recipes");
      // const recipes = JSON.parse(json);
      // this.setState({
      //   recipes: recipes
      // });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className={"App"}>
        <header className={"App-header"}>
          <h1 className={"App-title"}>Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
