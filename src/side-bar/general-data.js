import React from 'react';

import findPopulation from '../data-finder/find-population.js'
import DataItem from './data-item';

const GeneralData = ({ countyName, stateName }) => {

    const statePopulation = findPopulation(`${countyName} County, ${stateName}`)

    return (
        <div className="dataSet">
            <div className="dataSetHeader" style={{ borderBottom: '1px solid #B0523B' }}>
                <span>General</span>
            </div>
            <DataItem name={"Population"} value={statePopulation} />
        </div>
    )
}

export { GeneralData as default };