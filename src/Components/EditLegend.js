import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const EditLegend = () => {
  const [form, setForm] = useState({})
  const location = useLocation()
  const navigate = useNavigate()

  const {
    name,
    type,
    passive,
    tactical,
    ultimate,
    role,
    url,
    background,
    pimg,
    timg,
    uimg,
    pdescript,
    tdescript,
    udescript,
  } = location.state

  const updateLegend = (event) => {
    event.preventDefault()

    fetch(`${process.env.REACT_APP_API_ENDPOINT}?name=${name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((err) => console.error(err))
    navigate('/admin')

    console.log('Product sent to API')
  }

  const handleForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <Container fluid>
      <Row>
        <h1 align='center' className='edit-page-name'>{name}</h1>
        <Col sm={12} md={4} style={{paddingLeft: 0, paddingRight: 0 }}>
          <img className="single-background" src={background} alt="" />
        </Col>
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
                defaultValue={name}
              />

              <label className='edit-label' htmlFor="">Type</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="type"
                id="type"
                placeholder="Type"
                defaultValue={type}
              />

              <label className='edit-label' htmlFor="">Role</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="role"
                id="role"
                placeholder="Role"
                defaultValue={role}
              />
              <br />
              <button className="update-btn" onClick={updateLegend}>
                Update
              </button>
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
                defaultValue={pdescript}
              />

              <label className='edit-label' htmlFor="">Tactical Description</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="tdescript"
                id="tdescript"
                placeholder="Tactical Description"
                defaultValue={tdescript}
              />

              <label className='edit-label' htmlFor="">Ultimate Description</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="udescript"
                id="udescript"
                placeholder="Passive Description"
                defaultValue={udescript}
              />
              <br />
              <button className="update-btn" onClick={updateLegend}>
                Update
              </button>
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
                defaultValue={passive}
              />

              <label className='edit-label' htmlFor="">Tactical</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="tactical"
                id="tactical"
                placeholder="Tactical"
                defaultValue={tactical}
              />

              <label className='edit-label' htmlFor="">Ultimate</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="ultimate"
                id="ultimate"
                placeholder="Ultimate"
                defaultValue={ultimate}
              />
              <br />
              <button className="update-btn" onClick={updateLegend}>Update</button>
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
                defaultValue={url}
              />

              <label className='edit-label' htmlFor="">Background</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="background"
                id="background"
                placeholder="Background"
                defaultValue={background}
              />

              <label className='edit-label' htmlFor="">Passive IMG</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="pimg"
                id="pimg"
                placeholder="Passive IMG"
                defaultValue={pimg}
              />

              <label className='edit-label' htmlFor="">Tactical IMG</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="timg"
                id="timg"
                placeholder="Tactical IMG"
                defaultValue={timg}
              />

              <label className='edit-label' htmlFor="">Ultimate IMG</label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                name="uimg"
                id="uimg"
                placeholder="Ultimate IMG"
                defaultValue={uimg}
              />
              <br />
              <button className="update-btn" onClick={updateLegend}>
                Update
              </button>
              
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
