/* import React from 'react';

const Input = ({ id, type = 'text', value, onChange, placeholder, readOnly = false, className = '', ...props }) => {
    return (
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
            className={`border rounded px-3 py-2 ${className}`}
            {...props}
        />
    );
};

export default Input; */
import React from 'react';

const Input = ({ type = 'text', className = '', ...props }) => {
    return (
        <input
            type={type}
            className={`border border-gray-300 p-2 rounded ${className}`}
            {...props}
        />
    );
};

export default Input;

