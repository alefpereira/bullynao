import React from 'react';
import './Musica.css';
function Musica() {
  return (
    <div className="Musica">
      <h1>Música contra o bullying</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/YvXsX8yBYcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {/* <p>Texto contra o bullying</p> */}
    </div>
  );
}
export default Musica;