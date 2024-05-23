import { IoIosCloseCircleOutline } from 'react-icons/io'
import PropTypes from 'prop-types';
import './CarrinhoCard.css'

export default function CarrinhoCard({ item , removerItem}) {

  return (
    <div className="comprando-item">
        ({item.quantidade}x) {item.nome} ${item.preco} <IoIosCloseCircleOutline onClick={()=> removerItem(item.key)}  className='close-btn'/>
    </div>
  )
}

CarrinhoCard.propTypes = {
    item: PropTypes.object.isRequired,
    removerItem:PropTypes.func.isRequired
};
