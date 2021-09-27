import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    // console.log(props);
    const {name, img, phone, job, salary, email} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faDonate} />

    return (
        <div className="product">
            <div className="photo">
                <img src={img} alt="" />
            </div>
           <div className="card-inf">
             <h2>Name: {name}</h2>
             <h6>Phone: {phone}</h6>
             <h5>Company: {job}</h5>
             <h5>Balance: {salary}</h5>
             <h5>Email: {email}</h5>
             <button onClick={() => props.handleAddToCart(props.product)}
             className="btn-regular">{cartIcon} Donate</button>
           </div>   
        </div>
    );
};

export default Product;