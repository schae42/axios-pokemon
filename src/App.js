import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import PokemonInfo from './components/PokemonInfo';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return ( 
            <Router>
                <div className = "App" >
                    <div className="header">
                        <div className="title">Pokemon</div>
                    </div>
                    <Switch>
                        <Route exact path ="/" component={Dashboard}/>
                        <Route exact path ="/:pokemonIndex" component={PokemonInfo}/>
                        <div className="container">
                            <Dashboard/>
                        </div>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;