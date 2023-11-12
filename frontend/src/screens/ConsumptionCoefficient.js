
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ChartData from '../components/ChartData'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['بزرگتر از 1.6', 'از 1 تا 1.6', 'از 0.99 تا 1'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',

            ],
            borderWidth: 1,
        },
    ],
};
export default function ComsumptionCoefficient(props) {
    const BillList = props.BillList
    console.log(BillList)


    const [selectedNames, setSelectedNames] = useState([]);
    const [average, setAverage] = useState(0);

    const [totalValue, setTotalValue] = useState(0);
    const [sohwmodalchart, setShowmodalchart] = useState(false)
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
    const HandleComparison = () => {
        setShowmodalchart(true)

    }
    useEffect(() => {
        let consumption = BillList.reduce((acc, item) => acc + (item.consumptionDemand / BillList.length), 0).toFixed(2)

        let calculation = BillList.reduce((acc, item) => acc + (item.calculationlDemand / BillList.length), 0).toFixed(2)
        setAverage(consumption / calculation)

    }, [BillList])
    return (
        <Container >
            <Row className="m-2" >
                <Col xs={6} sm={6} md={6} lg={6} xl={6}  >
                    <h2>ضریب مصرف</h2>
                    <p className="text">ضریب مصرف = قدرت مصرفی / قدرت دیماند محاسباتی</p>

                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ textAlign: 'left', alignItems: 'left' }}>
                    <Doughnut style={{ maxHeight: '300px', maxWidth: '300px', fontSize: '15px' }} className="text" data={data} />


                </Col>
            </Row>
            <hr />
            <Row className="mx-5">
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>

                </Col>

                <Col xs={4} sm={4} md={4} lg={4} xl={4} style={{ textAlign: 'left' }}>
                    <Button size="sm" variant="outline-primary" onClick={HandleComparison}><span className="text">مقایسه</span></Button>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Form.Control size="sm" type="email" placeholder="جستجو" />
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive="md" style={{ margin: '0' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className='text'>انتخاب</th>
                                <th className='text'>نام مشترک</th>
                                <th className='text'>قدرت مصرفی</th>
                                <th className='text'>قدرت دیماند محاسبه</th>
                                <th className='text'>ضریب مصرف</th>


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
                                    <td className='text'>{item.consumptionDemand}</td>
                                    <td className='text'>{item.calculationlDemand}</td>
                                    <td className='text'>{(item.consumptionDemand / item.calculationlDemand).toFixed(2)}</td>


                                </tr>
                            )}
                        </tbody>
                    </Table>
                    {totalValue}{averageValue}

                </Col>
            </Row>


            {sohwmodalchart &&
                <ChartData sohwmodalchart={sohwmodalchart} setShowmodalchart={setShowmodalchart} averageValue={averageValue} />
            }
        </Container>
    )
}

