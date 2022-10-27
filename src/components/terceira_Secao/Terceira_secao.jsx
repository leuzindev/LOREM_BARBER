import React from 'react'
import './Terceira_secao.css'
import logo_whats from '../../assets/img/logo_whats.png'
import primeira_card from '../../assets/img/primeira_card.png'
import segundo_card from '../../assets/img/segundo_card.png'
import terceiro_card from '../../assets/img/terceiro_card.png'
import quarto_card from '../../assets/img/quarto_card.png'

export const Terceira_secao = () => {
    return (
        <div className='main-terceira'>
            <div className="titulo_e_btn">
                <div className="bloco_titulo_planos">
                    <h1 className="titulo_planos">PLANOS</h1>
                    <button className='btn_agendar'>AGENDAR<img className="logo_zap" src={logo_whats}/></button>
                </div>
            </div>
            <div className="bloco_cortes">
                <div className="card">
                    <img className='img_corte' src={primeira_card} />
                    <p className='titulo_corte'>CABELO</p>
                    <p>R$ 35,00</p>
                </div>
                <div className="card">
                    <img className='img_corte' src={segundo_card} />
                    <p className='titulo_corte'>SIMPLES</p>
                    <p>R$ 25,00</p>
                </div>

                <div className="card">
                    <img className='img_corte' src={terceiro_card} />
                    <p className='titulo_corte'>BARBA</p>
                    <p>R$ 30,00</p>
                </div>
                <div className="card">
                    <img className='img_corte' src={quarto_card} />
                    <p className='titulo_corte'>CABELO + BARBA</p>
                    <p>R$ 65,00</p>
                </div>

            </div>
        </div>
    )
}
