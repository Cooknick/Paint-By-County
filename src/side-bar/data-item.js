import React from 'react';

export default function DataItem({ name, value }) {
    return (
        <div className="dataItem">
            <span className="dataName">{name}: </span> 
            <span className="dataValue">{value}</span>
        </div>
    )
}