import React, { Component } from 'react'
import axios from 'axios'

export default class PokemonInfo extends Component {

    state = {
        name: "",
        pokemonIndex: "",
        evoChain: []
        
    }
    async componentDidMount(){
        const {pokemonIndex} = this.props.match.params;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/evolution-chain/${pokemonIndex}/`;

        const pokemonRes = await axios.get(pokemonUrl);
        const name = pokemonRes.data.name;

        const evoChain = [];
        await axios.get(pokemonSpeciesUrl).then(res => {
         
        let evoData = res.data.chain.evolves_to[0];

        console.log(evoData);
        do{
          evoChain.push({
            speciesName: evoData.species.name
          });
          evoData = evoData.evolves_to[0]
        } while(!!evoData && evoData.hasOwnProperty('evolves_to'));

        })
        console.log(evoChain);
       
        this.setState({
            name,
            evoChain
            
        
        })
      
    }
  render() {
    return (
      <div>
        <p className="subtitle"><span className="capitalize">{this.state.name}</span> can evolve to:</p>
        <div className="wrapper">
          <div className="model">{this.state.evoChain.map(evo => {
            return <h1 className= "card card.body mx-auto evoChainCard" key={evo.speciesName}>{evo.speciesName}</h1>
          })}</div>
          
        </div>
      </div>
    )
  }
}