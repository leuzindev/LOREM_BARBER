import React from 'react'
import Card_Descubra from '../card_descubra_plano/Card_Descubra'
import Navbar from '../navbar/Navbar'
import './Homepage.css'



export const Homepage = () => {
  return (
    <div className="fundo">
      <Navbar />
      <Card_Descubra />

    </div>
  )
}
