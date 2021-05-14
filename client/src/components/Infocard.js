import { PlayCircleFilledRounded } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Infocard = ({ img, name, type, id }) => {
  return (
    <div className='infocard'>
      <img src={img} />
      <h4>{name}</h4>
      <p>{type}</p>
      <Link
        to={{
          pathname: `/${type}/${id}`,
          data: [name, img],
        }}
      >
        <PlayCircleFilledRounded className='infocardPlayBtn' />
      </Link>
    </div>
  )
}

export default Infocard
