
import PropTypes from 'prop-types';

export default function Button(props) {

    const acionarBotao = () =>{
        props.abrirCarrinho()
        props.calcValor()
    }

    const estilo = {
        backgroundColor:`${props.backgroundColor}`,
        color:`${props.color}`,
        display:'grid',
        alignItems: 'center',
        justifyContent: 'center',
        width: '2rem',
        height: '2rem',
        border:`${props.border}`,
        borderRadius:'4px',
        fontSize:'1.2rem',
        cursor:'pointer'
    }

    return (
        <button style={estilo} onClick={acionarBotao} >
            {props.text}
        </button>)
}
Button.propTypes = {
    text: PropTypes.node.isRequired, 
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    border: PropTypes.string.isRequired,
    abrirCarrinho: PropTypes.func,
    calcValor:PropTypes.func
  };

