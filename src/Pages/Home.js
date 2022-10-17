import { useLocation } from 'react-router-dom'

const Randomizer = () => {
  const location = useLocation()
  const { name, type, role } = location.state
  console.log(location)

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h2>{type}</h2>
        <h3>{role}</h3>
      </div>
    </div>

    // <div className="App">
    //   <h1>hello</h1>
    //   <button onClick={() => legends(Math.floor(Math.random() * 22))}>
    //     gen randomn num
    //   </button>
    //   <div>{url}</div>
    // </div>
  )
}

export default Randomizer
