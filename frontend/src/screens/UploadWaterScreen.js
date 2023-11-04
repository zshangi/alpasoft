import React, { useState } from "react";  
import { read, utils, writeFile } from 'xlsx';
import { useSelector, useDispatch } from 'react-redux'

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import axios from 'axios';
import { Container, Link, TextField } from "@mui/material";
import Button from '@mui/material/Button'; 
import template from '../templatewater.xlsx'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const HomeComponent = ({history}) => {
    const [billInfo, setBillInfo] = useState([]);
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const handleImport = ($event) => {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    setBillInfo(rows)

                }
            }
            reader.readAsArrayBuffer(file);
        }
    }

    const handleExport = () => {
      sendJsonDataToBackend(billInfo);
      history.push('/')

    }
    const sendJsonDataToBackend = async (billInfo) => {
      try {
        const config = {// request setting
          header: {
              'Content-type': 'application/json'
          }
      }
      console.log(userInfo.id)
        await axios.post('/api/v1/waterbill/upload/',  { data: billInfo, month:month,year:year,state:1},config);
        console.log('JSON data sent to the backend successfully.');
      } catch (error) {
        console.error('Error sending JSON data to the backend:', error);
      }
    };
    const handleChangemonth = (event) => {
        setMonth(event.target.value);
      };
      const handleChangeyear = (event) => {
        setYear(event.target.value);
      };
    return (
        <Container>
          <Grid container spacing={3} style={{direction:'rtl'}}>
         
                <Grid item xs={12}  md={12} xl={12}>
                <span className="linkblack">لطفا قبل از بارگذاری فایل، فایل نمونه را دانلود و اطلاعات را در آن کپی و سپس بارگذاری نمایید.</span>  

                <a
  href={template}
  download="Example-PDF-document"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outlined"><span className="linkblack">دانلود اکسل نمونه</span></Button>
</a>
                <Card style={{alignItems:'right', textAlign:'right',marginTop:2, padding:4}}>
                   
                <span className="linkblack">انتخاب فایل: </span>  
                <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleImport}
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" sx={{border:2}}/>
               <br/>
    
     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
     <InputLabel id="demo-select-small-label"><span className='normaltxt'>انتخاب ماه</span></InputLabel>
     <Select
       labelId="demo-select-small-label"
       id="demo-select-small"
       value={month}
       label="ماه"
       onChange={handleChangemonth}
     >
       <MenuItem value="">
         <em>None</em>
       </MenuItem>
       <MenuItem value={1}><span className='normaltxt'>فروردین</span></MenuItem>
       <MenuItem value={2}><span className='normaltxt'>اردیبهشت</span></MenuItem>
       <MenuItem value={3}><span className='normaltxt'>خرداد</span></MenuItem>
       <MenuItem value={4}><span className='normaltxt'>تیر</span></MenuItem>
       <MenuItem value={5}><span className='normaltxt'>مرداد</span></MenuItem>
       <MenuItem value={6}><span className='normaltxt'>شهریور</span></MenuItem>
       <MenuItem value={7}><span className='normaltxt'>مهر</span></MenuItem>
       <MenuItem value={8}><span className='normaltxt'>آبان</span></MenuItem>
       <MenuItem value={9}><span className='normaltxt'>آذر</span></MenuItem>
       <MenuItem value={10}><span className='normaltxt'>دی</span></MenuItem>
       <MenuItem value={11}><span className='normaltxt'>بهمن</span></MenuItem>
       <MenuItem value={12}><span className='normaltxt'>اسفند</span></MenuItem>
     </Select>
   </FormControl>
        
      &nbsp;&nbsp;
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
     <InputLabel id="demo-select-small-label"><span className='normaltxt'>انتخاب سال</span> </InputLabel>
     <Select
       labelId="demo-select-small-label"
       id="demo-select-small"
       value={year}
       label="<span className='titlegrid'>سال</span>"
       onChange={handleChangeyear}
     >
       <MenuItem value="">
         <em>None</em>
       </MenuItem>
       <MenuItem value={1401}><span className='normaltxt'>1401</span></MenuItem>
       <MenuItem value={1401}><span className='normaltxt'>1402</span></MenuItem>
       <MenuItem value={1401}><span className='normaltxt'>1403</span></MenuItem>

     </Select>
   </FormControl>

                <hr/>
                <span className="linkblack">در صورت تایید اطلاعات، به پایگاه داده منتقل نمایید
</span>
                <Button onClick={handleExport} variant="contained"><span className='linkwhite'>ارسال فایل <i className="fa fa-download"></i></span> 
                            </Button>
            </Card>
                </Grid>
                <Grid item xs={12}  md={12} xl={12}>
                <Card style={{alignItems:'center', textAlign:'center',marginTop:2}}>
            <div className="row">
                <div className="col-lg-12 offset-3">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col"><span className='titlegrid'>ردیف </span></th>

                           <th scope="col"><span className='titlegrid'>نام مشترک</span></th>
                           <th scope="col"><span className='titlegrid'>جمع تولید آب</span></th>
                           <th scope="col"><span className='titlegrid'>جمع ساعت</span></th>
                           <th scope="col"><span className='titlegrid'>شماره اشتراک    </span></th>
   


                            </tr>
                        </thead>
                        <tbody> 
                                {
                                    billInfo.length
                                    ?
                                    billInfo.map((movie, index) => (
                                        <tr key={index}>
                                            <th scope="row">{ index + 1 }</th>
                                            <td><span className='normaltxt'>{movie.name}</span></td>
                                            <td><span className='normaltxt'>{movie.totalProduction}</span></td>
                                            <td><span className='normaltxt'>{movie.totalHours}</span></td>
                                            <td><span className='normaltxt'>{movie.passCom}</span></td>
                                        </tr> 
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center"><span className="normaltxt">در حال حاظر قبضی بارگذاری نشده است</span></td>
                                    </tr> 
                                }
                        </tbody>
                    </table>
                </div>
                </div>
                </Card>
                </Grid>
                </Grid>
            </Container>

    );
};

export default HomeComponent;
