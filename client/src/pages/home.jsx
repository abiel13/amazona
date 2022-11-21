import {Splide,SplideSlide} from '@splidejs/react-splide'
import { useReducer } from 'react';
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import Catlog from '../components/Catlog';


function Home(){

  const reducer =(state,action) =>{
    switch(action.type){
      case 'FETCH_REQUEST':
        return {...state,loading:true,}
        case 'FETCH_SUCCESS':
          return {...state, loading:false, data:action.payload}
          case 'FETCH_FAILED':
            return {...state,loading:false, error:action.payload }
        default:
          return state;
          }
  }


const [{data,error,loading}, dispatch] = useReducer(reducer,{
  data:[],
  error:'',
  loading:true,
})





useEffect(

() =>{
const fetchData = async () =>{  
 dispatch({type:'FETCH_REQUEST', loading:true})
try{
  const result = axios.get('/api/products')
  dispatch({type:'FETCH_SUCCESS',payload:(await result).data})
  console.log((await result).data)
}catch(err){
  dispatch({type:'FETCH_FAILED'  , payload:err.message})
}

}
fetchData() 
}
  ,[]
)

return(
        <div> 

   
     

        <main>
          <h1>Popular Picks</h1>  
   
          <Splide options={{
            arrows:false,
            perPage:3,
            gap:'28rem',
            drag:'free'
          }}  style={{
            padding:20
          }} >{
         data.map(element =>{
          return(
           <Catlog key={element.id} product = {element}/>
         
          ) 
         })
        }
         </Splide>

        </main>
    </div>
    )
}



export default Home