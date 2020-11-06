import React, { Component } from 'react'
import Pokemon from './Pokemon'
import axios from 'axios'
export default class PokemonList extends Component {
    state ={
        url: 'https://pokeapi.co/api/v2/pokemon-species/?limit=60',
        pokemon: null
    };
    async componentDidMount(){
        console.log("componentDidMount")
        const res = await axios.get(this.state.url);
        this.setState({
            pokemon: res.data['results']
        })
    }

    render() {

        return (
            <div>
                 <p className="subtitle">Here is a list of 60 pokemon-species:</p>
                <div className="wrapper">
                {this.state.pokemon ? (
                    <div className="model">

                    {this.state.pokemon.map(
                        pokemon => <Pokemon
                        key = {pokemon.name}
                        name = {pokemon.name}
                        url = {pokemon.url}

                        />
                        
                    )}
                    </div>

                ): (<h1>"waiting for Pokemon"</h1>)}
                </div>
            </div>
        )
    }
}