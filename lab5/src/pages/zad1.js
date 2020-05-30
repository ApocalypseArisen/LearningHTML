import React from 'react';
import './design.css';

const Menu = () =>
{
    return (
        <div className="wrapper">
            <div className="top">
                <div className="header">
                    <h1 id="title">Laboratorium 5</h1>
                    <hr id="spacer"/>
                </div>
                <div className="content">
                    <h2>Wprowadzenie</h2>
                    <p>
                        Menu główne dla poszczególnych zadań z Projektowania Interfejsów Wbowych ze strony <a href="http://www.zsk.iiar.pwr.edu.pl/zsk/dyd/intinz/piw/lab/lab5/">zsk</a>.
                        <br/> Zadania 1-3 mają własne podstrony, a zadanie zostało zintegrowane w realizacje całego laboratorium. Na przykład: wykorzystanie mechanizmu Routingu do podziału zadania na podstrony
                    </p>
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

export default Menu;
