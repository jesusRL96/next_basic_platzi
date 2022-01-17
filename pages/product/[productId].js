import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const {query: {productId}} = useRouter();
    return (
        <div>
            <p>pagina de producto: {productId}</p>
        </div>
    )
}

export default ProductItem
