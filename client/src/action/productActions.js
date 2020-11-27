import { GET_ALL_PRODUCT } from "../constants";

export const getALLProduct=(products) => {
	return {
		type: GET_ALL_PRODUCT,
		products,
	}
}