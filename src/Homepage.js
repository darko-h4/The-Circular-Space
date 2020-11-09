import React from 'react';

function Homepage(props) { 

    const SwipePage = () => {
        //Swipe
    }
    
    return(

        <article className="homepage">
            <title>{props.title}</title>
            <h3>{props.subtitle}</h3>
            <img src={props.image} />
            <div>{props.description}</div>
            <button type='button' onClick={SwipePage}>Next</button>
        </article>
    )
    
}

export default Homepage;
