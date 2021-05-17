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
    <div className='infocard'>
      <img src={img} />
      <h4>{name}</h4>
      {type === 'playlist' && (
        <Fragment>
          <p>By {cardInfo.owner.display_name}</p>
        </Fragment>
      )}
      <Link
        to={{
          pathname: `/${type}/${id}`,
        }}
      >
        <PlayCircleFilledRounded className='infocardPlayBtn' />
      </Link>
    </div>
  )
}

export default Infocard
