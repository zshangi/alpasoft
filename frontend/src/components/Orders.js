import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { fetchbills } from '../actions/billActions'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders({history}) {
  const dispatch = useDispatch()

  const listBills = useSelector(state => state.listBill)
  const { error, loading, bills } = listBills

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    dispatch(fetchbills())

}, [ dispatch])
  return (
    <React.Fragment>
      <Title><h4>آخرین قبوض</h4></Title>
      <Table   size="small">
        <TableHead  style={{textAlign:'right'}}>
          <TableRow className='titlegrid'>
            <TableCell ><span className='titlegrid'>نام مشترک</span></TableCell>
            <TableCell><span className='titlegrid'>تعداد روز</span></TableCell>
            <TableCell><span className='titlegrid'>پرباری</span></TableCell>
            <TableCell><span className='titlegrid'>میان باری</span></TableCell>
            <TableCell><span className='titlegrid'>کم باری</span></TableCell>
            <TableCell><span className='titlegrid'>دیماند مصرفی  </span></TableCell>
            <TableCell><span className='titlegrid'>دیماند محاسباتی  </span></TableCell>
            <TableCell><span className='titlegrid'>مبلغ کل     </span></TableCell>
            <TableCell><span className='titlegrid'>رمز رایانه   </span></TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {bills?.map((row) => (
            <TableRow key={row._id}>
              <TableCell><Link to={`/bill/${row._id}`}><span className='normaltxt'>{row.name}</span></Link></TableCell>
              <TableCell><span className='normaltxt'>{row.dayNum}</span></TableCell>
              <TableCell><span className='normaltxt'>{row.medium}</span></TableCell>
              <TableCell><span className='normaltxt'>{row.low}</span></TableCell>             
              <TableCell><span className='normaltxt'>{row.high}</span></TableCell>
              <TableCell><span className='normaltxt'>{row.consumptionDemand}</span></TableCell>             
              <TableCell><span className='normaltxt'>{row.calculationlDemand}</span></TableCell>
              <TableCell><span className='normaltxt'>{row.totalAmount}</span></TableCell>
              <TableCell><span className='normaltxt'>{row.passCom}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
       نمایش بیشتر
      </Link>
    </React.Fragment>
  );
}
