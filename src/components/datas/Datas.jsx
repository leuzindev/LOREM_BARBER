import React from 'react'

import styled from 'styled-components'

const MainData = styled.div`
    margin-top: 50px;
    font-family: 'Alata', sans-serif;
    padding: 50px;
`
const BlocoDatas = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
`

const QuadradoPreto = styled.div`
    background-color: #343434;
    width: 172px;
    height: 155px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #FFFFFF;
    margin: 10px;
    transition: 1s all;
    &:hover{
        transition: 1s all;
        transform: scale(1.1);
    }
    @media(max-width: 862px){
        width: 80%;
        
    }
`

const Quadrado = styled.div`
    background-color: #36C077;
    width: 172px;
    height: 155px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #FFFFFF;
    margin: 10px;
    transition: 1s all;
    &:hover{
        transition: 1s all;
        transform: scale(1.1);
    }
    @media(max-width: 862px){
        width: 80%;
    }
`

const TituloQuadrado = styled.h1`
     font-size: 40px;
     text-align: center;
`

const Horario = styled.p`
    margin-top: 40px;
    text-align: center;
    font-size: 20px;
`

const Barra = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Linha = styled.div`
    border-bottom: 3px solid black;
    width: 85%;
`
export const Datas = () => {
  return (
    <MainData>
        <BlocoDatas>
            <QuadradoPreto>
                <TituloQuadrado>DOM</TituloQuadrado>
                <Horario>Closed</Horario>
            </QuadradoPreto>
            <Quadrado>
                <TituloQuadrado>SEG</TituloQuadrado>
                <Horario>10:00-16:00</Horario>
            </Quadrado>
            <Quadrado>
                <TituloQuadrado>TER</TituloQuadrado>
                <Horario>10:00-16:00</Horario>
            </Quadrado>
            <Quadrado>
                <TituloQuadrado>QUA</TituloQuadrado>
                <Horario>10:00-16:00</Horario>
            </Quadrado>
            <Quadrado>
                <TituloQuadrado>QUI</TituloQuadrado>
                <Horario>10:00-16:00</Horario>
            </Quadrado>
            <Quadrado>
                <TituloQuadrado>SEX</TituloQuadrado>
                <Horario>10:00-16:00</Horario>
            </Quadrado>
            <QuadradoPreto>
                <TituloQuadrado>SAB</TituloQuadrado>
                <Horario>Closed</Horario>
            </QuadradoPreto>
        </BlocoDatas>
        
        <Barra>
            <Linha></Linha>
        </Barra>
    </MainData>
  )
}
