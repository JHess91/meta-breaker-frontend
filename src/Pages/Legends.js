import { useEffect, useState } from "react"
import { Container , Row, Col } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';  

import { LegendCards } from "../Components/LegendCards"

const Legends = () => {
  const [ legends, setLegends] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT)
    .then(response => response.json())
    .then(data => setLegends(data))
    .catch(err => console.error(err))
  }, [])

  const allLegends = legends.map((legends, index) => {
    return <LegendCards key={index} legends={legends} index={index} />
  })


  return (
    <Container style={{backgroundColor: '#757575'}} fluid>
      <Row md={12} sm={8}>
        <h5 md={12} sm={8} className="legends-title" align="center">LEGENDS</h5>
        <Col className="d-flex flex-wrap">{allLegends}</Col>
      </Row>
    </Container>
  )
}

export default Legends