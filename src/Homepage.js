import React, {Component} from 'react';

const SwipePage = () => {
    //Swipe
}

class Homepage extends Component { 

    constructor(props) 
    { 
        super(props); 
    }
    
    render() {

        return(
        <article className="homepage">
            <title>{this.props.title}</title>
            <h3>{this.props.subtitle}</h3>
            <img src={this.props.image} />
            <par>{this.props.description}</par>
            <button type='button' onClick={SwipePage}>Next</button>
        </article>
        )
    }
    
}

export default Homepage;
