import React from 'react'
import PageIndicator from './../../Components/PageIndicator';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiDeleteBin7Fill } from "react-icons/ri";
import Details from '../../Components/Details';
import { type } from '@testing-library/user-event/dist/type';
function Cart() {
    const location = useLocation();
    const { state } = location;

    console.log(location)
    console.log(state)
    const { product, count } = state;

    const navigate = useNavigate();
    function handleClick(item) {
        navigate('/CheckOut', { state: { product: item, count: count } })
    }

    return (
        <>
            <PageIndicator page={"Cart"} />
            <div className='cart-content '>
                <div className='cart-heading-left'>
                    <div className='cart-heading-indicator'>
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Subtotal</span>
                    </div>
                    <div className='cart-item'>

                        <img src={product.src} />
                        <div style={{ color: "#9F9F9F" }}>{product.name}</div>
                        <div style={{ color: '#9F9F9F' }}>{product.price}</div>
                        <div>{count}</div>
                        <div>{product.price} * {count}</div>
                        <div><RiDeleteBin7Fill style={{ color: "#b88e2f", fontSize: "1.15rem" }} /></div>
                    </div>
                </div>
                <div className='cart-heading-right'>
                    <div>Cart Totals</div>
                    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
                        <div style={{ display: "flex", gap: "2rem", fontWeight: "500" }}>SubTotal   <span style={{ fontWeight: "400", color: "#9F9F9F" }}>{count} * {product.price}</span></div>
                        <div style={{ display: "flex", gap: "2rem", fontWeight: "500" }}>Total <span style={{ color: "#B88E2F" }}>{count} * {product.price}</span></div>
                    </div>
                    <div><button className='check-cart-button' onClick={() => handleClick(product)}>Check Out</button></div>
                </div>
            </div>

            <Details />

        </>
    )
}

export default Cart