import React from 'react';
import reicon from '../images/reicon.png'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for(const product of cart) { 
        total = total + parseInt(product.salary);
    }
    return (
        <div>
            <img src={reicon} alt="" />
            <h2>Total Number of Doctor</h2>
            <h2>Donated : {props.cart.length}</h2>
            <h4>Total Amount : ${total}</h4>
            {
                cart.map(product => <li>{product.name}</li>)
            }
        </div>
    );
};

export default Cart;