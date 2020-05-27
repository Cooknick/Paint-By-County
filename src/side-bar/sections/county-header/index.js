import React from 'react';
import { connect } from 'react-redux';

const CountyHeader = ({ selectedCounty }) => {
    const { state = '', county = '' } = selectedCounty;

    return (
        <div className="countyHeader">
            <span className="countyName">{county}</span>
            <span className="stateName">{state}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedCounty: state.lockedCounty || state.hoveredCounty || {}
})

export default connect(mapStateToProps, null)(CountyHeader)