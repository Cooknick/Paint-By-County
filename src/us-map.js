import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { stateBorders } from './state-borders';
import populations from './data-sets/population.json';
import brackets from './data-sets/population-brackets.json';
import { findFullRegionName } from './data-finder/find-full-state-name';
import colorSet from './color-set/sand-blue.json'

async function colorByBracket(countyList, setAllCounties) {
  let freshList;

  freshList = countyList.map(county => {
    const filteredPopulation = populations.filter(singlePopulation => _.includes(singlePopulation[0], findFullRegionName(county.name)));
    const flatPopulation = _.flatten(filteredPopulation)[1];
    let retainedStep = 1;

    brackets.forEach(step => {
      if (step.stepValue < flatPopulation) {
        retainedStep = step.stepId
      }
    })

    return { ...county, color: colorSet[retainedStep] };
  })

  setAllCounties(freshList);
}

export default function USMap({ hoverCounty, countyList }) {
  const [activeCounty, setActiveCounty] = useState(null);
  const [allCounties, setAllCounties] = useState(countyList);

  useEffect(() => {
    colorByBracket(countyList, setAllCounties);
  }, [])

  function mouseCounty(county) {
    hoverCounty(county.name);   // sets county data to sidebar
    setActiveCounty(county.id);
  }

  return (
    <div className="usMap">
      <svg width="989.97998" height="627.07001" version="1.0" id="svg2">
        <g id="counties" transform="translate(0,0.10698)" style={{ fill: 'Ivory', stroke: '#ffffff', strokeWidth: '0.17828999' }}>
          {allCounties.map(county => (
            <path onMouseEnter={() => mouseCounty(county)} id={county.id} d={county.coordinates} style={{ stroke: "#000000", fill: county.id === activeCounty ? 'black' : county.color }}>
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