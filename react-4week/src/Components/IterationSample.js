import React from 'react';

const IterationSample = () => {
  const samples = ['개','고양이','토끼','사자','호랑이']
  const sampleslist = samples.map(sample => <li>{sample}</li>);
  return (
    <div>
      {sampleslist}
    </div>
  )
}

export default IterationSample