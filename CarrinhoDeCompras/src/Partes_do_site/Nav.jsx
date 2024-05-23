import './Nav.css'
import PropTypes from 'prop-types';

import { BsFillCartFill } from "react-icons/bs";
import { FaHamburger } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'

import Button from '../components/Button'
import Input from '../components/Input'

export default function Nav(props) {

  return (
    <section className="nav-container">
      <Button text={<RxHamburgerMenu/>} color='white' backgroundColor = '#9da88f' border='none'></Button>
      <Input />
      <Button text ={<FaHamburger />} color='black' backgroundColor='#e8efed' border='2px none ' />
      <Button text = {<BsFillCartFill/>} color='#e8efed' backgroundColor='white' border='2px solid #e8efed ' abrirCarrinho={props.abrirCarrinho} calcValor = {props.calcValor} />
    </section> 
  )
}

Nav.propTypes = {
  abrirCarrinho:PropTypes.func.isRequired,
  calcValor: PropTypes.func
};
