import React, { useState, useEffect } from 'react';
import Card from './Card';

const Products = () => {
    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        try {
            const response = await fetch('/api/v1/products/');
            const products = await response.json();
            console.log(products);
            setData(products);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {data.map((product) => (
                <Card key={product._id} product={product} />
            ))}
        </div>
    );
};

export default Products;
