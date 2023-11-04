import React, { useState, useEffect, PureComponent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Form, Container } from 'react-bootstrap'
import { fetchbillDetails } from '../actions/billActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Chart from '../components/Chart';
import ReactSpeedometer from "react-d3-speedometer";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { fetchbills } from '../actions/billActions'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { mainListItems  } from '../components/listItems';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiDrawer from '@mui/material/Drawer';
import {  createTheme, ThemeProvider } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const drawerWidth = 300;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const data = [
  { name: 'Group A', value: 100 },
  { name: 'Group B', value: 400 },
  { name: 'Group C', value: 170 },
];

const COLORS = [ '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '14px',
};
function BillScreen({ match, history }) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch()

  const listBills = useSelector(state => state.listBill)
  const { error, loading, bills } = listBills
  let prebill=[]

  const [far, setFar] =  React.useState(false);
  const [ord, setOrd] = React.useState(true);
  const [kho, setKho] = React.useState(false);
  const [tir, setTir] = React.useState(false);
  const [mor, setMor] = React.useState(false);
  const [sha, setSha] = React.useState(false);
  const [meh, setMeh] = React.useState(false);
  const [aba, setAba] = React.useState(false);
  const [aza, setAza] = React.useState(false);
  const [dey, setDey] = React.useState(false);
  const [bah, setBah] = React.useState(false);
  const [esf, setEsf] = React.useState(false);

  const [year01, setYear01] = React.useState(false);
  const [year02, setYear02] = React.useState(false);
  const [year03, setYear03] = React.useState(false);

  prebill = bills?.filter((bill) => ((far? bill.month==1 : null) || (ord? bill.month==2 : null)  || (kho? bill.month==3 : null)  || (tir? bill.month==4 : null) || (mor? bill.month==5 : null)|| (sha? bill.month==6 : null)|| (meh? bill.month==7 : null)|| (aba? bill.month==8 : null)|| (aza? bill.month==9 : null)|| (dey? bill.month==10 : null) || (bah? bill.month==11 : null) || (esf? bill.month==12 : null) || (year01? bill.year==1401 : null) || (year02? bill.year==1402 : null) || (year03? bill.year==1403 : null)   ))

  useEffect(() => {
    dispatch(fetchbills())

  }, [dispatch,far,ord,year01])


  const defaultTheme = createTheme();

  return (
      <ThemeProvider theme={defaultTheme}>


<Box sx={{ display: 'flex' }}>

   <Drawer variant="permanent" open={open}>
     <Toolbar
       sx={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'flex-end',
         backgroundColor:'#0C7075',
         px: [1],
       }}
     >
       <IconButton  onClick={toggleDrawer}>
       <span className='linkwhite'>استان  </span>  <ChevronLeftIcon />
       </IconButton>
     </Toolbar>
     <Divider />
     <List component="nav">
       {mainListItems}
       <Divider sx={{ my: 1 }} />
     </List>
   </Drawer>
   <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

    <Box sx={{backgroundColor:'#fff',boxShadow:5,height:350, width:'100%',padding:1,borderRadius:5}}>

 <Row >
        <Col  xs={8} md={8}>
          <item>
            <h1>  ساعت کارکرد دیماند ماکزیمم</h1>
            <span className='normaltxt'>فرمودل : مصرف کل*30 / قدرت دیماند محاسبه *تعداد روز</span>

            <hr />
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="1"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>فروردین</span>}
                  labelPlacement="bottom"
                  onChange={() => setFar(!far)}


                />
                <FormControlLabel
                  value="2"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>اردیبهشت</span>}
                  labelPlacement="bottom"
                  onChange={() => setOrd(!ord)}
                />
                <FormControlLabel
                  value="3"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>خرداد</span>}
                  labelPlacement="bottom"
                  onChange={() => setKho(!kho)}

                />
                <FormControlLabel
                  value="4"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>تیر</span>}
                  labelPlacement="bottom"
                  onChange={() => setTir(!tir)}

                />
                <FormControlLabel
                  value="4"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>مرداد</span>}
                  labelPlacement="bottom"
                  onChange={() => setMor(!mor)}
                />    
                  <FormControlLabel
                  value="4"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>شهریور</span>}
                  labelPlacement="bottom"
                  onChange={() => setSha(!sha)}
                />
                  <FormControlLabel
                  value="4"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>مهر</span>}
                  labelPlacement="bottom"
                  onChange={() => setMeh(!meh)}
                />  
                  <FormControlLabel
                  value="4"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>آبان</span>}
                  labelPlacement="bottom"
                  onChange={() => setAba(!aba)}
                />  
                  <FormControlLabel
                  value="4"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>آذر</span>}
                  labelPlacement="bottom"
                  onChange={() => setAza(!aza)}
                />  
                  <FormControlLabel
                  value="4"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>دی</span>}
                  labelPlacement="bottom"
                  onChange={() => setDey(!dey)}
                />
                  <FormControlLabel
                  value="4"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>بهمن</span>}
                  labelPlacement="bottom"
                  onChange={() => setBah(!bah)}
                />
                  <FormControlLabel
                  value="4"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>اسفند</span>}
                  labelPlacement="bottom"
                  onChange={() => setEsf(!esf)}
                />       
              </FormGroup>
            </FormControl>
            <hr />
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="1401"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>1401</span>}
                  labelPlacement="bottom"
                  onChange={() => setYear01(!year01)}

                />
                <FormControlLabel
                  value="1402"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>1402</span>}
                  labelPlacement="bottom"
                  onChange={() => setYear02(!year02)}

                />
                <FormControlLabel
                  value="1403"
                  control={<Checkbox />}
                  label={<span className='normaltxt'>1403</span>}
                  labelPlacement="bottom"
                  onChange={() => setYear03(!year03)}

                />
              </FormGroup>
            </FormControl>
            <br />
            <br />
            <br />
            <br />

          </item>
        </Col>
        <Col item xs={4} md={4} >
       
          <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

        </Col>
        

      </Row>
