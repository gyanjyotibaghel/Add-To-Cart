import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {remove,increment,decrement} from '../store/cartSlice'

const Cart = () => {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.cart);

  const handleRemove=(productId)=>{
dispatch(remove(productId))
  }

  const handleIncrement =(productId)=>{
    dispatch(increment(productId))
  }
  const handleDecrement =(productId)=>{
    dispatch(decrement(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='card-wrap'>
{
  products.map(product=>(
    <ul className='card-card'>
      <li><img src={product.image}/></li>
      <li><h4>{product.title}</h4></li>
      <li><h4>{product.price}</h4></li>
      <button className='incre' onClick={()=>handleIncrement(product.id)}>+</button>
<li><h4>Quantity: {product.quantity}</h4></li>
<button className='decre' onClick={()=>handleDecrement(product.id)}>-</button>
      <li><button className='btns' onClick={()=>handleRemove(product.id)}>Remove</button></li>
    </ul>
  ))
}
      </div>
    </div>
  )
}

export default Cart
