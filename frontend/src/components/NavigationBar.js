import { useState, useEffect } from 'react'
import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { userLogoutAction } from '../actions/userActions'
import { NavLink, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import UploadElectBill from './UploadElectBill'

function NavigationBar(props) {
    let navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(userLogoutAction())
        navigate("/")


    }
    const [showuploadelectbillmodal, setShowuploadelectbillmodal] = useState(false);
    const uploadelectbillhandle =()=>{
        setShowuploadelectbillmodal(true)
    }

    return (
        <>
            <Navbar bg="dark" variant="light" data-bs-theme="dark" style={{ direction: 'rtl', height: "60px", }}>
                <Container fluid>
                    <Nav className="ml-auto">
                        <LinkContainer to="/" style={{ marginLeft: '50px' }}>
                            <Navbar.Brand className="nav-item">
                                <h1 className='py-2'>سیستم مدیریت کنترل قبوض آلپاسافت
                                   ( {userInfo ? userInfo.name : null}) 
                                </h1>
                            </Navbar.Brand>
                        </LinkContainer>

                        <LinkContainer to="/companies" style={{borderLeft:'1px solid white'}}>
                            <NavLink className='navlink'>مشترکین</NavLink>
                        </LinkContainer>
                        <LinkContainer to="/formulascreen" style={{borderLeft:'1px solid white'}}>
                            <NavLink className='navlink'>شاخص های عملکرد انرزی</NavLink>
                        </LinkContainer>
                        <NavDropdown style={{borderLeft:'1px solid white'}}
                            title={<span className='navlink'>بارگذاری قبوض</span>}

                        >
                            <NavDropdown.Item >
                                <NavLink className='navitem' onClick={uploadelectbillhandle}>قبض برق</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='navitem'>قبض آب</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                    <Nav >
                        {userInfo &&
                            <>
                                <NavDropdown style={{ paddingLeft: '60px' }}
                                    className='navlink'
                                    title={<span className='navlink'>تنظیمات </span>}

                                >
                                    <NavDropdown.Item>
                                        <NavLink onClick={logoutHandler} className='navitem'>خروج</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }

                        {!userInfo &&
                            <LinkContainer to="/login">
                                <NavLink>Login</NavLink>
                            </LinkContainer>
                        }
                    </Nav>
                </Container>
            </Navbar>
            {showuploadelectbillmodal &&
                <UploadElectBill showuploadelectbillmodal={showuploadelectbillmodal} setShowuploadelectbillmodal={setShowuploadelectbillmodal} />
            }
        </>
    )

}

export default NavigationBar;
