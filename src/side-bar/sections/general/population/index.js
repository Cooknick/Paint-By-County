import React from 'react';
import _ from 'lodash';
import maskNumber from '../../../../mask-numbers';
import DataItem from '../../../data-containers/data-item';
import { connect } from 'react-redux';

const Population = ({ population }) => (
    <DataItem name={"Population"} value={maskNumber(population)} />
)

const mapStateToProps = state => ({
    population: _.get(state, 'lockedCounty.population') || _.get(state, 'hoveredCounty.population', ''),
})

export default connect(mapStateToProps, null)(Population);