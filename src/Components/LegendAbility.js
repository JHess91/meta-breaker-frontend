import { Col, Stack, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const LegendAbility = () => {
  const location = useLocation()
  const {
    passive,
    pimg,
    pdescript,
    tactical,
    timg,
    tdescript,
    ultimate,
    uimg,
    udescript,
  } = location.state
  console.log(location)

  return (
    <Row>
      <Col sm={4}>
        <div align="center" className="ability-container">
          <div className="ability-title">Passive</div>
          <img align="center" className="ability-img" src={pimg} alt="" />
          <div className="ability-name">{passive}</div>
          <div className="ability-descript">
            <p>{pdescript}</p>
          </div>
        </div>
      </Col>
    
      <Col sm={4}>
        <div align="center" className="ability-container">
          <div className="ability-title">Tactical</div>
          <img className="ability-img" src={timg} alt="" />
          <div className="ability-name">{tactical}</div>
          <div className="ability-descript">
            <p>{tdescript}</p>
          </div>
        </div>
      </Col>

      <Col sm={4}>
        <div align="center" className="ability-container">
          <div className="ability-title">Ultimate</div>
          <img className="ability-img" src={uimg} alt="" />
          <div className="ability-name">{ultimate}</div>
          <div className="ability-descript">
            <p>{udescript}</p>
          </div>
        </div>
      </Col>
    </Row>

    // <Stack gap={6} >
    //   <div align='center' className="ability-container">
    //     <div className="ability-title">Passive</div>
    //     <div className="ability-name">{passive}</div>
    //     <img align='center' className="ability-img" src={pimg} alt="" />
    //     <div className="ability-descript"><p>{pdescript}</p></div>
    //   </div>
    //   <div align='center' className="ability-container">
    //     <div className="ability-title">Tactical</div>
    //   <div className="ability-name">{tactical}</div>
    //   <img className="ability-img" src={timg} alt="" />
    //   <div className="ability-descript"><p>{tdescript}</p></div>
    //   </div>
    //   <div align='center' className="ability-container">
    //     <div className="ability-title">Ultimate</div>
    //   <div className="ability-name">{ultimate}</div>
    //   <img className="ability-img" src={uimg} alt="" />
    //   <div className="ability-descript"><p>{udescript}</p></div>
    //   </div>
    // </Stack>
  )
}

export default LegendAbility
