import { Link } from 'react-router-dom'

export const LegendCards = ({ legends, index }) => {
  return (
    <Link state={legends} to="/legend-info" key={index}>
        <div className="card-container each-legend">
          <div className="col-sm cards">
            <img className="card-image" src={legends.url} alt="" />
            <h1 className="legend-name">{legends.name}</h1>
            <h6 className='legend-role'>{legends.role}</h6>
          </div>
        </div>
      </Link>
      
    
      
  )
}
