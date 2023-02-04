import PropTypes from 'prop-types'
import './Boton.css'
export function Boton({text}) {
  return <button className='boton' onClick={function(){return console.log('user')}}>{text}</button>;
}