</Box>
<br/>
<Box sx={{backgroundColor:'#fff' ,width:'100%',padding:1, textAlign:'center',right:0,left:0,alignItems:'center', alignContent:'center'}}>

      <TableContainer style={{ width: 1000, margin: 'auto', borderRadius:15 }}  >
              <Table sx={{ maxWidth: '100%'}} aria-label="customized table">
                <TableHead >
                  <TableRow >
                    <StyledTableCell style={{backgroundColor:'#0C7075'}}><span className='titlegrid'>نام مشترک</span></StyledTableCell>
                    <StyledTableCell style={{ backgroundColor:'#0C7075'}}><span className='titlegrid'>قدرت دیماند محاسبه</span></StyledTableCell>
                    <StyledTableCell style={{ backgroundColor:'#0C7075'}}><span className='titlegrid'>مصرف کل   </span></StyledTableCell>
                    <StyledTableCell style={{ backgroundColor:'#0C7075'}}><span className='titlegrid'>  ساعت کارکرد دیماند ماکزیمم </span></StyledTableCell>




                  </TableRow>
                </TableHead>
                <TableBody style={{ textAlign: 'right' }}>
                  {prebill?.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell style={{ textAlign: 'right' }}><span className='normaltxt'>{row.name}</span></StyledTableCell  >
                      <StyledTableCell  ><span className='normaltxt'>{row.calculationlDemand}</span></StyledTableCell  >
                      <StyledTableCell  ><span className='normaltxt'>{row.activeTotalConsumption}</span></StyledTableCell  >
                      <StyledTableCell><span className='normaltxt'>{((row.activeTotalConsumption*30)/(row.calculationlDemand*row.dayNum)).toFixed(2)}</span></StyledTableCell>    
                      </StyledTableRow >
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </Box>
</Container>
            </Box>
    </ThemeProvider>
  )
}

export default BillScreen
