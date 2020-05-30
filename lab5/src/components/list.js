import React from 'react';
import './comp.css';

class Element
{
    constructor(name, img, id)
    {
        this.name = name;
        this.img = img;
        this.id = id
    }
} 

class List extends React.Component
{
    constructor()
    {
        super()
        let e1 = new Element("Jabłko", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1280px-Red_Apple.jpg", 0);
        let e2 = new Element("Samochód", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Renault_Laguna_III_Phase_I_front.JPG/1920px-Renault_Laguna_III_Phase_I_front.JPG", 1);
        let e3 = new Element("Kot", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/1920px-Felis_catus-cat_on_snow.jpg", 2);
        let e4 = new Element("Rakieta", "https://upload.wikimedia.org/wikipedia/commons/7/7d/Apollo_11_Saturn_V_lifting_off_on_July_16%2C_1969.jpg", 3);

        this.elements = [e1, e2, e3, e4]
        this.state = {isOn: 0}
    }

    render()
    {
        return(
            <div>
                <button id="directonal" onClick={this.goLeft}>{'<'}</button>
                <button id="directonal" onClick={this.goRight}>></button>
                <h2>Obrazek: {this.elements[this.state.isOn].name}</h2>
                <img src={this.elements[this.state.isOn].img}  alt="Błędna ścieżka!"></img><br/>
                <button id="directonal" onClick={this.goLeft}>{'<'}</button>
                <button id="directonal" onClick={this.goRight}>></button>
            </div>
        );
    }

    goLeft = () =>
    {
        if((this.state.isOn - 1) >= 0) this.setState(prevState => ({ isOn: prevState.isOn - 1 }))
    }

    goRight = () =>
    {
        if((this.state.isOn + 1) < this.elements.length) this.setState(prevState => ({ isOn: prevState.isOn + 1 }))
    }

}

 export default List
