import { Howl, Howler } from "howler";
import { useEffect } from "react";

export function LocalMusicPlayer() {
  useEffect(() => {
    // Crea una instancia de reproducción de la canción
    const sound = new Howl({
      src: ["/SNUG.mp3"], // Ruta relativa al archivo de audio en la carpeta "public"
      autoplay: true, // Reproducir automáticamente cuando se cargue la página
    });

    // Detén la reproducción cuando el componente se desmonte
    return () => {
      sound.stop();
    };
  }, []);
  return null;
}
