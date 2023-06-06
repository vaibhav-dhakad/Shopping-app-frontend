import { ADD_TO_CART, REMOVE, SEARCH } from "../constants";
export const initialState = {
    products: [],
    cartList: [],
    cartItem: 0
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:

            // console.log(state.cartItem)
            return {...state,
                cartList: [...state.cartList],
                products: action.payload,

            }
        case ADD_TO_CART:
            {
                const { data, cartId } = action.payload;
                console.log(data)
                return {...state, cartItem: state.cartItem + 1, cartList: [...state.cartList, { data, cartId }] }
            }
        case REMOVE:
            {
                console.log(action.id)
                console.log(state.cartList[0].cartId)
                const newCartList = state.cartList.filter((item) => item.cartId !== action.id)
                return {
                    ...state,
                    cartList: newCartList,
                    cartItem: state.cartItem - 1
                }
            }
        default:
            return state

    }
}