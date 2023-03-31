import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { heroes } from "../data/heroes"
import { getHeoresById } from "../helpers/getHeoresById"



export const HeroPage = () => {
  const {id} = useParams()
  const heroe = useMemo(()=>getHeoresById(id),[id])  
  const navegar = useNavigate()

  const regresar = ()=>{
    navegar((-1),{replace:true})
    


  }

  if (!heroe){return <Navigate to="/dc"/>} 

  return (
  <div className="row  mt-5 animate__animated animate__backInLeft">
    
      <img 
      src={`/asset/heroes/${heroe.id}.jpg`}
      alt={heroe.superhero}
      className="img-thumbanail col-12 col-lg-4"/>
    
    <div className="col-lg-7 col-12">
      <h3 className="mt-2 ">{heroe.superhero}</h3>
      <ul className="list-group list-group-flusg">
        <li className="list-group-item"><b>Alter ego</b>{heroe.alter_ego}</li>
        <li className="list-group-item"><b>Publisher</b>{heroe.publisher}</li>
        <li className="list-group-item"><b>First appeareance</b>{heroe.first_appearance}</li>
      </ul>
      <h5 className="mt-3"> Characteres</h5>
      <p>{heroe.characters}</p>
      <button className="ntm btn-outline-primary"
      onClick={regresar}>Regresar</button>
    </div>
  </div>
  )
}
