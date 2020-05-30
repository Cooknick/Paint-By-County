import React, { useState } from 'react';

import DesktopWrapper from './desktop';

const MobileWrapper = () => (
  <div className="disclaimer">
    <span>This application is best suited for desktop.</span>
  </div>
)

export default function App(){
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  function updateSize() {
    let width = window.innerWidth || document.body.clientWidth;
    setBrowserWidth(width);
  }

  window.addEventListener('resize', updateSize);

  return (
    <div>
      {browserWidth > 1000 ? <DesktopWrapper /> : <MobileWrapper />}
    </div>
  );
}
