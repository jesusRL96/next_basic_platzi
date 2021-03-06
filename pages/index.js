import React, { useEffect } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import ProductBox from '@components/ProductBox/ProductBox'

// Pagina estatica

export const getStaticProps = async () => {
    const response = await fetch('https://platzi-avo.vercel.app/api/avo');
    const { data } = await response.json();

    return {
        props: {
            productList: data
        },
    }
};

const Home = ({productList}) => {

    // useEffect(()=>{ // client side
    //     fetch('api/avo').then(response => response.json()).then(({ data, length }) => {
    //         setProductList(data);
    //     });
    // },[])

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
