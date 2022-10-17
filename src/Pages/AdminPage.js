import { useEffect, useState } from "react"
import { Container , Row, Col } from 'react-bootstrap'
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
    <Container fluid>
      <Row >
        <Col className="all-admin d-flex flex-wrap">{allLegends}</Col>
      </Row>
    </Container>
  )
}

export default AdminEdit
