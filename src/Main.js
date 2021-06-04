import React from 'react';
import './Main.css';


function Main() {

        return (
            <div className="main root__section">
                <form className="form main-form">
                    <label className="main-form__label">Write your link here</label>
                    <input type="url" className="main-form__input"></input>
                    <button className="main-form__button">Shorten</button>
                </form>
            </div>
        );
    
}

export default Main;