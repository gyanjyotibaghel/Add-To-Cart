import { useEffect, useState } from "react"
import { PiShoppingCartFill } from "react-icons/pi";
import './Addtocard.css';


function Addtocard(){
    const[data,setData]=useState([])
const[count,setCount]=useState(0)
    // const[remove,setRemove]=useState("Add to card");

    
const getData=async()=>{
    let url='https://fakestoreapi.com/products'
    let data=await fetch(url)
    let content=await data.json()

    console.log(content)
    setData(content)
}
const change=(ProductId)=>{ 
    setData(data.map(Product=>{
if(Product.id === ProductId){
setCount(count+1)
return { ...Product, addtocart: true };
}else{
setCount(count-1)
return { ...Product, addtocart: false }; 
}
}));
}
useEffect(
()=>{
    getData()
},[]
)
    
    return(
<div className="app">
    <h1>Products</h1>
    <h2 ><PiShoppingCartFill id="icons"/></h2>
    <button onClick={getData}>click</button>
    <div className="card-results">
                {
                    
                    data.map((val, index) => (
                        <div key={index} className="card-card">
                            <img src= {val.image} alt=""/>
                            <p>Product: {val.title}</p>
                            <p>Price: {val.price}</p>
                            <p>Rating:{val.rating.rate}</p>
                            <button id="btn" onClick={()=>change(val.id)}>{val.addtocard?"Remove":"Add To Card"}    </button>
                        </div>
                    )) }
            </div>
</div>  
    )
}
export default Addtocard;
