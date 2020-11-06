import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Pokemon extends Component {

    state = {
        name: "",
        pokemonIndex: "",
        evoChain: ""
    }
    componentDidMount(){
        const  url = this.props.url;
        const name = this.props.name;
        console.log(name);
        const pokemonIndex = url.split("/")[url.split("/").length -2]
        console.log(pokemonIndex);

        this.setState({
            name,
            pokemonIndex
        })
        
    };




    render() {
        

        return ( 
            <div className="wrapper">
                <div className="card card.body mx-auto">
                    <h1>{this.state.name}</h1>
                </div>
                <button className="btn btn-primary btn sm btn-space ">
                    <Link to={`/${this.state.pokemonIndex}`}>Show Evolution Chain</Link>
                </button>
            </div>
            
        )
    }
}