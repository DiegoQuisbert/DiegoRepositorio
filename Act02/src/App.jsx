import './App.css'
import Card from './Card';
import Gallery from './Gallery';

function App() {

let titulo = "Clásico imperdible: Terminator";
let descripcion = "Terminator 1 (1984) sigue a Sarah Connor, objetivo de un Terminator enviado del futuro por Skynet. La resistencia envía a Kyle Reese para protegerla. Tras intensas persecuciones, logran destruir al Terminator, pero la lucha entre humanos y máquinas apenas comienza. La película explora la supervivencia y el impacto de la tecnología.";

const peliculas = [
  {id: 1, titulo: 'Inception', sinopsis: 'Un ladrón debe insertar una idea en la mente de un objetivo mientras navega por un mundo onírico.'},

  {id: 2, titulo: 'La La Land', sinopsis: 'Mia y Sebastian luchan por sus sueños en Los Ángeles, poniendo a prueba su amor.'},
  
  {id: 3, titulo: 'The Silence of the Lambs', sinopsis: 'Clarice, una agente del FBI, busca ayuda de Hannibal Lecter para atrapar a un asesino en serie.'},
  {id: 4, titulo: 'El caballero de la noche', sinopsis: 'Batman enfrenta al Joker, quien busca sumergir a Gotham en el caos.'},

  {id: 5, titulo: 'Forrest Gump', sinopsis: 'Forrest, un hombre con discapacidad intelectual, vive momentos históricos mientras busca el amor.'},
  
  {id: 6, titulo: 'Los Increíbles', sinopsis: 'Una familia de superhéroes lucha por vivir en la normalidad mientras enfrenta a un villano.'}
];

return (
<>
    <h1>App de cartelera de cine</h1>
    <h2>{titulo}</h2>
    <div>
        <img src="public/Terminator.jpg" alt="tattataad" width="350" height="500" />
    <p>{descripcion}</p>
    </div>
    <hr />

    <div className='row'>
      {
        peliculas.map(pelicula =>(
          <Card 
            key={pelicula.id}
            titulo={pelicula.titulo}
            sinopsis={pelicula.sinopsis}
          /> 
        ))
      } 
    </div>
    <hr />
      <Gallery />
    <hr />
    <div>
        <p className="read-the-docs">
            Bienvenido a Pelisweb, tu lugar para explorar el cine. Aquí encontrarás reseñas, trailers y noticias de
            estrenos, además de un catálogo que va desde clásicos hasta nuevas películas. Únete a nuestra comunidad de
            cinéfilos para compartir opiniones, debatir y recibir recomendaciones personalizadas. ¡Disfruta de la magia
            del cine!
        </p>
    </div>
</>
)
}

export default App
