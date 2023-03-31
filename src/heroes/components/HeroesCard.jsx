import { Link } from "react-router-dom";

export const HeroesCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroresUrl = `/heroes/${id}.jpg`;
  return (
    <div className="card col-6">
      <div className="d-flex">
        <div className="col-lg-5 col-6 mt-5">
          <img src={heroresUrl} className="card-img " alt={superhero}></img>
        </div>
        <div className="col-lg-7 col-6">
          <h5>{superhero}</h5>
          <p>{publisher}</p>
          <p>{alter_ego}</p>
          <p>{first_appearance}</p>
          {alter_ego !== characters && <p>{characters}</p>}
          <Link to={`/hero/${id}`}>Mas informacion...</Link>
        </div>

        
      </div>
    </div>
  );
};
