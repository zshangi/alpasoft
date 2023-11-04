import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Form,Container } from 'react-bootstrap'
import { fetchbillDetails } from '../actions/billActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Chart from '../components/Chart';
import ReactSpeedometer from "react-d3-speedometer";
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BillScreen({ match, history }) {
    const dispatch = useDispatch()
    const [consumptionCoefficientvalue, setconsumptionCoefficientvalue] = React.useState('');
    const BillDetails = useSelector(state => state.BillDetails)
    const { error, loading, bill } = BillDetails
    const consumptionCoefficient=bill.consumptionDemand/bill.calculationlDemand
    const demandCoefficient=((bill.calculationlDemand*10)/9)/bill.consumptionDemand
    const barCoefficient=(bill.activeTotalConsumption/(bill.dayNum*24))/bill.consumptionDemand
    const resultconsumptionCoefficient=(consumptionCoefficient/0.6)*200
    const resultdemandCoefficient=900

     
    useEffect(() => {
        dispatch(fetchbillDetails(match.params.id))
    }, [dispatch, match])



    return (
          
          <Box sx={{ flexGrow: 1, margin:3 }}>
      
            <h4>{bill.name}</h4>
            <span className='normaltxt'> از تاریخ : {bill.start_date} تا تاریخ: {bill.end_date}</span>
        <hr/>
        <Grid container spacing={1}>

        <Grid item xs={4} md={4}>
          <Item>
          <span className='titlegrid'>  ضریب مصرف :{consumptionCoefficient.toFixed(3)}</span>
          <ReactSpeedometer
        width={350}
        needleHeightRatio={0.7}
        value={resultconsumptionCoefficient}
        currentValueText="ضریب مصرف"
        customSegmentLabels={[
          {
            text: 'خطر',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'هشدار',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'قابل قبول',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'هشدار',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'خطر',
            position: 'INSIDE',
            color: '#fff',
          },
        ]}
        segmentColors={['#bf616a', '#ebcb8b', '#a3be8c','#ebcb8b', '#bf616a']}
        ringWidth={47}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={'#90f2ff'}
        textColor={'#d8dee9'}
      />
          </Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>
          <span className='titlegrid'> ضریب دیماند :{demandCoefficient.toFixed(3)}</span> 
          <ReactSpeedometer
        width={350}
        needleHeightRatio={0.7}
        value={resultdemandCoefficient}
        currentValueText="ضریب دیماند"
        customSegmentLabels={[
          {
            text: 'خطر',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'هشدار',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'قابل قبول',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'هشدار',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'خطر',
            position: 'INSIDE',
            color: '#fff',
          },
        ]}
        segmentColors={['tomato', '#ffe400', 'green','#ffe400', 'tomato']}
        ringWidth={47}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={'#90f2ff'}
        textColor={'#d8dee9'}
      />
          </Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>
          <span className='titlegrid'> ضریب بار :{barCoefficient.toFixed(3)}</span>
          <ReactSpeedometer
        width={350}
        needleHeightRatio={0.7}
        value={barCoefficient}
        currentValueText="ضریب بار"
        customSegmentLabels={[
          {
            text: 'خطر',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'هشدار',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'قابل قبول',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'هشدار',
            position: 'INSIDE',
            color: '#fff',
          },
          {
            text: 'خطر',
            position: 'INSIDE',
            color: '#fff',
          },
        ]}
        segmentColors={['tomato', '#ffe400', 'green','#ffe400', 'tomato']}
        ringWidth={47}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={'#90f2ff'}
        textColor={'#d8dee9'}
      />
          </Item>
        </Grid>
      </Grid>
    </Box>

    )
}

export default BillScreen
