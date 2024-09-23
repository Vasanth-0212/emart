import { mobileData } from "../data/mobiles";
import { useCart } from './CartContext';

function Mobile() {
    const { addToCart } = useCart();

    return (
        <div className="container">
            {mobileData.map((data) => (
                <div className="imgBox" key={"M"+data.id}>
                    <img src={data.image} alt="" />
                    <p>{data.company} {data.model}</p>
                    <p>Price : {data.price}</p>
                    <button onClick={() => addToCart(data)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Mobile;
