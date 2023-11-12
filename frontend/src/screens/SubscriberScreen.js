import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
export default function SunscriberScreen() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        try{
            const config = {
                header: {
                    'Content-type': 'application/json'
                }
            }
            if (userInfo){
            const state=1
            console.log(userInfo)
            axios.post('/api/v1/subscribers/',  { state:state},config).then(res => {
                console.log(res)
                setDataList(res['data'])
                console.log(dataList[0])
              })
            
            }
        } catch (error) {
        console.error('Error sending JSON data to the backend:', error);
        }
    }, [])
    
    return(

        <Container style={{direction:'rtl'}}>
            <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className='text'>انتخاب</th>
                                <th className='text'>شماره اشتراک </th>
                                <th className='text'>شهر  </th>


                            </tr>
                        </thead>
                        <tbody>
                            {dataList?.map((item, idx) =>
                                <tr>

                                    <td className='text'>{idx + 1}</td>
   
                                    <td className='text'>{item.name}</td>
                                    <td className='text'>{item.subscribeNum}</td>
                                    <td className='text'></td>


                                </tr>
                            )}
                        </tbody>
                    </Table>
                    </Col>
            </Row>
        </Container>


    )}
