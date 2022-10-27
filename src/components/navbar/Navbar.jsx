import React, { Component } from 'react'
import logo_nav from '../../assets/img/log.png'
import styled from 'styled-components'

const NavMain = styled.div`
    background-color: rgba(0, 0, 0, 0.42);
    width: 100%;
    height: 7.8rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TituloLogo = styled.h1`
    margin-left: 15px;
    font-size: 52px;
    color: #FFFFFFFF;
    font-family: 'Metal Mania', cursive;
`

const ItensNav = styled.div`
    display: flex;
    justify-content: center;

`

const BarraNav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Itens_Lista_Nav = styled.li`
    color: white;
    font-family: 'Koulen', cursive;
    font-weight: 800;
    margin: 20px;
    font-size: 32px;
    
    &:hover  {
      border-bottom: 2px solid white;
      cursor: pointer;
     
    }

`


const Login = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

`

const BtnRegistro = styled.button`
    font-family: 'Lusitana', serif;
    font-size: 24px;
    margin: 15px;
    color: #FFFFFFFF;
    background-color: #36C077;
    width: 172px;
    height: 55px;
`
export class navbar extends Component {


  render() {
    return (
      <>
        <NavMain>
          <Logo>
            <img src={logo_nav} className="logo_barbearia" />
            <TituloLogo>Barber's <br />Lorem</TituloLogo>
          </Logo>
          <ItensNav>
            <BarraNav>
              <Itens_Lista_Nav>Home</Itens_Lista_Nav>
              <Itens_Lista_Nav>Price</Itens_Lista_Nav>
              <Itens_Lista_Nav>Local</Itens_Lista_Nav>
              <Itens_Lista_Nav>Contato</Itens_Lista_Nav>
            </BarraNav>
          </ItensNav>
          <Login>
            <BtnRegistro>Login</BtnRegistro>
            <BtnRegistro>Register</BtnRegistro>
          </Login>
        </NavMain>
      </>
    )
  }
}

export default navbar