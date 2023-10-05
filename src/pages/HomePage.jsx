import { useRef } from 'react'
import { setTrainerSlice } from '../store/slices/trainer.slice'
import { useDispatch, } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./styles/homepage.css"
const HomePage = () => {

  const inputTrainer = useRef()

  const dispach = useDispatch()

  const navigate = useNavigate()

  const handleTrainer = e => {
    e.preventDefault()
    dispach(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
    
  }

  return (
    <div className='home'>
       <h1 className='home_title'> Pokedex</h1>
       <h2 className='home_title'>Hi Trainer!</h2> 
       <p className='home_description'>To start, please, enter your trainer nickname</p>
       <form className='home_form' onSubmit={handleTrainer}>
        <input className='home_input' ref={inputTrainer} type="text" />
        <button className='home_btn'>Start!</button>
       </form>
        
        </div>
  )
}

export default HomePage