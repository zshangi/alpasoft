
import React, { useState } from "react";  
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ChartData from '../components/ChartData'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
export default function UseInMediumLoad(props) {
    const BillList = props.BillList
    const [selectedNames, setSelectedNames] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    const [sohwmodalchart,setShowmodalchart]=useState(false)
    const handleCheckboxChange = (name, value) => {
      setSelectedNames((prevSelectedNames) =>
        prevSelectedNames.includes(name)
          ? prevSelectedNames.filter((n) => n !== name)
          : [...prevSelectedNames, name]
      );
      setTotalValue((prevTotal) =>
        selectedNames.includes(name) ? prevTotal - Number(value) : prevTotal + value
      );
    };
  
    const averageValue =
      selectedNames.length > 0 ? totalValue / selectedNames.length : 0;
    const HandleComparison =()=>{
        setShowmodalchart(true)

    } 
    return (
        <>

            <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <Form.Control size="sm" type="email" placeholder="جستجو" />
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <Button size="sm" variant="outline-primary" onClick={HandleComparison}>مقایسه</Button>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>

                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className='text'>انتخاب</th>
                                <th className='text'>نام مشترک</th>
                                <th className='text'>مصرف کل </th>
                                <th className='text'>   مصرف اکتیو میان باری  </th>
                                <th className='text'>درصد استفاده در میان باری      </th>


                            </tr>
                        </thead>
                        <tbody>
                            {BillList?.map((item, idx) =>
                                <tr>

                                    <td className='text'>{idx + 1}</td>
                                    <td>      
                                        <input
                                        type="checkbox"
                                        checked={selectedNames.includes(item.subscriber.name)}
                                        onChange={() => handleCheckboxChange(item.subscriber.name, Number((item.calculationlDemand / item.consumptionDemand).toFixed(2)))}
                                    />
                                    </td>
                                    <td className='text'>{item.subscriber.name}</td>
                                    <td className='text'>{item.activeTotalConsumption}</td>
                                    <td className='text'>{item.medium}</td>
                                    <td className='text'>{((item.medium/item.activeTotalConsumption)*100).toFixed(2)}</td>


                                </tr>
                            )}
                        </tbody>
                    </Table>
                    {totalValue}{averageValue}

                </Col>
            </Row>


            {sohwmodalchart &&
                <ChartData sohwmodalchart={sohwmodalchart} setShowmodalchart={setShowmodalchart} averageValue={averageValue}  />
            }
        </>
    )
}

