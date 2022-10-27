import React from 'react'

import styled from 'styled-components'

const Cartao = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    height: 450px;
    width: 699px;
    display: flex;
    flex-direction: column;
    margin-right: 60px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const CartaoBloco = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 600px;
`
const Titulos = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-left: 10%;
    flex-direction: column;
    height: 300px;
`

const TituloDescubra = styled.h2`
    font-size: 55pt;
    color: #FFFFFF;
    font-family: 'Koulen', cursive;
    margin-bottom: 20px;
`

const TiutuloPlano = styled.h1`
    font-size: 70pt;
    color: #36C077;
    font-family: 'Koulen', cursive;
`

const BtnDescobrir = styled.button`
    background-color: #36C077;
    color: white;
    width: 300px;
    height: 70px;
    font-size: 33px;
    font-family: 'Koulen', cursive;
`

const BlocoBtn = styled.div`
    display: flex;
    margin-left: 10%;
`


const Card_Descubra = () => {
  return (
    <CartaoBloco>
      <Cartao>
        <Titulos>
          <TituloDescubra>Descubra nossos</TituloDescubra>
          <TiutuloPlano>planos</TiutuloPlano>
        </Titulos>
          <BlocoBtn>
            <BtnDescobrir>DESCOBRIR</BtnDescobrir>
          </BlocoBtn>
      </Cartao>
    </CartaoBloco>
  )
}

export default Card_Descubra