import axios from "axios";
import { ProductFilterData } from "../types/product";

export async function getProducts({searchValue, filterCategory, filterPriceRange, startIndex, endIndex}: ProductFilterData) {
    // const priceRange = Number(filterPriceRange.split(" ")[1]);
    // console.log(priceRange);
    const response = await axios.get(`http://localhost:3007/products?searchValue=${searchValue}&filterCategory=${filterCategory}&filterPriceRange=${filterPriceRange}&startIndex=${startIndex}&endIndex=${endIndex}`);
    console.log(response);
    return response;
}
