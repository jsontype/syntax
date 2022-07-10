import React from 'react'

const InputField = ({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
}) => {
    return (
        // <div>
        // <React.Fragment>
        <>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            /><br />
            <div style={{color: 'red'}}>{errorMessage}</div>
        </>
        // </React.Fragment>
        // <div/>
    )
}

export default InputField