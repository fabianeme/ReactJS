import React from 'react';

const CartWidget = ({cantCarrito}) => {
    return (
        <>

        <button><p>Carrito</p></button>
        <p className='numberCart'>{cantCarrito}</p>
        </>
       
    );
}

export default CartWidget;
