import { create } from 'zustand';
import { EcommerceTypes } from './types/product';


export const useEcommerceStore = create<EcommerceTypes>((set) => ({
    showProductAvailablePopup: false,
    handleProductShowPopup: () => set({ showProductAvailablePopup: true }),
    handleProductClosePopup: () => set({ showProductAvailablePopup: false }),
    showProductAddedPopup: false,
    isProductLoading: true,
    handleProductAddedShowPopup: () => set({ showProductAddedPopup: true }),
    handleProductAddedClosePopup: () => set({ showProductAddedPopup: false }),
    stopProductLoading: () => set({ isProductLoading: false }),
}));