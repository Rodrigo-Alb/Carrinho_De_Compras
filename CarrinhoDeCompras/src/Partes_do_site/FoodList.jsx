import Burguer from '../assets/burguer.jpg'
import Fries from '../assets/fries.jpg'
import Pizza from '../assets/pizaa.jpg'
import Coca from '../assets/cocacola.avif'
import Sanduiche from '../assets/sanduiche.jpeg'
import Salada from '../assets/salada.jfif'
import './FoodList.css'
import PropTypes from 'prop-types';


export default function FoodList( {adicionarAoCarrinho}) {

  return (
    <>
        <section className='menu'>
            <h3>Food Menu</h3>
            <div className='item-container'>

            <div className="item">
                <img src={Burguer} />
                <p>Hamburguer</p>
            </div>
            <div className="item">
                <img src={Fries} />
                <p>Batata Frita</p>
            </div>
            <div className="item">
                <img src={Pizza} />
                <p>Pizza</p>
            </div>
            <div className="item">
                <img src={Sanduiche} />
                <p>Sanduiche</p>
            </div>
            <div className="item">
                <img src={Coca} />
                <p>Coca-Cola</p>
            </div>
            <div className="item">
                <img src={Salada} />
                <p>Salada</p>
            </div>
            </div>
    </section>
    <section className='menu-selection'>
        <h3>Menu Items</h3>
        <div className='card-list'>
          <div className='card'>
            <img src={Sanduiche} />
            <h4 className='card-title'>Sanduiche</h4>
            <div className="card-price">
                <div className="price">$4.00</div>
                <i className='fa-solid fa-plus add-to-cart' onClick={()=>{adicionarAoCarrinho(0,'Sanduiche',4.00)}}> + </i>
            </div>
          </div>        
          <div className='card'>
            <img src={Coca} />
            <h4 className='card-title'>Coca-Cola</h4>
            <div className="card-price">
                <div className="price">$8.50</div>
                <i className='fa-solid fa-plus add-to-cart' id='1' onClick={()=>adicionarAoCarrinho(1,'Coca-Cola',8.00)}>+</i>
            </div>
          </div>    
          <div className='card'>
            <img src={Salada} />
            <h4 className='card-title'>Salada</h4>
            <div className="card-price">
                <div className="price">$12.00</div>
                <i className='fa-solid fa-plus add-to-cart' id='2' onClick={()=>adicionarAoCarrinho(2,'Salada',12.00)}>+</i>
            </div>
          </div>          
          <div className='card'>
            <img src={Fries} />
            <h4 className='card-title'>Batata Frita</h4>
            <div className="card-price">
                <div className="price">$10.50</div>
                <i className='fa-solid fa-plus add-to-cart' id='3' onClick={()=>adicionarAoCarrinho(3,'Batata Frita',10.00)}>+</i>
            </div>
          </div>          
          <div className='card'>
            <img src={Pizza} />
            <h4 className='card-title'>Pizza</h4>
            <div className="card-price">
                <div className="price">$30.00</div>
                <i className='fa-solid fa-plus add-to-cart' id='4' onClick={()=>adicionarAoCarrinho(4,'Pizza',30.00)}>+</i>
            </div>
          </div>                    
        </div>
      </section>
  </>
  
  )
}
FoodList.propTypes ={
  adicionarAoCarrinho: PropTypes.func.isRequired
}