import React from "react";

export const actionButton = (name, disabled, onClickFunc) => {
    const klass = disabled ? "btn disable" : "btn"

    return (
        <button className={klass} disabled={disabled} onClick={onClickFunc}>
            {name}
        </button>
    )
}
