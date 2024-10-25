import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)

const fotos = [
  './lal.jpg',
  './lal2.jpg',
  './lal3.pg'
]

return (
<>
    <h1>Pelis web Diego Y Nico</h1>
    <div className="card">
        <img src="public/Terminator.jpg" alt="tattataad" width="350" height="500" />

    </div>
    <div>
        <p className="read-the-docs">
            Bienvenido a Pelisweb, tu lugar para explorar el cine. Aquí encontrarás reseñas, trailers y noticias de
            estrenos, además de un catálogo que va desde clásicos hasta nuevas películas. Únete a nuestra comunidad de
            cinéfilos para compartir opiniones, debatir y recibir recomendaciones personalizadas. ¡Disfruta de la magia
            del cine!
        </p>

        <h2>Las pelis disponibles son:</h2>
    </div>
    <div>
      ala borger
      <button>Foto 1</button>
      <button>Foto 2</button>
      <button>Foto 3</button>
    </div>
</>
)
}

export default App
