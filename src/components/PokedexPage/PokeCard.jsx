import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import "./styles/pokecard.css"

const PokeCard = ({ url }) => {

  const [ pokemon, getPokemon ] = useFetch(url)

  const navigate = useNavigate()

  useEffect(() => {
    getPokemon()
  }, [])

  const hanleNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`)

  }

  return (
    <article onClick={hanleNavigate}>
        <header className={`card_header bg-${pokemon?.types[0].type.name}`}>
            <img className='card_avatar' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section>
            <h3 className={`card_name color-${pokemon?.types[0].type.name}`} >{pokemon?.name} </h3>
            <ul className='card_type-list'>
                {
                  pokemon?.types.map(typeInfo => (
                    <li className='card_type-item' key={typeInfo.type.url}>{typeInfo.type.name} </li>
                  ))
                }
            </ul>
            <hr className='card_hr' />
            <ul className='card_stat-list'>
                {
                    pokemon?.stats.map(statInfo => (
                       <li className='card_stat-name' key={statInfo.stat.url}>
                        <span className='card_stat-name'>{statInfo.stat.name} </span>
                        <span className={`card_stat-number color-${pokemon?.types[0].type.name}`}>{statInfo.base_stat} </span>

                       </li> 
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard