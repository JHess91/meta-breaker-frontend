import { useEffect, useState } from "react"
import { Container , Row, Col, Button } from 'react-bootstrap'
import AdminDisplay from '../Components/AdminDisplay'


const AdminEdit = () => {
  const [legends, setLegends] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT)
    .then(response => response.json())
    .then(data => setLegends(data))
    .catch(err => console.error(err))
  }, [])

  const allLegends = legends.map((legends, index) => {
    return <AdminDisplay key={index} legends={legends} index={index} />
  })

  return (
    <Container align='center' fluid>
      <br />
        <Button size="lg" href="/addlegend" variant="danger" >Add legend</Button>
      <Row >
        <Col className="all-admin d-flex flex-wrap">{allLegends}</Col>
      </Row>
    </Container>
  )
}

export default AdminEdit
