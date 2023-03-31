import { HeroList } from "../components/HeroList"


export const MarvelPage = () => {
  return (<div className="animate__animated animate__fadeInDownBig">
  <h1>MarvelPage</h1>
  <hr/>
  <HeroList publisher={'Marvel Comics'}/>
  </div>
    
  )
}
