import React from "react";

function Homepage(props) {
  const SwipePage = () => {
    //Swipe
  };

  return (
    <article className="homepage">
      <h1>{props.title}</h1>
      <img src={props.image} alt="" />
      <h3>{props.subtitle}</h3>
      <p>{props.description}</p>
      <button type="button" onClick={SwipePage}>
        Next
      </button>
    </article>
  );
}

export default Homepage;
