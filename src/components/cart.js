// Cart.js
import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const totalAmount = cartItems.reduce((accumulator, item) => accumulator + Number(item.price), 0);
        setAmount(totalAmount);
    }, [cartItems]);
    
    return (
        <div>
            <h1>Your Cart</h1>
            <div className='container'>
                {cartItems.length === 0 ? (
                    <p className='no-item'>No items in the cart.</p>
                ) : (
                    cartItems.map((item) => (
                        <div className="imgBox" key={item.id}>
                            <img src={item.image} alt="" />
                            <p>{item.company} {item.model}</p>
                            <p>Price : {item.price}</p>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>   
                    ))
                )}
            </div>
            <button className='payment'>
                Pay {amount}
            </button>
        </div>
    );
};

export default Cart;
