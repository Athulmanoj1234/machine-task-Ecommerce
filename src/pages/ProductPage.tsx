import React from 'react'
import ProductDetailBanner from '../components/ProductPage/ProductDetailBanner';
import ProductDetailHeader from '../components/ProductPage/ProductDetailHeader';
import RelatedDetailProduct from '../components/ProductPage/RelatedDetailProduct'


const ProductPage = () => {
    
    // const productDetails = await getProductById(productId);
    // console.log("productInfodetails", productDetails);

  return (
    <div className='overflow-hidden relative'>
        <ProductDetailHeader />
        <ProductDetailBanner  />
        <RelatedDetailProduct />
    </div>
  )
}

export default ProductPage
