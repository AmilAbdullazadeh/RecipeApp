import React from "react";

const Form = props => (
  <div className="container">
    <div className="row">
      <div className="mt-4 offset-md-4 col-md-4 col-12">
        <form onSubmit={props.getRecipe} style={{marginBottom:"2rem"}} >
                <input className={"form__input"} type="text" name={"recipeName"} />
                <button className={"form__button"}>Search</button>
        </form>
      </div>
    </div>
  </div>
);

export default Form;
