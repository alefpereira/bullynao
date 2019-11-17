import React from 'react';
import './Content.css';

import Apresentacao from './Apresentacao';
import Video from './Video';
import Jogo from './Jogo';
import Arte from './Arte';
import Criatividade from './Criatividade';
import Musica from './Musica';

import Credits from '../Credits';

class Content extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {content_id: props.content_id};
  }
  render() {
    let content_id = this.props.content_id;
    console.log('Rendering Content. content_id=', content_id);
    switch (content_id){
      case "video":
        return (
          <div className="Conteudo">
            <Video />
          </div>
        );
      case "musica":
        return (
          <div className="Conteudo">
            <Musica />
          </div>
        );
      case "jogo":
        return (
          <div className="Conteudo">
            <Jogo />
          </div>
        );
      case "arte":
        return (
          <div className="Conteudo">
            <Arte />
          </div>
        );
      case "criatividade":
        return (
          <div className="Conteudo">
            <Criatividade />
          </div>
        );
      case "creditos":
        return (
          <div className="Conteudo">
            <Credits />
          </div>
        );
      case "apresentacao":
      default:
        return (
          <div className="Conteudo">
            <Apresentacao />
          </div>
        );
    }
  }
}

export default Content;