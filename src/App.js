// import React, { Component } from 'react';
import Colors from './Style/Colors/Colors';
import data from './Colors.json';

/*
class App extends Component {
    render() {
        return data.map((k, v) => {
            console.log(k, v);
            return <Colors data={k,v} />
        });
    }
}

export default App;*/

export default () => {
    return data.map((k, v) => {
        console.log(k, v);
        return <Colors data={k,v} />
    });
}
