import React, { useState } from "react";

const Color = (props) => {
    const { data, setColor } = props;
    const [activeColor, setActiveColor] = useState(null);
    const handleSelectColor = (colorId) => {
        setActiveColor(colorId);
        setColor(colorId);
    };
    return (
        <>
            <ul className="colors d-flex flex-wrap gap-3 ps-0">
                {data &&
                    data.map((item, index) => {
                        const isActive =
                            item._id === activeColor ? "active" : "";
                        return (
                            <li
                                key={index}
                                onClick={() => {
                                    handleSelectColor(item._id);
                                    setColor(item._id);
                                }}
                                className={isActive}
                            >
                                <div
                                    style={{ backgroundColor: item.title }}
                                ></div>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};

export default Color;
