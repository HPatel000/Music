import React, { Fragment, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const Alerts = () => {
  const { alerts } = useContext(GlobalContext)
  console.log(alerts)
  return (
    <Fragment>
      {alerts && <div className={'alert'}>{alerts?.msg}</div>}
    </Fragment>
  )
}

export default Alerts
