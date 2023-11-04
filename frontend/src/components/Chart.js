import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import { Row, Col, Container } from 'react-bootstrap'
import { BarPlot,BarChart  } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

const series = [
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [2, 5, 3, 4, 1],
  },
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [5, 6, 2, 8, 9],
  },
  {
    type: 'line',
    yAxisKey: 'pib',
    color: 'red',
    data: [1000, 1500, 3000, 5000, 10000],
  },
];
const GaugeChart = () => {
   
        const textColor = '#AAA'

        return (
            <Container>
          <Row
     
        >
          <Col style={{textAlign:'center',alignItems:'center'}} xs={6} sm={6} md={6} lg={6} xl={6}>
          <ChartContainer
      series={series}
      width={500}
      height={300}
      xAxis={[
        {
          id: 'years',
          data: [2010, 2011, 2012, 2013, 2014],
          scaleType: 'band',
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        {
          id: 'eco',
          scaleType: 'linear',
        },
        {
          id: 'pib',
          scaleType: 'log',
        },
      ]}
    >
      <BarPlot />
      <LinePlot />
      <ChartsXAxis label="Years" position="bottom" axisId="years" />
      <ChartsYAxis label="Results" position="left" axisId="eco" />
      <ChartsYAxis label="PIB" position="right" axisId="pib" />
    </ChartContainer>
          </Col>
          
          
          <Col  style={{textAlign:'center',alignItems:'center'}}  xs={6} sm={6} md={6} lg={6} xl={6}>
          <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
        </Col>
        </Row></Container>
        );
};

export default GaugeChart;