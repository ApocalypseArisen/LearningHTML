import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

class Bar extends React.Component
{
    render()
    {
        return (
            <div className="menu">
                <Link to="/">
                  <button id="0" className="current" onClick={e => this.onButtonClick(e)} >Start</button>
                </Link>
                <Link to="/Forms">
                  <button id="1" className="secondary" onClick={e => this.onButtonClick(e)} >Formularze</button>
                </Link>
                <Link to="/Lists">
                  <button id="2" className="secondary" onClick={e => this.onButtonClick(e)} >Komponent listy</button>
                </Link>
            </div>
        );
    }
    
    onButtonClick = e =>
    {
        var id = e.target.id;
        e.target.className = "current";
        if( id !== "0") document.getElementById("0").className = "secondary";
        if( id !== "1") document.getElementById("1").className = "secondary";
        if( id !== "2") document.getElementById("2").className = "secondary";
    }
}

export default Bar;
