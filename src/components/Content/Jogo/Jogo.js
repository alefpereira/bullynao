import React from 'react';
import './Jogo.css';
function Jogo() {
  return (
    <div className="Jogo">
      <h1>Jogo contra o bullying</h1>
      <img src="https://lh3.googleusercontent.com/JGnz4Eh2qnpkbDOPa5giMW-m0cXYwHNYjKioSNWGe8S7OjI0C75-2SV4dvPkjv9pBuw"></img>
      <p>Jogo Vidas Cruzadas da Fundación Editorial Educacuentos. Disponível para <a href="https://play.google.com/store/apps/details?id=com.quantumstudio.bullying&hl=pt_BR">Android</a>.</p>
      {/*  <p>[Texto descrição do jogo]</p> */}
      <p>Acesse o site da fundação: <a href="https://www.educacuentos.org/">https://www.educacuentos.org/</a></p>
    </div>
  );
}
export default Jogo;