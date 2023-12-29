import React from "react";

const CustomInput = (props) => {
    const { type, name, placeholder, c_class, val, onBl, onCh, style } = props;
    return (
        <div>
            <input
                style={style}
                type={type}
                name={name}
                value={val}
                className={`form-control ${c_class}`}
                placeholder={placeholder}
                onChange={onCh}
                onBlur={onBl}
            />
        </div>
    );
};

export default CustomInput;
