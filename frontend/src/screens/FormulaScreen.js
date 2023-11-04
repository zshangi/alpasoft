import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { Row, Col, Image, ListGroup, Button, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios'
import ConsumptionCoefficient from './ConsumptionCoefficient'
import DemandCoefficient from './DemandCoefficient'

export default function FormulaScreen(props) {
  const [dataList, setDataList] = useState([]);
  const [far, setFar] = useState(false);
  const [ord, setOrd] = useState(true);
  const [kho, setKho] = useState(false);
  const [tir, setTir] = useState(false);
  const [mor, setMor] = useState(false);
  const [sha, setSha] = useState(false);
  const [meh, setMeh] = useState(false);
  const [aba, setAba] = useState(false);
  const [aza, setAza] = useState(false);
  const [dey, setDey] = useState(false);
  const [bah, setBah] = useState(false);
  const [esf, setEsf] = useState(false);

  const [year01, setYear01] = useState(false);
  const [year02, setYear02] = useState(false);
  const [year03, setYear03] = useState(false);
  useEffect(() => {
    axios.get('/api/v1/electbill/').then(res => {
      console.log(res)
      setDataList(res['data'])
      console.log(dataList[0])
    })

  }, [])
  return (
    <Container>
      <div style={{ direction: 'rtl', marginTop: '50px' }}>



        <Tab.Container id="left-tabs-example" defaultActiveKey="consumptioncoefficient">

          <Row>
            <Col sm={3}>
              <Nav className="nav-links flex-column" style={{ width: '300px' }}>
                <Nav.Item style={{ border: '1px solid #0C7075', marginBottom: '8px', borderRadius: '5px' }}>
                  <Nav.Link eventKey="consumptioncoefficient" className="nav-links">ضریب مصرف</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ border: '1px solid #0C7075', marginBottom: '8px', borderRadius: '5px' }}>
                  <Nav.Link eventKey="demandcoefficient" className="nav-links">ضریب دیماند</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ border: '1px solid #0C7075', marginBottom: '8px', borderRadius: '5px' }}>
                  <Nav.Link eventKey="barcoefficient" className="nav-links">ضریب بار</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ border: '1px solid #0C7075', marginBottom: '8px', borderRadius: '5px' }}>
                  <Nav.Link eventKey="baraveragecoefficient" className="nav-links">ضریب بار متوسط</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ border: '1px solid #0C7075', marginBottom: '8px', borderRadius: '5px' }}>
                  <Nav.Link eventKey="barlimitcoefficient" className="nav-links">ضریب بار حدی</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ border: '1px solid #0C7075', marginBottom: '8px', borderRadius: '5px' }}>
                  <Nav.Link eventKey="barlimitcoefficient" className="nav-links">ضریب جبران بار اکتیو</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ border: '1px solid #0C7075', marginBottom: '8px', borderRadius: '5px' }}>
                  <Nav.Link eventKey="barlimitcoefficient" className="nav-links">ضریب جبران باراکتیو فعال</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ border: '1px solid #0C7075', marginBottom: '8px', borderRadius: '5px' }}>
                  <Nav.Link eventKey="barlimitcoefficient" className="nav-links"> کارکرد دیماند ماکزیمم </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ border: '1px solid #0C7075', marginBottom: '8px', borderRadius: '5px' }}>
                  <Nav.Link eventKey="barlimitcoefficient" className="nav-links"> درصد استفاده در پیک بار</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ border: '1px solid #0C7075', marginBottom: '8px', borderRadius: '5px' }}>
                <Nav.Link eventKey="barlimitcoefficient" className="nav-links"> درصد استفاده در میان باری</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ border: '1px solid #0C7075', marginBottom: '8px', borderRadius: '5px' }}>
                <Nav.Link eventKey="barlimitcoefficient" className="nav-links"> درصد استفاده در کم باری</Nav.Link>
                </Nav.Item>
              </Nav>
              <div style={{ width: '110px', paddingRight: '30px',direction:'ltr' }} className="mb-3">
                <Form.Check reverse label={<span className='text'>فروردین</span>} inline type="checkbox" onChange={() => setFar(!far)} />
                <Form.Check label={<span className='text'>اردیبهشت</span>} inline type="checkbox" onChange={() => setOrd(!ord)} />
                <Form.Check label={<span className='text'>خرداد</span>} inline type="checkbox" onChange={() => setKho(!kho)} />
                  <Form.Check reverse label={<span className='text'>تیر</span>} inline type="checkbox" onChange={() => setTir(!tir)} />
                <Form.Check label={<span className='text'>مرداد</span>} inline type="checkbox" onChange={() => setMor(!mor)} />
              <Form.Check label={<span className='text'>شهریور</span>} inline type="checkbox" onChange={() => setSha(!sha)} />
              <Form.Check reverse label={<span className='text'>مهر</span>} inline type="checkbox" onChange={() => setMeh(!meh)} />
                <Form.Check label={<span className='text'>آبان</span>} inline type="checkbox" onChange={() => setAba(!aba)} />
                <Form.Check label={<span className='text'>آذر</span>} inline type="checkbox" onChange={() => setAza(!aza)} />
                  <Form.Check reverse label={<span className='text'>دی</span>} inline type="checkbox" onChange={() => setDey(!dey)} />
                <Form.Check label={<span className='text'>بهمن</span>} inline type="checkbox" onChange={() => setBah(!bah)} />
              <Form.Check label={<span className='text'>اسفند</span>} inline type="checkbox" onChange={() => setEsf(!esf)} />
              <hr/>
              <Form.Check label={<span className='text'>1401</span>} inline type="checkbox" onChange={() => setYear01(!year01)} />
              <Form.Check label={<span className='text'>1402</span>} inline type="checkbox" onChange={() => setYear03(!year02)} />
              <Form.Check label={<span className='text'>1403</span>} inline type="checkbox" onChange={() => setYear03(!year03)} />


              </div>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="consumptioncoefficient">
                   <ConsumptionCoefficient BillList={dataList}/>
                </Tab.Pane>
                <Tab.Pane eventKey="demandcoefficient">
                  <DemandCoefficient BillList={dataList}/>
                </Tab.Pane>
                <Tab.Pane eventKey="barcoefficient">
                  <DemandCoefficient BillList={dataList}/>
                </Tab.Pane>
                <Tab.Pane eventKey="baraveragecoefficient">
                  <DemandCoefficient BillList={dataList}/>
                </Tab.Pane>
                <Tab.Pane eventKey="barlimitcoefficient">
                  <DemandCoefficient BillList={dataList}/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div></Container>
  )
}