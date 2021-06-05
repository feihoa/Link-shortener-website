import React from 'react';
import './Main.css';
import Api from './Api.js';


function Main() {

    const [longLink, setLongLink] = React.useState('');
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    const linkRef = React.useRef();


    const handleChange = (e) => {        
        setValue(e.target.value);
        setError(handleError(e));
        setLongLink(e.target.value)

    }

    const api = new Api();

    const handleError = (e) => {
    
        if (e.target.value.length === 0) {
            return 'This is a required field';
        }
        else if (!/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/.test(e.target.value)) {
            return 'There should be a link here';
        } else {
            return '';
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(linkRef.current.value && !error){
            api.shortLink(linkRef.current.value).then((res) => {
                setValue(res.link);
                handleClick(res.link)
            }).catch((err) => {
                setError("Error " + err);
              })
        }
        
    }

    const handleClick = () => {
        document.querySelector(".main-form__input").select();
        document.execCommand("copy");
    }

        return (
            <div className="main root__section">
                <form className="form main-form" onSubmit={handleSubmit}>
                    <label className="main-form__label">Write your link here</label>
                    <input value={value} ref={linkRef} minLength="5" onChange={handleChange} required type="url" className="main-form__input"></input>
                    <span  id="error" className="error main-form__error">{error}</span>      
                                        <button onClick={handleClick} id="copy" className=" main-form__copy">Copy</button>      
                    <button type="submit"  className="main-form__button">Shorten</button>
                </form >
            </div>
        );
    
}

export default Main;