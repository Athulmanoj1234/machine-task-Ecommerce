import axios from "axios";
import { ProductFilterData, ProductInfo } from "../types/product";
import { serverUrl } from "../constant";

export async function getProducts({searchValue, filterCategory, filterPriceRange, startIndex, endIndex}: ProductFilterData) {
    // const priceRange = Number(filterPriceRange.split(" ")[1]);
    // console.log(priceRange);
    const response = await axios.get(`${serverUrl}/products?searchValue=${searchValue}&filterCategory=${filterCategory}&filterPriceRange=${filterPriceRange}&startIndex=${startIndex}&endIndex=${endIndex}`);
    console.log(response);
    return response?.data?.data;
}


export async function getProductById(id: string): Promise<ProductInfo> {
    const response = await axios.get(`${serverUrl}/product/${id}`);
    console.log(response.data);
    return response?.data?.data;
}

export async function getRelatedProducts(id: string): Promise<ProductInfo[]> {
    const response = await axios.get(`${serverUrl}/products/${id}/related`);
    console.log(response.data);
    return response?.data?.data;
}