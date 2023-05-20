import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { selectData } from '../../ducks';
import { connect } from 'react-redux';

function DataItem({ name, value, selectedData, selectData }) {
    const [isActive, setActive] = useState(true)

    useEffect(() => {
        if (selectedData[0] === name) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    }, [selectedData, name, setActive])

    return (
        <div onClick={() => selectData([name])} className={`dataItem ${isActive ? 'active' : 'inactive'}`}>
            <span className="dataName">{name}: </span>
            <span className="dataValue">{value}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    selectData: data => dispatch(selectData(data)),
})

const mapStateToProps = state => ({
    selectedData: _.get(state, 'selectedData'),
})


export default connect(mapStateToProps, mapDispatchToProps)(DataItem);