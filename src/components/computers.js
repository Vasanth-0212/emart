import { computerData } from '../data/computers';
import { useCart } from './CartContext';



function Computers(){
    const { addToCart } = useCart();
    return(
        <div className="container">
            {computerData.map((data)=>{
                return(
                    <div className="imgBox" key={"C"+data.id}>
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
export default Computers;