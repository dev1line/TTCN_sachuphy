import { GET_ALL_PRODUCT, FILTER_PRODUCT } from "../constants";

export const getALLProduct=(products) => {
	return {
		type: GET_ALL_PRODUCT,
		products,
	}
}
export const filterProduct=(products) => {
	return {
		type: FILTER_PRODUCT,
		products
	}
}