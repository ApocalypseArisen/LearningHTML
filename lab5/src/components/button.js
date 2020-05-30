import React from 'react';
import './comp.css';

class Button extends React.Component
{
    constructor()
    {
        super()
        this.state = { visible: false};
        this.action = "pokazać";
    }

    RenderImage(props)
    {
        const visible = props.visible;
        if (visible)
        {
            return (
                <div>
                    <br/><img src="https://i.ytimg.com/vi/U7VmBgp9D9o/maxresdefault.jpg" alt="Jeżeli mnie widzisz, coś poszło bardzo nie tak!"></img>
                </div>
            );
        }
        else 
        return (<div></div>);
    }

    render()
    {
        const choice = this.state.visible;
        return(
            <div>
                <h2>Naciśnij przycisk aby {this.action} obrazek!</h2>
                <button id="inputButton" onClick={this.showImage}>Kliknij mnie!</button>
                <this.RenderImage visible={choice} />
            </div>
        );
    }

    showImage = () =>
    {
        this.setState(prevState => ({ visible: !prevState.visible }))
        if(!this.state.visible) this.action = "ukryć";
        else this.action = "pokazać";
    }
}

export default Button
