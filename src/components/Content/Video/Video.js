import React from 'react';
import './Video.css';
function Video() {
  return (
    <div className="Video">
      <h1>Vídeo contra o bullying</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_qSwCuQnjqo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Sejam unidos, mas não os mesmos.</p>
      <p>Campanha Android (2014)</p>
    </div>
  );
}
export default Video;