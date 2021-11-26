import React from 'react';
import PieChart, {
  Series,
  Label,
  Legend,
  Connector,
} from 'devextreme-react/pie-chart';
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
    
    gdpsectors: {
        width: "400px",
        height: "200px",
      }
});

const customizeText = (pointInfo) => {
  return `${pointInfo.argument[0].toUpperCase()}${
    pointInfo.argument.slice(1)
  }: $${pointInfo.value}M`;
}

const PieChartComponent = (props) => {
  return (
    <PieChart className={classes.boton} id="gdp-sectors"
      dataSource={props.data}
      animation={false}
    >
      <Series
        argumentField="name"
        valueField="value">
        <Label
          visible={true}
          customizeText={customizeText}
        >
          <Connector
            visible={true}
            width={1}
          ></Connector>
        </Label>
      </Series>
      <Legend visible={false}></Legend>
    </PieChart>
  );
}

export default PieChartComponent;
