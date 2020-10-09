import React, {Component} from 'react';

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
        </article>
        )
    }
    
}

export default Homepage;
