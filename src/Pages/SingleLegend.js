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
      // style={{ backgroundColor: '#757575', paddingLeft: 0, paddingRight: 0 }}
      style={{ backgroundImage: `url("https://fianl-project-images.s3.amazonaws.com/background/background6.jpg")`, paddingLeft: 0, paddingRight: 0, backgroundAttachment: 'fixed', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'middle' }}
      fluid
    >
      <div className="single-header">
        <h1 className="single-title">{name}</h1>
        <h5 className="single-type-desc">Legend Type:</h5>
        <h5 className="single-type">{type}</h5>
        <br />
      </div>

      <Row className='d-flex justify-content-center gx-1'>
        <Col sm={12} md={6}>
          <Image src={background} alt="" className='single-background mx-auto d-block' fluid />
        </Col>
        <Col sm={12} md={6} >
          <LegendAbility />
        </Col>
      </Row>
    </Container>
  )
}

export default SingleLegends
