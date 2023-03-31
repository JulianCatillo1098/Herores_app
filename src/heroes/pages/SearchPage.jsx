import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../../hook/useForm";
import queryString from 'query-string'
import { HeroesCard } from "../components/HeroesCard";
import { getHeoresByName } from "../helpers/getHeoresByName";

export const SearchPage = () => {

  const navigate = useNavigate()
  const local = useLocation()
  
  const {q}= queryString.parse(local.search)

  const heroesbuscado = getHeoresByName(q)

  const alertaBuscar = (q?.length == 0 )
  const alertaError = (q?.length > 0 ) && heroesbuscado.length ==0

  

  const { nombreInput, onInputChange} = useForm({
    nombreInput:'',
  })

  const onSubmitFormulario = (event)=>{
    event.preventDefault();

    navigate(`?q=${nombreInput}`)
  }


  return (
    <>
    <div className="row">
    
      <div className="col-lg-5 col-12 mt-3">
        <h5>Buscar Heroe</h5>
        <hr/>
        <form onClick={onSubmitFormulario}>
          <input
          type='text'
          className="form-control"
          placeholder="Nombre del heroe"
          name="nombreInput"
          autoComplete="off"
          value={nombreInput}
          onChange={onInputChange}>
        
          </input>
          <button className="btn btn-outline-primary mt-2">
            Buscar
          </button>
        </form>
      </div>
      <div className="col-lg-7 col-12 mt-3">
        <h5>Resultado</h5>
        <hr/>
        <div className="alert alert-primary" style={ {display : alertaBuscar? '' : 'none'} }>
          busca un heroe
        </div>
        <div className="alert alert-danger" style={ {display : alertaError? '' : 'none'} }>
          No se ha podido encontar el heroe con el nombre {q}
        </div>
        <div>
          {heroesbuscado.map(heroe=>(<HeroesCard key={heroe.id} {...heroe}/>)
            
          )}
        </div>
        {/* <HeroesCard></HeroesCard> */}
      </div>

    </div>
      
    </>
  );
};
