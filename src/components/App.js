import React from 'react';
import './../styles/base.css'

const title = 'Hello Boilerplate';

const image = require('./../images/and-hello-to-you-too-random-citizen.jpg');
console.log(image);

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>{title}</h1>
                <img src="https://media.giphy.com/media/yoJC2A59OCZHs1LXvW/giphy.gif" alt="hi"/>
                <br/>
                <img src={image} width="100" height="50"/>
            </div>
        )
    }
}