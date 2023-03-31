import React from 'react'
import { HeroList } from '../components/HeroList'

export const DcPage = () => {
  return (<div className="animate__animated animate__fadeInDownBig">
  <h2>DcPage</h2>
    <hr/>
    <HeroList publisher={'DC Comics'}/>
  </div>
    
  )
}
