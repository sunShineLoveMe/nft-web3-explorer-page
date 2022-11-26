import React from 'react'
import { Outlet } from 'react-router-dom'
import './content.css'

export default function useContentComponent() {
  return (
    <div className='contentBg'>
      <Outlet />
    </div>
  )
}
