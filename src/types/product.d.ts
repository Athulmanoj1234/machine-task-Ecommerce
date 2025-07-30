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

export interface EcommerceTypes {
    showProductAvailablePopup: boolean;
    showProductAddedPopup: boolean;
    isProductLoading: boolean;
    handleProductClosePopup: () => void;
    handleProductAddedShowPopup: () => void;
    handleProductAddedClosePopup: () => void;
    stopProductLoading: () => void;
    handleProductShowPopup: () => void;
}
