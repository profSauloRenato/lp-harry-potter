// import { ReactNode } from "react";
// import { FaSteam } from "react-icons/fa";
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

  // function linkFormat(name: string) {
  //   return name.replace(/[^a-z0-9]/gi, "");
  // }

  return (
    <div className="card">
      <img src={image} alt={name} />

      <main>
        <div className="content">
          <h2 className="name">{name}</h2>
          <p className="dateOfBirth">Nascido em: {dateOfBirth}</p>
          <p className="house">Casa: {house}</p>
          <p className="patronus">Patrono: {patronus}</p>
          <p className="actor">Ator: {actor}</p>
          <p className="isAlive">Ainda vive? {isAlive ? 'Sim' : 'Não'}</p>
          {/* {children && (
            <div className="children-card">
              <div className="divider top" />
              {children}
            </div>
          )} */}
        </div>

        <div className="divider" />
      </main>
    </div>
  );
}