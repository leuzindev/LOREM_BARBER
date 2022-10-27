import React from 'react'
import './Quinta_Secao.css'
import email from '../../assets/img/email.png'
import whats from '../../assets/img/whatsapp.png'


export const Quinta_Secao = () => {
  return (
    <div className='container'>
        <div className="bloco_email">
            <img src={email} />
            <div className="inputs_email">
                <form action="">
                <input type="text" name="" id="" className="email_input inputs_form" placeholder='E-mail'/>
                <div className="nome_e_enviar">
                    <input type="text" className='nome_input inputs_form' placeholder='Nome'/>
                    <button className='btn_enviar'>Enviar</button>
                </div>
                </form>
            </div>
        </div>
        <div className="bloco_maps">
        <iframe class="gmap_iframe mapa" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=rocketz barber&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

        </div>
        <div className="bloco_whats">
            <img src={whats} className="img_whats"/>
        </div>
    </div>
  )
}
