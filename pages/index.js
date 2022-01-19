import React, { useEffect } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import ProductBox from '@components/ProductBox/ProductBox'

const Home = () => {
    const [productList, setProductList] = React.useState([]);

    useEffect(()=>{
        fetch('api/avo').then(response => response.json()).then(({ data, length }) => {
            setProductList(data);
        });
    },[])

    return (
        <div>
            <Heading>Home Page</Heading>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                {productList.map((product) => {
                    return (
                        <ProductBox key={product.id} {...product} />
                    )
                })}
            </Grid>
        </div>
    )
}

export default Home
