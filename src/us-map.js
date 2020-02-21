import React from 'react';
import { countyList } from './county-list';
import { stateBorders } from './state-borders';

export default function USMap() {
  function onHover(name){
    console.log(name)
  }
  return (
    <svg width="989.97998" height="627.07001" version="1.0" id="svg2">
      <g id="counties" transform="translate(0,0.10698)" style={{ fill: '#d0d0d0', stroke: '#ffffff', strokeWidth: '0.17828999' }}>
        {countyList.map(county => (
          <path onMouseEnter={() => onHover(county.name)} id={county.id} d={county.coordinates} style={{ stroke: "#000000" }}>
            <title id="title10">{county.name}</title>
          </path>
        ))}
      </g>
      <g xmlns="http://www.w3.org/2000/svg" id="separator">
        <path style={{ fill: 'none', stroke: '#a9a9a9', strokeWidth: '2.3177309' }} d="m 275.15,525.53 0,63.053 41.271,37.326 m -315.26,-178.34 197.18,0 76.81,77.957 98.592,0 60.76,61.907 0,38.472" id="separatorAK,HI" />
      </g>
      <path id='borders' d={`m ${stateBorders.join(',')}`} style={{ fill: 'none', stroke: '#000000', strokeWidth: '0.89143002' }} />
    </svg >
  )
}