import React from 'react';
import './Credits.css';

function Credits() {
  return (
    <div className="Credits">
      <h1>Desenvolvimento</h1>
      <p>Alef Pereira (ealefpereira@gmail.com)</p>
      <h1>Imagens</h1>
        <img alt='Vídeo' src={"./youtube.svg"}/>
        <img alt='Apresentação' src={"./question.svg"}/>
        <img alt='Arte' src={"./gioconda.svg"}/>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <br></br>
        <img alt='Música' src={"./music.svg"}/>
        <img alt='Jogo' src={"./game-controller.svg"}/>
        <img alt='Criatividade' src={"./creativity.svg"}/>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}
export default Credits;