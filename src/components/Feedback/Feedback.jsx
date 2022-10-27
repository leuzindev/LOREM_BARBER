import React from 'react'
import './Feedback.css'
import icon_m from '../../assets/img/feedback_m.png'
import icon_f from '../../assets/img/feedback_f.png'
import star from '../../assets/img/star.png'


export const Feedback = () => {
  return (
    <div className='container-main'>
        <div className="bloco_linha">
            <div className="linha"></div>
        </div>
        <div className="bloco_titulo_aprovados">
            <h1 className="titulo_aprovado">APROVADOS PELA GALERA!</h1>
        </div>
        <div className="bloco_comentarios">
            <div className="paragrafo_esquerda">
                <p className="texto">
                Atendimento excelente e profissionais competentes, (agendamento com hora marcada) ambient
                e muito bem decorado relacionado ao tema, estacionamento fácil (+ vagas na loja em fre
                nte do outro lado da rua) a cadeira faz massagem relaxante duran
                te o procedimento de barbear. Recomendo com certeza adeira faz massagem relaxante duran
                te o procedimento de barbear. Recomendo com certeza
                </p>
                <img src={star} className="star"/>
                <img src={icon_f} className="icon"/>
            </div>
            <div className="paragrafo_direita">
                <p className="texto">
                Atendimento excelente e profissionais competentes, (agendamento com hora marcada) ambient
                e muito bem decorado relacionado ao tema, estacionamento fácil (+ vagas na loja em fre
                nte do outro lado da rua) a cadeira faz massagem relaxante duran
                te o procedimento de barbear. Recomendo com certeza adeira faz massagem relaxante duran
                te o procedimento de barbear. Recomendo com certeza
                </p>
                <img src={star} className="star"/>
                <img src={icon_m} className="icon"/>
            </div>
        </div>
    
    </div>
  )
}
