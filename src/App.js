// App.js
import './App.css';
import Mobile from './components/mobiles';
import Computers from './components/computers';
import Watches from './components/watches';
import Cart from './components/cart';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import {  CartProvider } from './components/CartContext'; 


function App() {
    
    return (
        <CartProvider> 
            <Router>
                <div>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Mobile />} />
                        <Route path="/Computers" element={<Computers />} />
                        <Route path="/Watches" element={<Watches />} />
                        <Route path="/Cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
