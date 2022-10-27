import { Link } from 'react-router-dom'

const AdminDisplay = ({ legends, index }) => {
  return (
    <Link state={legends} to="/legend-edit" key={index}>
    <div className="edit-container">
        
      <div className="col-sm" >
        <img className="card-image" src={legends.url} alt="" />
        <h1 className="legend-name">{legends.name}</h1>
      </div>
    </div>
  </Link>
  )
}

export default AdminDisplay