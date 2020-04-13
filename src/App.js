// create your App component here
import React, { Component } from 'react';

URL = 'http://api.open-notify.org/astros.json'

class App extends Component {
    state = {
        data: "",
        peopleInSpace: []
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        // .then(res => console.log(res.people[0]['craft']))
        .then(res => this.setState({
            data: res,
            peopleInSpace: res.people
        }))
    }

    render() {
        return(
            <div className="Space">
                <header> 
                    <h1> NASA</h1> 
                </header>
                <div className="Grid">
                    <div className="Craft" >
                        <h3> Space craft: </h3> 
                        {/* {this.state.peopleInSpace.craft[0]}  */}
                        {this.state.peopleInSpace.map(craft => craft.craft)}
                        <h3> Status: </h3>  {this.state.data.message} 
                        <h3> Passengers: </h3> {this.state.data.number} 
                        <h3> Name: </h3>
                        {this.state.peopleInSpace.map(person => 
                            <div> {person.name} </div> )}
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 