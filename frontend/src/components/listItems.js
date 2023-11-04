import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';

export const mainListItems = (
  <Box sx={{boxShadow:4, backgroundColor:'#0C7075', borderRadius:5}} >
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <DashboardIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/"> داشبورد</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <PeopleIcon /> 
      </ListItemIcon>
      <Link  className='linkwhite' to="/upload"> بارگذاری قبوض</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <PeopleIcon /> 
      </ListItemIcon>
      <Link  className='linkwhite' to="/uploadwater"> تولید آب </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <BarChartIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/consumptionCoefficient">ضریب مصرف</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <LayersIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/demandCoefficient">ضریب دیماند</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <PeopleIcon /> 
      </ListItemIcon>
      <Link  className='linkwhite' to="/barCoefficient"> ضریب بار</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <BarChartIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/baraverageCoefficient">  ضریب بار متوسط</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <LayersIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/barLimitCoefficient"> ضریب بار حدی</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <PeopleIcon /> 
      </ListItemIcon>
      <Link  className='linkwhite' to="/barCompensationCoefficient"> ضریب جبران بار راکتیو</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <BarChartIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/barCompensationCoefficientActive"> ضریب جبران بار راکتیو فعال</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <LayersIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/MaximunDemand"> ساعت کارکرد دیماند ماکزیمم</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <LayersIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/MaximunDemand"> درصد استفاده در پیک بار</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <LayersIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/MaximunDemand"> درصد استفاده در میان باری </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <LayersIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/MaximunDemand"> درصد استفاده در کم باری </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <LayersIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/MaximunDemand"> سهم هزینه برق مصرفی</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <LayersIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/MaximunDemand"> سهم هزینه انرژی مصرفی</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <LayersIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/MaximunDemand"> میانگین هزینه برق</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon style={{color:'#fff'}}>
        <LayersIcon />
      </ListItemIcon>
      <Link  className='linkwhite' to="/MaximunDemand"> میانگین هزینه انرژی</Link>
    </ListItemButton>
  </Box>
);

