import React, { useEffect, useState } from 'react'
import ProductDetailBanner from '../components/ProductPage/ProductDetailBanner';
import ProductDetailHeader from '../components/ProductPage/ProductDetailHeader';
import RelatedDetailProduct from '../components/ProductPage/RelatedDetailProduct'
import { getProductById, getRelatedProducts } from '../query/action';
import { useLocation } from 'react-router-dom';
import { ProductInfo } from '../types/product';


const ProductPage = () => {
    
    const { state } = useLocation();
    const { productId } = state;
    // const productDetails = await getProductById(productId);
    // console.log("productInfodetails", productDetails);
    console.log(productId);

    const [productData, setproductData] = useState<ProductInfo>({
      id: '',
      name: '',
      category: '',
      imageUrl: '',
      isInStock: '',
      price: null,
    });
    const [relatedProducts, setRelatedProducts] = useState<ProductInfo[]>([]);

    useEffect(() => {
      async function fetchData() {
        const productResponse: ProductInfo = await getProductById(productId);
        const relatedProductResponse: ProductInfo[]= await getRelatedProducts(productId);
        setproductData(productResponse); 
        setRelatedProducts(relatedProductResponse);
      }
      console.log(productData);
      fetchData();
    }, [productId]);

    
  return (
    <div className='overflow-hidden relative'>
        <ProductDetailHeader />
        <ProductDetailBanner 
          id={productData?.id}
          name={productData?.name}
          category={productData?.category}
          imageUrl={productData?.imageUrl}
          price={productData?.price}
          isInStock={productData?.isInStock}             
        />
        <RelatedDetailProduct 
          relatedProducts={relatedProducts}
        />
    </div>
  )
}

export default ProductPage
