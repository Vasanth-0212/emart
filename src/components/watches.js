
import { watchData} from '../data/watch';
import { useCart } from './CartContext';


function Watches(){
    const { addToCart } = useCart();
    return(
        <div className="container">
            {watchData.map((data)=>{
                return(
                    <div className="imgBox" key={"W"+data.id}>
                        <img src={data.image} alt=""/>
                        <p>{data.company} {data.model}</p>
                        <p>Price : {data.price}</p>
                        <button onClick={() => addToCart(data)}>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    );
}
export default Watches;