import React, { useEffect, useState } from 'react'
import ProductDetailBanner from '../components/ProductPage/ProductDetailBanner';
import ProductDetailHeader from '../components/ProductPage/ProductDetailHeader';
import RelatedDetailProduct from '../components/ProductPage/RelatedDetailProduct'
import { getProductById, getRelatedProducts } from '../query/action';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductInfo } from '../types/product';
import { useEcommerceStore } from '../store';


const ProductPage = () => {

  // console.log(state);
  const navigate = useNavigate();
  const { id } = useParams();
  
  // const { productId } = state;
  // const productDetails = await getProductById(productId);
  // console.log("productInfodetails", productDetails);
  // console.log(productId);

  const stopProductLoading = useEcommerceStore((state) => state?.stopProductLoading);
  const isProductLoading = useEcommerceStore((state) => state?.isProductLoading);

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
      const productResponse: ProductInfo = await getProductById(id!);
      const relatedProductResponse: ProductInfo[] = await getRelatedProducts(id!);
      stopProductLoading();
      setproductData(productResponse);
      setRelatedProducts(relatedProductResponse);
    }
    console.log("product data", productData);
    try {
      fetchData();
    }
    catch (err) {
      navigate('/some-wrong');
    }
  }, [id]);


  return (
    <div className='overflow-hidden relative'>
      <ProductDetailHeader />
      {!isProductLoading  ?  (<>
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
          /> </>  ) :
        ( <>loading</> )}
    </div>
  )
}

export default ProductPage
