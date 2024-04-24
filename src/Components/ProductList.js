import React from "react";
const ProductList=()=>{
    const products=[
        {
                id:1,
                name:"Galaxy A80",
                price:22000
        },
        {
            id:2,
            name:"Nike T-Shirt",
            price:4500
        },
        {
            id:3,
            name:"Study Table",
            price:2000
        }
    ]
    return(
        <div>
            {products.map(item=>{
                return(
                
                   <h2>Name:{item.name}   Price:{item.price}</h2>
             
                )
            })}
        </div>
    )
    }
    

export default ProductList;