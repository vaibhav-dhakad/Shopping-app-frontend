import { REMOVE } from "../../constants"
export const remove = (id) => {
    console.log('called ');
    return {
        type: REMOVE,
        id
    }
}