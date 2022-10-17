import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const AddLegend = () => {
  const [form, setForm] = useState()
  const navigate = useNavigate()

  const newLegend = (event) => {
    event.preventDefault()

    fetch(`${process.env.REACT_APP_API_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((err) => console.error(err))
      navigate('/')

    console.log('Product sent to API')
  }

    const handleForm = (event) => {
      console.log(event.target.value)
      setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
      <div className='add-legend'> 
    <Container className="square border border-success d-flex flex-wrap" fluid>
      <Row>
        <Col sm={12} md={8} className="d-flex flex-wrap mb-3">
          <div className="edit-legend">
            <form className="edit-test">
              <label className='edit-label' htmlFor="">Name</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />

              <label className='edit-label' htmlFor="">Type</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="type"
                id="type"
                placeholder="Type"
              />

              <label className='edit-label' htmlFor="">Role</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="role"
                id="role"
                placeholder="Role"
              />
              <br />
            </form>
          </div>

          <div className="edit-legend">
            <form className="edit-test">
              <label className='edit-label' htmlFor="">Passive Description</label>
              <input className='text-box'
                onChange={(event) => handleForm(event)}
                type="text"
                name="pdescript"
                id="pdescript"
                placeholder="Passive Description"
              />

              <label className='edit-label' htmlFor="">Tactical Description</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="tdescript"
                id="tdescript"
                placeholder="Tactical Description"
              />

              <label className='edit-label' htmlFor="">Ultimate Description</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="udescript"
                id="udescript"
                placeholder="Passive Description"
              />
              <br />
            </form>
          </div>

          <div className="edit-legend">
            <form className="edit-test">
              <label className='edit-label' htmlFor="">Passive</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="passive"
                id="passive"
                placeholder="Passive"
              />

              <label className='edit-label' htmlFor="">Tactical</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="tactical"
                id="tactical"
                placeholder="Tactical"
              />

              <label className='edit-label' htmlFor="">Ultimate</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="ultimate"
                id="ultimate"
                placeholder="Ultimate"
              />
              <br />
            </form>
          </div>

          <div className="edit-legend-url">
            <form className='edit-test'>
            <label className='edit-label' htmlFor="">URL</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="url"
                id="url"
                placeholder="URL"
              />

              <label className='edit-label' htmlFor="">Background</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="background"
                id="background"
                placeholder="Background"
              />

              <label className='edit-label' htmlFor="">Passive IMG</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="pimg"
                id="pimg"
                placeholder="Passive IMG"
              />

              <label className='edit-label' htmlFor="">Tactical IMG</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="timg"
                id="timg"
                placeholder="Tactical IMG"
              />

              <label className='edit-label' htmlFor="">Ultimate IMG</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="uimg"
                id="uimg"
                placeholder="Ultimate IMG"
              />
              <br />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
    <button className='add-btn' onClick={(event) => newLegend(event)}>Add Legend</button>
    </div>
  )
}
  export default AddLegend
  