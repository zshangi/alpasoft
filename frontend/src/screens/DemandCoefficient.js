
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
export default function ComsumptionCoefficient( props )
{
    const BillList = props.BillList
 return(
  <>

<Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Table responsive="md">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th className='text'>نام مشترک</th>
                                        <th className='text'>قدرت مصرفی</th>
                                        <th className='text'>قدرت دیماند محاسبه</th>
                                        <th className='text'>ضریب دیماند</th>
                            

                                    </tr>
                                </thead>
                                <tbody>
                                {BillList?.map((item, idx) =>
                                        <tr>
                                            <td>{idx + 1}</td>
                                            <td className='text'>{item.subscriber.name}</td>
                                            <td className='text'>{item.consumptionDemand}</td>
                                            <td className='text'>{item.calculationlDemand}</td>
                                            <td className='text'>{((item.calculationlDemand*10/9) / item.consumptionDemand).toFixed(2)}</td>
                                        </tr>
                                    )}

                                </tbody>
                            </Table>
                        </Col>
                    </Row>
</>
 )
}

