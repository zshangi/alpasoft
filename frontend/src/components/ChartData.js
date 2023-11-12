import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { read, utils, writeFile } from 'xlsx';
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from "react";  
import GaugeChart from 'react-gauge-chart'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

export default function ChartData(props){
    const sohwmodalchart=props.sohwmodalchart
    const setShowmodalchart=props.setShowmodalchart
    const averageValue=props.averageValue
    const handleClose=()=>{
        setShowmodalchart(false)
    }
    return(   
 
    <Modal  show={sohwmodalchart} onHide={e => setShowmodalchart(false)}>
    <Modal.Header closeButton>
      <Modal.Title><span className='text'> ضریب مصرف </span></Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div style={{backgroundColor:'#000'}}>
    <GaugeChart id="gauge-chart4" 
    
  nrOfLevels={10} 
  arcPadding={0.1} 
  cornerRadius={3} 
  percent={0.6} 
/>
</div>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        <span className='text'>بستن</span>
      </Button>
  
    </Modal.Footer>
  </Modal>
    )
}