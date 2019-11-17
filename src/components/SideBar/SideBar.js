import React from 'react';
import './SideBar.css'

import Content from '../Content';

function SideBar(props) {
  return (
    <nav className="SideBar">
      <div className="Card" title="Apresentação" onClick={(e) => props.handlerChangeContent('apresentacao', e)}>
        <img className="CardLogo" alt='Apresentação' src={"./question.svg"}/>
      </div>
      <div className="Card" title="Vídeo" onClick={(e) => props.handlerChangeContent('video', e)}>
        <img className="CardLogo" alt='Vídeo' src={"./youtube.svg"}/>
      </div>
      <div className="Card" title="Música" onClick={(e) => props.handlerChangeContent('musica', e)}>
        <img className="CardLogo" alt='Música' src={"./music.svg"}/>
      </div>
      <div className="Card" title="Jogo" onClick={(e) => props.handlerChangeContent('jogo', e)}>
        <img className="CardLogo" alt='Jogo' src={"./game-controller.svg"}/>
      </div>
      <div className="Card" title="Arte" onClick={(e) => props.handlerChangeContent('arte', e)}>
       <img className="CardLogo" alt='Arte' src={"./gioconda.svg"}/>
      </div>
      <div className="Card" title="Criatividade" onClick={(e) => props.handlerChangeContent('criatividade', e)}>
        <img className="CardLogo" alt='Criatividade' src={"./creativity.svg"}/>
      </div>
      <a className="LinkCreditos" onClick={(e) => props.handlerChangeContent('creditos', e)} >Creditos</a>
    </nav>
  );
  }
export default SideBar;