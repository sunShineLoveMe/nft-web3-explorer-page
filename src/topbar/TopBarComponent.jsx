import React from 'react'
import './topbar.css'
import TitleComponent from '../component/titlecomponent'
import MainTopComponent from '../component/maintopcomponent'
import MetaTopComponent from '../component/metatopcomponent'

export default function useTopBarComponent() {
  return (
    <div className='topBar'>
      <TitleComponent />
      <MainTopComponent />
      <MetaTopComponent />
    </div>
  )
}
