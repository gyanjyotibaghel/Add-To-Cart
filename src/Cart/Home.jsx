// import React from 'react'
// import Product from '../Page/Product'
import React, { useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {add} from '../store/cartSlice'
import { fetchProducts,STATUSES } from '../store/productSlice'

const Home = () => {
    const dispatch = useDispatch();
   const {data:product,status}=useSelector((state)=>state.product)
   const [category,setCategory]=useState("");
   const [min,setmin]=useState("")
   const [max,setmax]=useState("")
      // const [product,setProduct]=useState([]);
  
      useEffect(()=>{
            
        dispatch(fetchProducts());
      },[dispatch]);
  
      const handleAdd =(product)=>{
     dispatch(add(product))
      }
  
      const filterProduct =product.filter((product)=>{
  const passescategory=category === ''|| product.category ===category;
  const mincategory=min===''||product.price >=parseFloat(min);
  const maxcategory=max===''||product.price <=parseFloat(max);
  return passescategory && mincategory && maxcategory;
        });
  if(status === STATUSES.loading){
    return<h2>loading....</h2>
  }
  
    return (
      <div className='product-container'>
<div className='filter'>
        <label>Search product</label>
        <select id= "category" value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value=''>All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronic</option>
            <option value="jewelery">Jewellery</option>
          </select>
<button className='all-button' onClick={() => setCategory('')}>All</button>
          <div className='price'>
          <label>Minimum price:</label>
          <input type="number" placeholder='Minimum Price' value={min} onChange={(e)=>setmin(e.target.value)}/><br/>
          <label>Maximum price:</label>
          <input type="number" placeholder='Maximum Price' value={max} onChange={(e)=>setmax(e.target.value)}/>
          </div>
</div>
          <h1>Product</h1>
  
          <div className='card-result'>
        {
          filterProduct.map((product) =>(
              <div className='card' key={product.id}>
                  <img src={product.image } alt={product.title}/>
                  <h4>{product.title}</h4>
                  <h4>{product.price}</h4>
                  <button className='btn' onClick={()=>handleAdd(product)}>Add To Cart</button>
              </div>
              
          ))
        }
         
      </div>
      </div>
    )
  }
  
export default Home
