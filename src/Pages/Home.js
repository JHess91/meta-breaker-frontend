import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Randomizer() {
  const [guns, setGuns] = useState([])
  const [legend, setLegend] = useState([])
  const [randomLegend, setRandomLegend] = useState(2)
  const [randomGun, setRandomGun] = useState(3)
  const [randomGunTwo, setRandomGunTwo] = useState(4)

  useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT + '/guns')
      .then((response) => response.json())
      .then((data) => setGuns(data))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setLegend(data))
      .catch((err) => console.error(err))
  }, [])

  const handleRandomNum = () => {
    setRandomLegend(Math.floor(Math.random() * 23))
    setRandomGun(Math.floor(Math.random() * 26))
    setRandomGunTwo(Math.floor(Math.random() * 26))
  }
  console.log("guns", guns)

  return (
    <Container
    className="home-background" 
    align="center" 
    >
      <Row>
        <Col>
          <h3 className="random-legend-description mt-3">Legend</h3>
          <h4 className="random-legend-name">{legend[randomLegend]?.name}</h4>
          <img
            className="image-crop fluid"
            src={legend[randomLegend]?.background}
            alt=""
          />
        </Col>

        <Col>
          <div>
            <h3 className="random-weapon-description mt-4">Primary Weapon</h3>
            <h4 className="random-weapon-name">{guns[randomGun]?.name}</h4>
            <br />
            <img
              className="random-weapon fluid"
              width={360}
              height={130}
              src={guns[randomGun]?.url}
              alt=""
            />
          </div>

          <div>
            <h3 className="random-weapon-description my-4">Secondary Weapon</h3>
            <h4 className="random-weapon-name">{guns[randomGunTwo]?.name}</h4>
            <br />
            <img
              className="random-weapon fluid"
              width={360}
              height={130}
              src={guns[randomGunTwo]?.url}
              alt=""
            />
          </div>

          <div>
            <button data-text="Awesome" className="button mt-5" onClick={() => handleRandomNum()}>
              <span className="actual-text">&nbsp;RANDOM&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;RANDOM&nbsp;
              </span>
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <div></div>
      </Row>
    </Container>
  )
}

export default Randomizer
