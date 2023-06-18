import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            subject: "World"
        }
        this.changeSubject = this.changeSubject.bind(this);
    }

    changeSubject(e) {
        e.preventDefault();
        const nameInput = document.getElementById("name-input");
        this.setState({subject: nameInput.value});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Hello, {this.state.subject}!</p>
                    <form action={"#"} onSubmit={this.changeSubject}>
                        <input id={"name-input"}
                               type={"text"}
                               placeholder={"Enter your name..."} />
                        <button id={"submit-button"} type={"submit"}>Submit</button>
                    </form>
                </header>
            </div>
        )
    }
}

export default App;
