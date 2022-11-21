import {FaStar , FaStarHalf} from 'react-icons/fa'


function Ratings(props){
   const {rates , nor} = props

   let rateSS = rates.toString()

let noOfStars = rateSS.split('.')
// console.log(noOfStars)
let arr = noOfStars.splice(0,1);
let arrS = arr.toString()
let arrh = noOfStars.splice(0,1);

let arrhS = arrh.toString()

function StarGen(){
let stars = []
    for(let i=0; i<parseInt(arrS); i++){
stars.push(<FaStar key={i}/>)

    }
    if( parseInt(arrhS) > 0){
       stars.push(<FaStarHalf key={8} />)
    }
    
    return stars
}

return (
    <div className='rates'>
        
       <StarGen /> <span>{nor} reviews</span>
    </div>
)
}

export default Ratings