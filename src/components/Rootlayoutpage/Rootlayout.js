import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from '../Navigation/Navigationbar'
function Rootlayout() {
  return (
    <div>
      <Navigationbar/>
      <Outlet/>
    </div>
  )
}

export default Rootlayout;
