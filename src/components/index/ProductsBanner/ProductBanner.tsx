import React from 'react'

const ProductBanner = () => {
    return (
        <tr className="p-4 border-b-2 hover:bg-gray-200">
            <td className=""><img src={''} alt="" className="h-14 w-14 relative left-[70px] top-[4px]" /></td>
            <td className="text-center">productname</td>
            <td className="text-center">300</td>
            <td className="text-center">phones</td>
            <td className="text-center">true</td>
        </tr>
    )
}

export default ProductBanner
