import { IoIosCloseCircleOutline } from 'react-icons/io'
import './Carrinho.css'
import PropTypes from 'prop-types';
import CarrinhoCard from '../components/CarrinhoCard';

export default function Carrinho({aberto , abrirCarrinho , items , value, removerItem }) {
   

  return (
   
    <section className={aberto} >
        <div className='carrinho-header'>
        <h3>Carrinho</h3>
        < IoIosCloseCircleOutline onClick={abrirCarrinho} style={{fontSize:'1.5rem', color:'red', cursor:'pointer'}} />
        </div>
            <div className="comprando-container">
                {items.map((item) => (
                    <CarrinhoCard removerItem={removerItem} key={item.key} item={item} />
                ))}
            </div>

            <div className="total">
                <span style={{fontWeight:'600'}}>Total</span>
                <span style={{color:'gray'}}>${value}.00</span>
            </div>
        <button className="finalizar">Finalizar</button>
 
  </section>
)
}
Carrinho.propTypes = {
    aberto: PropTypes.string.isRequired,
    abrirCarrinho: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    value:PropTypes.number.isRequired,
    removerItem:PropTypes.func.isRequired
};