import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pelis web Diego Y Nico</h1>
      <div className="card">
      <img src="public/Terminator.jpg" alt="tattataad" />

      </div>
      <p className="read-the-docs">
      Bienvenido a Pelisweb, tu lugar para explorar el cine. Aquí encontrarás reseñas, trailers y noticias de estrenos, además de un catálogo que va desde clásicos hasta nuevas películas. Únete a nuestra comunidad de cinéfilos para compartir opiniones, debatir y recibir recomendaciones personalizadas. ¡Disfruta de la magia del cine!
      </p>
    </>
  )
}

export default App
