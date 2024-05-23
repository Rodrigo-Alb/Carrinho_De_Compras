import { FaSearch } from 'react-icons/fa'
import './Input.css'
export default function Input() {
  
    return (
    <div className='search-container'>
       <FaSearch  className='search-icon'/>
       <input type="text" placeholder='Search' className='search-input' id="" />
    </div>
  )
}
