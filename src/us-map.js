import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import colorizeCounties from './colorize';
import { stateBorders } from './state-borders';
import { hoverCounty, lockCounty } from './ducks';

async function recolorMap({ countyList, guide, selectedData, setAllCounties }) {
  const freshCounties = await colorizeCounties(countyList, guide, selectedData);
  setAllCounties(freshCounties);
}

function USMap({ hoverCounty, lockCounty, lockedCounty, countyList, guide, selectedData }) {
  const [allCounties, setAllCounties] = useState(countyList);



  function toggleLocked(county) {
    if (county.fips === lockedCounty.fips) {
      lockCounty(undefined);
    } else {
      lockCounty(county)
    }

  }

  useEffect(() => {
    recolorMap({ countyList, guide, selectedData, setAllCounties });
  }, [countyList, guide, selectedData, setAllCounties])

  return (
    <div className="usMap">
      <svg width="989.97998" height="627.07001" version="1.0" id="svg2">
        <g id="counties" transform="translate(0,0.10698)" style={{ fill: 'Ivory', stroke: '#ffffff', strokeWidth: '0.17828999' }}>
          {allCounties.map((county, i) => (
            <path className="mappedCounty"
              onMouseEnter={() => hoverCounty(county)}
              onClick={() => toggleLocked(county)}
              id={county.fips}
              key={i}
              d={county.coordinates}
              style={{ stroke: "#000000", fill: county.fips === lockedCounty.fips ? 'white' : county.color }}>
              <title id="title10">{county.name}</title>
            </path>
          ))}
        </g>
        <path id='borders' d={`m ${stateBorders.join(',')}`} style={{ fill: 'none', stroke: '#041045', strokeWidth: '5' }} />
      </svg >
    </div>
  )
}
const mapStateToProps = state => ({
  guide: _.get(state, 'guide', []),
  selectedData: _.get(state, 'selectedData', ''),
  lockedCounty: _.get(state, 'lockedCounty', '')
})

const mapDispatchToProps = dispatch => ({
  hoverCounty: county => dispatch(hoverCounty(county)),
  lockCounty: county => dispatch(lockCounty(county))
})

export default connect(mapStateToProps, mapDispatchToProps)(USMap);