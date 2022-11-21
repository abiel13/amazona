import {Route,Routes} from 'react-router-dom'
import Home from './home'
import Login from './login'
import Products from './products'

function Pages(){
    return(
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:slug' element={<Products />} />
      </Routes>

    )
}

export default Pages
