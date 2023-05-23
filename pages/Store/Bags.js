 import React, { useState } from "react";
 import Image from 'next/image'

const bagShoppingPage  = () => {
    const [bagItems, setBagItems] = useState([]);

    const addToCart = (product)=> {
        setBagItems([...bagItems,product]);
    }

    const renderProducts = () => {
        const products = [
            { id:1, name: 'Bag1', image:'bag1.avif',price:45 },
            { id:2, name: 'Bag2', image:'bag2.avif',price:150 },
            { id:3, name: 'Bag3', image:'bag3.avif',price:40 },
            { id:4, name: 'Bag4', image:'bag4.avif',price:80 },
            { id:5, name: 'Bag5', image:'bag5.avif',price:200 },
            { id:6, name: 'Bag6', image:'bag6.avif',price:50 },
            { id:7, name: 'Bag7', image:'bag7.avif',price:45 },
            { id:8, name: 'Bag8', image:'bag8.avif',price:120 },
        ];

        return products.map((products) => (
            <div key={products.id}>
                <Image src={'/images/${products.image}'} alt={products.name} width={300} height={300}/>
                <h3>{products.name}</h3>
                <p>price:${products.price}</p>
                <button onClick={()=>addToCart(products)}>Add to Cart</button>
            </div>
        ))
    }
    return (
        <div>
            <h2>Bag Shopping Page</h2>
            {renderProducts()}
        </div>
    )
}

export default bagShoppingPage;