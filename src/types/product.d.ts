export interface ProductFilterData {
    searchValue: string;
    filterCategory: string;
    filterPriceRange: string;
    startIndex?: number;
    endIndex?: number;
}

export interface ProductInfo {
    id: string;
    name: string;
    price: number | null;
    category: string;
    imageUrl: string;
    isInStock: boolean | string;
}