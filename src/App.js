import React, { useState } from 'react';
import USMap from './us-map';
import SideBar from './side-bar/index';
import { countyList } from './county-list';

export default function App() {
  const [selectedCounty, setSelectedCounty] = useState({ name: '' });

  function hoverCounty(county) {
    setSelectedCounty({ name: county });
  }

  return (
    <div className="App">
      <USMap hoverCounty={hoverCounty} countyList={countyList} />
      <SideBar selectedCounty={selectedCounty} /> 
    </div>
  );
}
