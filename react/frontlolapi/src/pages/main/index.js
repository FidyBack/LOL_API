import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default class Main extends Component {

    state = {
        nameValue: ''
    };
    
    handleChange = event => {
        this.setState({ nameValue: event.target.value });
    };

    render() {
        return (
            <div className="cadastro">
                <p>Insira seu nome de Invocador:</p>
                <input type="text" className="nickname" value={this.state.nameValue} onChange={this.handleChange}></input>
                <Link to={`/user/${this.state.nameValue}`}>Cadastrar</Link>
            </div>
        )
    }
}