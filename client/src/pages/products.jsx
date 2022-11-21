import { useParams } from "react-router-dom"

function Products(){
    let params = useParams()
    const {slug} = params;
    console.log(params)
    return(
        <div className="details">
<h1>{slug}</h1>

        </div>
    )
}   

export default Products