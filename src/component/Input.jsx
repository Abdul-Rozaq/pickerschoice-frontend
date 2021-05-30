import React from 'react';

const Input = ({ type = "text", name, placeholder, 
onChange, onBlur, value, touched, errors }) => {
    return (
        <div className="input">
            <div className="input__form">
                <input 
                    type={type}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder={placeholder} 
                />
            </div>

            {touched && errors ? (<div>{errors}</div>) : null}
        </div>
    )
}

export default Input
