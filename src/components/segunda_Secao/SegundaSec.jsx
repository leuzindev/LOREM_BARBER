import React from 'react'
import './SegundaSec.css'
import corte_sobre from '../../assets/img/corte_sobre.png'
import { Datas } from '../datas/Datas'
import styled from 'styled-components'

const Bloco_corte = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const Img_Corte = styled.img`
  
  max-width: 100%;
  width: 1000px;

  
  
`

export const SegundaSec = () => {
  return (
    <div className='main'>
      <div className="principal">
          <div className="titulo_bloco">
            <h1 className='titulo_sobre'>Sobre a Lorem</h1> 
          </div>
        <Bloco_corte >
          <Img_Corte src={corte_sobre}/>
        </Bloco_corte >
        <div className="texto_sobre_bloco">
          <br />
          <div className="bloco_txt">

            <p className='texto-pag'>"Lorem ipsum dolor sit am
            et, consectetur adipiscing elit, sed do eiusmod tem
            por incididunt ut labore et dolore magna aliqua. Ut enim 
            ad minim veniam, quis nostrud exercitation ullamco laboris n
            isi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
            n reprehenderit in voluptate velit esse cillum dolore eu fugiat n
            ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborums nostrud exercitation ullamco laboris n
            isi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
            n reprehenderit in voluptate velit esse cillum dolore eu fugiat n
            ulla pariatur. Excepteur sint occaeca."</p>
          </div>
        </div>
      </div>
      <Datas />
    </div>
    
    
  )
}

