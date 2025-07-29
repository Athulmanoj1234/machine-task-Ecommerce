import React from 'react'
import { ProductInfo } from '../../../types/product'
import { Link, useNavigate } from 'react-router-dom'

const ProductBanner = ({ id, name, price, category, imageUrl, isInStock }: ProductInfo) => {
    const navigate = useNavigate();

    return (
        <tr className="p-4 border-b-2 hover:bg-gray-200 relative h-[70px]" onClick={() => navigate(`/product/${id}`, { state: { productId: id } })}>
            <td className=""><img src={imageUrl} alt="" className="h-12 w-16 absolute left-[60px] bottom-[8px]" /></td>
            <td className="text-center font-semibold">{name}</td>
            <td className="text-center">{price}</td>
            <td className="text-center">{category}</td>
            {<td className={`text-center ${isInStock == "true" ? "text-green-600" : 'text-red-600'}`}>##{isInStock}</td>}
        </tr>
    )
}
export default ProductBanner
