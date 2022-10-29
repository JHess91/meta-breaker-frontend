import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LegendAbility from '../Components/LegendAbility'
import Image from 'react-bootstrap/Image'

const SingleLegends = () => {
  const location = useLocation()
  const { name, type, background } = location.state
  console.log(location.state)

  return (
    <Container
      id='single-legend-page'
      fluid
    >
      <Row className="d-flex justify-content-center gx-5">
        <Col sm={12} md={4}>
          <Image
            src={background}
            alt=""
            className="single-background mx-auto d-block"
            fluid
          />
        </Col>
        <Col sm={12} md={6} align='center'>
          <h1 className="single-title">{name}</h1>
          <h5 className="ability-title">Legend Type:</h5>
          <h5 className="ability-name">{type}</h5>
          <LegendAbility />
          <button className="button mt-5" onClick={() => window.location.href = './legends' }>
              <span className="actual-text">&nbsp;Back&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;Back&nbsp;
              </span>
            </button>
        </Col>
      </Row>
      <Row>
        <Col align='center'>
        
        </Col>
      </Row>
    </Container>
  )
}

export default SingleLegends
