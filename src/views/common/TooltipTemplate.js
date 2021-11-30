import React from 'react';
import { countriesGDP } from 'Observatorio/common/data.js';

import PieChart from 'Observatorio/common/PieChartComponent.js';

const { format } = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
});

const getPieData=(name)=>{
  return countriesGDP[name] ? [
    { name: 'industry', value: countriesGDP[name].industry },
    { name: 'services', value: countriesGDP[name].services },
    { name: 'agriculture', value: countriesGDP[name].agriculture },
  ] : null;
}

const TooltipTemplate = (info) => {
  const name = info.attribute('name');
  const countryGDPData = countriesGDP[name];
  const total = countryGDPData && countryGDPData.total;
  const pieData = getPieData(name);

  const gdpInfo = total
    ? <div id="nominal">
      {`Nominal GDP: $${format(total)}M`}
    </div>
    : null;

  const graphic = pieData
    ? <PieChart data={pieData}></PieChart>
    : <div>No economic development data</div>;

  return (
    <div>
      <h4>{info.attribute('name')}</h4>
      {gdpInfo}
      {graphic}
    </div>
  );
}

export default TooltipTemplate;
