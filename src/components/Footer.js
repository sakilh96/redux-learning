import React, { useEffect, useState } from 'react'

const Footer = (props) => {
  // console.log('footer', props.data.cardData[0].price);
  const [price, setPrice] = useState(0);
  useEffect(()=>{
    let totalPrice= 0;
    props.data.cardData.forEach((data)=>{
      totalPrice+= data.price
    })
    setPrice(totalPrice)
  },[props])
  return (
    <div>
        <div className=''>
                <label className='cartTotalPrice'>{price}</label>
            </div>
    </div>
  )
}

export default Footer