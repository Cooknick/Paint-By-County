import React, { useEffect } from 'react';
import _ from 'lodash';
import { selectData } from '../../ducks';
import { connect } from 'react-redux';

function DataItem({ name, value, selectedData, selectData }) {

    let isActive;

    useEffect(() => {
        isActive = selectedData[0] === name ? 'active' : 'inactive'
    }, [selectedData])


    return (
        <div onClick={() => selectData([name])} className={`dataItem ${isActive}`}>
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