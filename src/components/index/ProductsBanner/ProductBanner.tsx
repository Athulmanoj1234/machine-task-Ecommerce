import React from 'react'
import { ProductInfo } from '../../../types/product'
import { Link, useNavigate } from 'react-router-dom'
import { useEcommerceStore } from '../../../store';

const ProductBanner = ({ id, name, price, category, imageUrl, isInStock }: ProductInfo) => {
    const navigate = useNavigate();
    const handleShowAvailable = useEcommerceStore(state => state?.handleProductShowPopup);
    

    const handleNavigateToProductPage = (isInStock: any) => {
        const isAvailable = isInStock == 'true';
        console.log(isAvailable);
        if (!isAvailable) {
            handleShowAvailable();
            return console.log("cannot add to cart");
        }
        navigate(`/product/${id}`)
    }

    // onClick={() => navigate(`/product/${id}`, { state: { productId: id } })}
    return (
        <tr className="p-4 border-b-2 hover:bg-gray-200 relative h-[70px]" onClick={() => handleNavigateToProductPage(isInStock)} >
            <td className=""><img src={imageUrl} alt="" className="h-12 w-16 absolute left-[60px] bottom-[8px]" /></td>
            <td className="text-center font-semibold">{name}</td>
            <td className="text-center">{price}</td>
            <td className="text-center">{category}</td>
            {<td className={`text-center ${isInStock == "true" ? "text-green-600" : 'text-red-600'}`}>##{isInStock}</td>}
        </tr>
    )
}
export default ProductBanner
