import React, { useMemo } from "react";
import { getHeroresBYpublisher } from "../helpers/getHeoresByPublisher";
import { HeroesCard } from "./HeroesCard";

export const HeroList = ({ publisher }) => {
  const dataHeroes =useMemo(()=>getHeroresBYpublisher(publisher),[publisher]) ;

  return (
    
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
        dataHeroes.map((heroe) => (
          <HeroesCard key={heroe.id} {...heroe} />
        ))
        }
      </div>
   
  );
};
