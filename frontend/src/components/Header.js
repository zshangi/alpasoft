import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown ,Col} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { userLogoutAction } from '../actions/userActions'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useHistory } from 'react-router-dom';

function Header({ history }) {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(userLogoutAction())
        window.location.reload();


    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (

        <header >
            
            <Navbar  expand="sm" collapseOnSelect style={{direction:'rtl', backgroundColor:'#294D61', height:60, padding:0, marginBottom:10}} >
            <Paper sx={{ position: 'fixed',backgroundColor:'#294D61',spacing : 10,boxShadow:5,height:60, width:'100%'}} elevation={3}>
            <Row>
                <Col xs={6} md={6} lg={6} className='p-3'>
                <h1>سیستم مدیریت کنترل قبوض برق آلپاسافت</h1>
                </Col>
                <Col xs={3} md={3} lg={3} className='p-2'>

                    </Col>
                    <Col xs={3} md={3} lg={3} className='p-3' style={{textAlign:'left'}}>
                    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}


      >
        <span className='titlegrid'>
          {userInfo?
        <b>{userInfo.name}</b>
       :
       null
         } </span>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logoutHandler}>خروج</MenuItem>
      </Menu>
    </div>
                        </Col>
                </Row>

            </Paper>
            </Navbar>
        </header>
    )
}

export default Header
