import React from 'react'

const Header = (props) => {

  console.log('header', props);
  return (
    <div>
        <div className=''>
                <img 
                    src='https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg' 
                    alt='Shopping Cart' 
                    className='cartIcon'
                />
                <label className='itemCount'>{ props.data.cardData.length}</label>
            </div>
    </div>
  )
}

export default Header