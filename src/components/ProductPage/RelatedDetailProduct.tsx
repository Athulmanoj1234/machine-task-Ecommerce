import React from 'react'
import RelatedProductCard from './RelatedProductCard'
import { ProductInfo } from '../../types/product'
import { clientUrl } from '../../constant'

const RelatedDetailProduct = ({ relatedProducts }: { relatedProducts: ProductInfo[] }) => {
    return (
        <div className='lg:flex lg:flex-col lg:w-full lg:h-[432.5px] lg:gap-[24px] lg:ml-[0] lg:absolute lg:bottom-[390px]  lg:px-[20px] md:flex md:flex-col md:w-[624px] md:alif md:h-[812px] md:ml-[67px] md:mt-[-50px] md:gap-[24px] max-sm:w-[358px] max-sm:h-[1846px] max-sm:flex max-sm:flex-col max-sm:gap-[24px] max-sm:bt-[1px] border-gray-200 max-sm:mt-[-440px] max-sm:px-3'>
            <h2 className='lg:w-full lg:h-28px font-medium text-[18px] leading-[28px] tracking-[0%] align-middle text-gray-900 md:w-full md:h-[28px] md:text-[18px] md:leading-[28px] md:tracking-[0%] md:align-middle max-sm:w-[358px] max-sm:h-[28px] max-sm:text-[18px] max-sm:leading-[28px] max-sm:tracking-[0%] max-sm:align-middle'>Customers also purchased</h2>
            <div className='lg:w-full lg:h-[380.5px] lg:flex lg:justify-between md:w-full md:h-[760px] md:grid md:grid-cols-2 md:grid-rows-2  md:gap-x-8 md:gap-y-[100px] max-sm:flex max-sm:flex-col max-sm:gap-[40px] max-sm:w-[358px] max-sm:h-[1794px] max-sm:ml-[20px]'>
                { /*  */}
                {relatedProducts && (relatedProducts?.map((product: ProductInfo) => (
                    <button onClick={() => window.location.href = `${clientUrl}/product/${product?.id}`}>
                        <RelatedProductCard
                            id={product?.id}
                            name={product?.name}
                            category={product?.category}
                            imageUrl={product?.imageUrl}
                            price={product?.price}
                            isInStock={product?.isInStock}

                        />
                    </button>)))}
            </div>
        </div>
    )
}

export default RelatedDetailProduct
