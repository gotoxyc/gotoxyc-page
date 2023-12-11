import React, { useEffect } from "react";

function MusicPlayer() {
  useEffect(() => {
    // Encuentra el elemento del iframe de YouTube en el DOM
    const youtubeIframe = document.getElementById("youtube-iframe");

    // Comienza la reproducción automáticamente
    youtubeIframe.src += "?autoplay=1";

    // Detén la reproducción cuando el componente se desmonte
    return () => {
      youtubeIframe.src = youtubeIframe.src.replace("?autoplay=1", "");
    };
  }, []);

  return (
    <div>
      <iframe
        id="youtube-iframe"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Hq-GrjT0uIU?autoplay=1"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MusicPlayer;
