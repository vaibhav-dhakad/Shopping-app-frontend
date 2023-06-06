import { SEARCH } from "../../constants";


export const searchApi = () => {
    return async(dispatch) => {
        try {
            let api = await fetch(`http://localhost:5000/getAllProducts`, {
                method: 'GET',

            });
            let data = await api.json();

            dispatch(search(data));
        } catch (error) {
            // Handle any errors here
        }
    };
};
export const search = (data) => {

    if (data) {
        return {
            type: SEARCH,
            // id: new Date().getTime().toString(),
            payload: data
        }
    }
}