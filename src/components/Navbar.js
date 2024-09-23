import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { useState,useEffect } from "react";

function Navbar(){
    const { cartItems } = useCart();
    const [noOfItems, setNoOfItems] = useState(0);
    useEffect(() => {
        setNoOfItems(cartItems.length); 
    }, [cartItems]);
    return(
        <nav>
          <div className="nav-left">
            <h1>E-Mart</h1>
          </div>
          <div className="nav-center">
            <ul>
              <li><Link to="/">Mobiles</Link></li>
              <li><Link to="/Computers">Computers</Link></li>
              <li><Link to="/Watches">Watches</Link></li>
            </ul>
          </div>
          <div className='nav-right'>
              <li><Link to="/Cart">Cart ({noOfItems})</Link></li>
          </div>
        </nav>
    )
}

export default Navbar;