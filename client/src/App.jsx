import { BrowserRouter,Link } from 'react-router-dom'
import {FaAmazon , FaShoppingCart,FaSearch} from 'react-icons/fa'
import Pages from './pages/Pages'


function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <header>
    <Link to={'/'} className="logo">
      <FaAmazon />
      <span>mazona</span></Link>
    <div className="search">
        <input type="text" placeholder='search products...'/>
        <FaSearch />
        </div>  

        <div className="cart">
              <FaShoppingCart /> <span><b>1</b></span>
          </div> 
         
      <button>Sign Up</button>
      <button>Sign In</button>
  </header>
  
  <Pages />
  </BrowserRouter>

<footer>
  All rights reserved
</footer>
    </div>
  )
}

export default App
