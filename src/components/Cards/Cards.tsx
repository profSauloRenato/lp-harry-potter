import { ReactNode } from 'react';
import './styles.scss'

interface ICardProps {
  image: string;
  name: string;
  dateOfBirth: string;
  house: string;
  patronus: string;
  actor: string;
  isAlive: boolean;
  children?: ReactNode
}

export function Card({ image, name, dateOfBirth, house, patronus, actor, isAlive }: ICardProps) {

  return (
    <div className="card">
      <img src={image} alt={name} />

      <main>
        <div className="content">
          <h2 className="name">{name}</h2>
          <p className="dateOfBirth">Nascido em: {dateOfBirth ? dateOfBirth : "(NÃO INFORMADO)"}</p>
          <p className="house">Casa: {house}</p>
          <p className="patronus">Patrono: {patronus}</p>
          <p className="actor">Ator: {actor}</p>
          <p className="isAlive">Ainda vive? {isAlive ? 'Sim' : 'Não'}</p>
        </div>

        <div className="divider" />
      </main>
    </div>
  );
}
