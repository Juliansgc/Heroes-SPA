import { Link } from 'react-router-dom'


const CharactesByHero = ({ alter_ego, characters}) => {
    //if ( alter_ego === characters ) return(<></>)
      //  return(
         //   <p>{ characters }</p>
       // )
       return ( alter_ego === characters) ? <></>
       : <p>{ characters }</p>

} 
export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    //const charactesByHero = ()
    
    return (
        <div className="col  animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="COL-4">
                        <img src={ heroImageUrl } className="card-img" alt={ superhero }></img>
                    </div>

                    <div className="col-8">

                        <div className="cat-body">

                            <h5 className="card-tittle">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>
                            
                            <CharactesByHero alter_ego={alter_ego} characters={characters}/>
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                Mas ...
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}