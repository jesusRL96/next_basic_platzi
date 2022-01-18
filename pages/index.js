import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'



const Home = () => {
    const [productList, setProductList] = React.useState([]);

    useEffect(()=>{
        fetch('api/avo').then(response => response.json()).then(({ data, length }) => {
            setProductList(data);
        });
    },[])

    return (
        <div>
            <Navbar/>
            <h1>hola mundo</h1>
            {productList.map((product) => {
                return (
                    <div key={product.id}>{product.name}</div>
                )
            })}
        </div>
    )
}

export default Home
