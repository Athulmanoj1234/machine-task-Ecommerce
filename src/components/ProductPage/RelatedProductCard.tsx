import React from 'react'
import { ProductInfo } from '../../types/product'
import { useNavigate } from 'react-router-dom'

const RelatedProductCard = ({ id, name, category, price, imageUrl, isInStock }: ProductInfo) => {
    
    const navigate = useNavigate();
    
    return (
        <div className='lg:w-[280px] lg:h-[380.5px] lg:flex lg:flex-col lg:gap-[16px]  md:w-[300px] md:h-[360.5px] md:flex md:flex-col md:gap-[16px] max-sm:w-[358px] max-sm:h-[418.5px] max-sm:flex max-sm:flex-col max-sm:gap-[16px]' onClick={() => navigate(`/product/
            ${id}`, { state: { productId: id } })}>
            <div className='lg:w-full lg:h-[320px] lg:rounded-[6px] md:w-[300px] md:h-[300px] md:rounded-[6px] max-sm:w-full max-sm:h-[358px] max-sm:rounded-[6px]'>
                <img src={imageUrl} alt="" className='lg:w-[280px] lg:h-[320px] md:w-[300px] md:h-[300px] max-sm:w-full max-sm:h-[358px]' />
            </div>
            <div className='lg:w-[280px] lg:h-[44.5px] lg:flex lg:justify-between md:w-[300px] md:h-[44.5px] md:flex md:justify-between max-sm:w-[358px] max-sm:h-[44.5px] max-sm:flex max-sm:justify-between'>
                <div className='lg:w-[84px] lg:h-[4.5px] lg:flex lg:flex-col lg:gap-[4px] md:w-[64px] md:h-[44.5px] md:flex md:flex-col md:gap-[4px] max-sm:w-[84px] max-sm:h-[44.5px] max-sm:flex max-sm:flex-col max-sm:gap-[4px]'>
                    <h3 className='lg:w-[84px] lg:h-[20px] font-normal text-gray-700 text-[14px] leading-[20px] tracking-[0%] align-middle max-sm:w-[84px] max-sm:h-[20px] max-sm:text-[14px] max-sm:leading-[20px] max-sm:tracking-[0%] max-sm:align-middle'>{name}</h3>
                </div>
                <p className='lg:w-[27px] lg:h-[44.5px] lg:pb-[24.5px] text-gray-900 font-medium lg:text-[14px] lg:leading-[20px] lg:tracking-[0%] lg:align-middle md:w-[27px] md:h-[444.5px] md:pb-[24.5px] md:text-[14px] md:leading-[20px] md:tracking-[0%] md:align-middle max-sm:text-[14px] max-sm:leading-[20px] max-sm:tracking-[0%] max-sm:align-middle'>${price}</p>
            </div>
        </div>
    )
}

export default RelatedProductCard
