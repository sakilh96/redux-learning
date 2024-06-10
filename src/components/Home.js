import React from 'react';


const Home = (props) => {
    console.log('props home',props);
    return (
        <div className='homeContainer'>
        <div className='homeBody'>
            <div className='productCard'>
                <img 
                    src='https://m.media-amazon.com/images/I/61LI5G00UNL._AC_UF1000,1000_QL80_.jpg' 
                    alt='Vivo 30e' 
                    className='productImage'
                />
                <div className='productDetails'>
                    <p className='title'>Vivo 30e</p>
                    <p className='price'>₹ 45,000</p>
                    <button className='cartBtn' onClick={()=> props.addToCartHandler({prodName: "Vivo", price: 25000})}>Add to cart</button>
                   {
                    props.data.cardItems.cardData.length > 0 ? <button className='cartBtn' onClick={()=> props.removeCartHandler({prodName: "Vivo", price: 25000})}>Remove cart</button> : ''
                   }
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;
