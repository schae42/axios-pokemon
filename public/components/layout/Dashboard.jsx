
import React, { Component } from 'react'

import PokemonList from '../PokemonList'

export default class Dashboard extends Component {
    render() {
        return ( <
            div >
                <div className="row">
                    <div>
                        <PokemonList/>
                    </div>
                </div>



            <
            /div>
        )
    }
}