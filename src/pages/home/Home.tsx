import './style.scss'
import backgroundImage from '../../assets/background.png'
import { SectionLayout } from '../../components/SectionLayout/SectionLayout'
import { useFetch } from "../../hooks/useFetch";

export function Home() {
  const { data, loading, page } = useFetch();

  return (
    <div className='home'>
      <header className='header'>
        <h1>Harry Potter</h1>
        <p>Informações sobre personagens e atores do mundo bruxo!</p>
      </header>

      <img className='background' src={backgroundImage} alt="Imagem de Fundo" />

      <SectionLayout 
        hasData={!loading && !!data.length}
        fetchingMoreData={loading && page > 1}
        initialLoading={loading && !data.length}
      >

      </SectionLayout>
    </div> 
  )
}