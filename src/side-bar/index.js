import React from 'react';

import CountyHeader from './sections/county-header'
import Population from './sections/general/population';
import Temperature from './sections/climate/temperature';

import DataSet from './data-containers/data-set'

const GeneralComponents = () => (
    <div>
        <Population />
    </div>
)

const ClimateComponents = () => (
    <div>
        <Temperature />
    </div>
)

export default function SideBar() {
    return (
        <div className="sidebar">

            <div className="siteHeader" >
                <span>Paint By County</span>
            </div>

            <CountyHeader />
            <DataSet setName="General" DataComponents={() => (<GeneralComponents />)} />
            <DataSet setName="Climate" DataComponents={() => <ClimateComponents />} />

            <span className="byLine">Designed and Developed by <a href="https://twitter.com/mikecooknick">Mike Cooknick</a></span><br />
        </div>
    )
}