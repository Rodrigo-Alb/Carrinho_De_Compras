import './App.css'
import Banner from './Partes_do_site/Banner'
import Nav from './Partes_do_site/Nav'
import FoodList from './Partes_do_site/FoodList'
import {useState } from 'react';
import Carrinho from './Partes_do_site/Carrinho';


function App() {

  const [aberto , setAberto] = useState('fechado')

  const abrirCarrinho = () => {
    if(aberto === 'aberto'){
      setAberto('fechado')
      console.log(aberto)
    }else{
      setAberto('aberto')
      console.log(aberto)
    }
  }
  
  const [items , setItems] = useState([])

  const adicionarAoCarrinho = (key, nome, preco) => {
    const itemExistente = items.find(item => item.key === key);
    if (itemExistente) {
      const novoCarrinhoItems = items.map(item =>
        item.key === key ? { ...item, quantidade: item.quantidade + 1 } : item
      );
      setItems(novoCarrinhoItems);
    } else {
      const novoItem = { key, nome, preco, quantidade: 1 };
      setItems([...items, novoItem]);
    }
    calcularValorTotal()  
  };


  const removerItem = (key) => {
    setItems(items.filter(item => item.key !== key));
  }


  const [value,setValue] = useState(0);

  const calcularValorTotal = () => {
    const total = items.reduce((acumulador, item) => {
      return acumulador + (parseFloat(item.preco) * item.quantidade);
    }, 0);
    setValue(total)
    return total;
    
  };

  return (
    <div className="body">
      <Nav abrirCarrinho = {abrirCarrinho } aberto = {aberto} calcValor = {calcularValorTotal} />
      <Banner />
      <FoodList adicionarAoCarrinho= {adicionarAoCarrinho} />
      <Carrinho removerItem={removerItem} abrirCarrinho = {abrirCarrinho} aberto={aberto} items={items} value = {value} />
    </div>

  )
}

export default App
