import { PlayCircleFilledRounded } from '@material-ui/icons'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Infocard = ({ cardInfo }) => {
  const info = {
    name: cardInfo.name,
    type: cardInfo.type,
    id: cardInfo.id,
    img: cardInfo.images[0]?.url,
  }
  const { name, type, id, img } = info
  return (
    <Link
      style={{ textDecoration: 'none' }}
      to={{
        pathname: `/${type}/${id}`,
      }}
    >
      <div className='infocard'>
        <img src={img} />
        <h4>{name}</h4>
        {type === 'playlist' ? (
          <p>By {cardInfo.owner.display_name}</p>
        ) : (
          <p>{cardInfo.type}</p>
        )}

        <PlayCircleFilledRounded className='infocardPlayBtn' />
      </div>
    </Link>
  )
}

export default Infocard
