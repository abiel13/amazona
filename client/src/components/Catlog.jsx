import {SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import {  Link } from 'react-router-dom'
import Ratings from './Ratings';

function Catlog(props){
    const {product} = props
    return(
        <SplideSlide key={product.title}>
            <Link to={`/products/${product.title}`} className='product' >
              <img src={product.image} alt={product.title} />
              <div className="info">
                 <p className='price'>  ${product.price}</p>
                 <Ratings rates={product.rating.rate} nor={product.rating.count} />
              <p>{product.title}</p>
              <button>Add to Cart</button>
              </div>
             
            </Link></SplideSlide>

    )
}

export default Catlog