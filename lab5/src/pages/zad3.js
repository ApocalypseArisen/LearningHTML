import React from 'react';
import './design.css';
import List from '../components/list.js'


class Lists extends React.Component 
{

    render()
    {
        return (
            <div className="wrapper">
                <div className="top">
                    <div className="header">
                        <h1 id="title">Komponent listy</h1>
                        <hr id="spacer"/>
                    </div>
                    <div className="content">
                        <List />
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
}

export default Lists;
