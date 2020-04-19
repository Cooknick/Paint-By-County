import React from 'react';

import ClimateData from './climate-data'
import GeneralData from './general-data'
import { findCountyName, findFullStateName, isLouisiana } from '../data-finder/find-full-state-name';

export default function SideBar({ selectedCounty }) {
    const { name } = selectedCounty;

    const countyName = findCountyName(name);
    const stateName = findFullStateName(name);

    return (
        <div className="sidebar">
            <div className="siteHeader" style={{ borderBottom: '1px solid #5B8248' }}>
                <span>Paint By County</span>
            </div>

            <div className="countyHeader">
                <span className="countyName">{`${countyName} ${isLouisiana(stateName)}`}</span>
                <span className="stateName">{stateName}</span>
            </div>

            <GeneralData countyName={countyName} stateName={stateName} />
            {/* <ClimateData countyName={countyName} stateName={stateName} /> */}

            <span className="byLine">Designed and Developed by <a href="https://twitter.com/mikecooknick">Mike Cooknick</a></span><br />
            <span className="footnote">Population Data Source: United States Census Bureau's 2018 American Community Survey </span>
            <span className="footnote">This product uses the Census Bureau Data API but is not endorsed or certified by the Census Bureau.</span>
        </div>
    )
}