import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

const key = "RGAPI-cd5a9743-086e-4e33-a1fc-790bb7b31867";

export default class User extends Component {

    state = {
        name : [],
        level: [],
        accountId: [],
        encryptedId: [],
        iconURL: [],
        matches: [],
        champion: []
    }

    componentDidMount() {
        this.loadSummoner();
    }

    loadSummoner = async () => {
        const {nameValue} = this.props.match.params;
        const iconURL = `https://avatar.leagueoflegends.com/BR1/${nameValue}.png`
        const responseInfo = await api.get(`/summoner/v4/summoners/by-name/${nameValue}?api_key=`+key);

        this.setState({
            name: responseInfo.data.name, level: responseInfo.data.summonerLevel, accountId: responseInfo.data.accountId,
            encryptedId: responseInfo.data.id, iconURL: iconURL
        });

        const accId = this.state.accountId;
        const responseMatch = await api.get('/match/v4/matchlists/by-account/'+accId+'?api_key='+key);

        this.setState({
            matches: responseMatch.data.totalGames
        });

        const encId = this.state.encryptedId;
        console.log(encId);
        const responseChamp = await api.get('/champion-mastery/v4/champion-masteries/by-summoner/'+encId+'?api_key='+key);
        this.setState({
            champion: responseChamp.data.championId,
            //  responseChamp.data.championLevel, responseChamp.data.chestGranted 
        });
    }

    render() {

        return (
            <div className='header'>
                <img src={this.state.iconURL}></img>
                <div className='informations'>
                <link href="//db.onlinewebfonts.com/c/2c37f3699d9728b566e9bdc5b11e5180?family=BeaufortW01-Regular" rel="stylesheet" type="text/css"/>
                    <h2>Olá {this.state.name}</h2>
                    <h3>Nível: {this.state.level}</h3>
                    <h3>Partidas Jogadas: {this.state.matches}</h3>
                    <h3>Me: {this.state.champion}</h3>
                </div>
            </div>
        );
    }
}