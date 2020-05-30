import React from 'react';
import './design.css';
import Button from '../components/button.js'

class Forms extends React.Component 
{
    constructor()
    {
        super();
        this.state = { name: 'użytkowniku'};
    }

    render()
    {
        return (
            <div className="wrapper">
                <div className="top">
                    <div className="header">
                        <h1 id="title">Przyciski, formularze i zdarzenia</h1>
                        <hr id="spacer"/>
                    </div>
                    <div className="content">
                        <form>
                            <p>Witaj, {this.state.name}!</p>
                            <br/>
                            <p>Wprowadź nazwę użytkownika:</p>
                            <input
                                type='text'
                                onChange={e => this.updateName(e)}
                            />
                        </form>
                        <Button />
                    </div>
                </div>
                <footer>
                    <h3>Informacje</h3>
                    <p> 
                        Autor: Adam Krizar 241276 <br/> Przedmiot: Projektowanie Interfejsów Webowych: laboratorium 5. 
                    </p>
                </footer>
            </div>
        );
    }

    updateName = e =>
    {
        this.setState({name: e.target.value})
    }
}

export default Forms;
