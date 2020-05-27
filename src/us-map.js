import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import colorizeCounties from './colorize';
import { stateBorders } from './state-borders';
import { hoverCounty, lockCounty } from './ducks';

function USMap({ hoverCounty, lockCounty, lockedCounty, countyList, guide, selectedData }) {
  const [allCounties, setAllCounties] = useState(countyList);

  async function recolorMap() {
    const freshCounties = await colorizeCounties(countyList, guide, selectedData);
    setAllCounties(freshCounties);
  }

  function toggleLocked(county){
    if(county.fips === lockedCounty.fips){
      lockCounty(undefined);
    } else {
      lockCounty(county)
    }
    
  }

  useEffect(() => {
    recolorMap();
  }, [selectedData])

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
        <g xmlns="http://www.w3.org/2000/svg" id="separator">
          <path style={{ fill: 'none', stroke: '#a9a9a9', strokeWidth: '2.3177309' }} d="m 275.15,525.53 0,63.053 41.271,37.326 m -315.26,-178.34 197.18,0 76.81,77.957 98.592,0 60.76,61.907 0,38.472" id="separatorAK,HI" />
        </g>
        <path id='borders' d={`m ${stateBorders.join(',')}`} style={{ fill: 'none', stroke: '#000000', strokeWidth: '0.89143002' }} />
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