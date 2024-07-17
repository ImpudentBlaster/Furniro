import React from 'react'
import PageIndicator from './../../Components/PageIndicator';
import { useLocation } from 'react-router-dom';
function Cart() {
    const location = useLocation();
    const { state } = location;
    const { product } = state;
    return (
        <>
            <PageIndicator page={"Cart"} />
            <div className='cart-content'>
                <div className='cart-heading-left'>
                    <div className='cart-heading-indicator'>
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Sub</span>
                    </div>
                    <div className='cart-item'>
                    
                          <img  src={product.src}/>
                    </div>
                </div>
                <div className='cart-heading-right'></div>
            </div>


        </>
    )
}

export default Cart