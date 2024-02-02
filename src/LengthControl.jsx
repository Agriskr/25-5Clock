import React from 'react'





function LengthControl({ type, label, length, set }) {

    const labelName = type + "-label";
    const incrementName = type + "-increment";
    const decrementName = type + "-decrement";
    const lengthName = type + "-length";

    const increment = () => {
        if (length < 60) {
            set(length + 1);
        }
    }
    const decrement = () => {
        if (length > 1) {
            set(length - 1);
        }
    }

    return (
        <>
            <div className="length-control">
                <div id={labelName}>{label}</div>
                <button id={decrementName} onClick={decrement} >
                    <i className="fa fa-arrow-down fa-2x"></i>
                </button>
                <div className="btn-level" id={lengthName}>{length}</div>
                <button id={incrementName} onClick={increment} >
                    <i className="fa fa-arrow-up fa-2x"></i>
                </button>
            </div>


        </>
    )
}

export default LengthControl