import './style.scss'
import backgroundImage from '../../assets/background.png'

export function Home() {
  return (
    <div className='home'>
      <header className='header'>
        <h1>Harry Potter</h1>
        <p>Informações sobre personagens e atores do mundo bruxo!</p>
      </header>

      <img className='background' src={backgroundImage} alt="Imagem de Fundo" />
    </div> 
  )
}