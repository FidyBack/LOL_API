import React from 'react';
import Routes from "./routes";
import './styles.css';
import Header from './components/Header';

const App = () => (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Average&display=swap" rel="stylesheet"></link>
      <Header />
      <Routes />
    </div>
);

export default App;
