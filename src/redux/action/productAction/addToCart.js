import { ADD_TO_CART } from "../../constants"
export const addToCart = (data) => {
    console.log()
    return {
        type: ADD_TO_CART,
        payload: {
            data,
            cartId: new Date().getTime().toString()

        }
    }


}