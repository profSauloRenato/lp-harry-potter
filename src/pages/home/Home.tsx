import { SectionLayout } from '../../components/SectionLayout/SectionLayout'
import { useFetch } from "../../hooks/useFetch";
import { Card } from '../../components/Cards/Cards';
import backgroundImage from '../../assets/background.png'
import './style.scss'

export function Home() {
  const { data, loading, page } = useFetch();

  return (
    <div className='home'>
      <img
        src={backgroundImage}
        alt="Imagem de fundo"
        className="background"
      />
      <SectionLayout 
        hasData={!loading && !!data.length}
        fetchingMoreData={loading && page > 1}
        initialLoading={loading && !data.length}
      >
        {data.map((character: any) => (
          <Card
            key={character.id}
            image={character.image}
            name={character.name}
            dateOfBirth={character.dateOfBirth}
            house={character.house}
            patronus={character.patronus}
            actor={character.actor}
            isAlive={character.alive}
          />
        ))}      
      </SectionLayout>
    </div>
  )
}
