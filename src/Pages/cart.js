import React, { useState } from 'react'
import './Styles/cart.css'

const Cart = ({cartItems, itemRemove}) => {

  let [cname, setCname] = useState("surpriceButton")

  const [quantities, setQuantities] = useState({});
// Incrementing item quantity in the cart
  const handleUpgrade = (itemId) => {
    setQuantities((prevQuantities) => {
      console.log(quantities)
      return {...prevQuantities,[itemId]: (prevQuantities[itemId] || 0) + 1,};
    });
  };
//Decrementing the Item Quantity in the Cart
  const handleDegrade = (itemId) => {
    setQuantities((prevQuantities) => {
      return {...prevQuantities,[itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 0),};
    });
  };
// Calculating the total amount in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += (quantities[item.id] || 0) * item.new_price;
    });
    return total;
  };

  const togglefn1 = () => {
    setCname('Addtoggle1')
  }

  const togglefn2 = () => {
    setCname('surpriceButton')
  }

  const TotalAmount = calculateTotalAmount();

  return (
    <div className='cartitems'>
      {cartItems.map((item)=> (
        <div className='cartbox' key={item.id}>
          <div className='itemname'>
            <span id='name'>{item.name}</span>
          </div>
          <div>
            <span id='price'>${item.new_price}</span>
          </div>

          <div className='addbuttons'>
            <div className='front-side'>
               <button onClick={cname==="surpriceButton"?togglefn1:togglefn2}>Add</button>
            </div>
            <div className={cname}>
              <button onClick={() => handleDegrade(item.id)}>-</button>
              <span>{quantities[item.id] || 0}</span>
              <button onClick={() => handleUpgrade(item.id)}>+</button>
            </div>  
         </div>
          <div>
            <span id='totalamount'>{quantities[item.id] ? quantities[item.id] * item.new_price : 0}</span>
          </div>
          <div className='removebutton'>
            <button onClick={() => itemRemove(item)}>Remove</button>
          </div>
        </div>
      ))}
      <div className='totaldiv'>
        <span>Total Amount  &emsp; ${TotalAmount}</span>
        <button>Proceed to Pay</button>
      </div>
    </div>
  )
}

export default Cart