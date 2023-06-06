// import { useNavigate } from "react-router-dom";
// import { ADD_TO_CART } from "../../constants"

export const AddProductApi = (auth, products, imageData) => {

    return async() => {
        try {
            console.log('12')
            const { product_name, description, price, category, specification } = products;
            const data = new FormData();
            data.append('product_name', product_name);
            data.append('description', description);
            data.append('price', price);
            data.append('category', category);
            data.append('specification', specification);
            data.append('image', imageData);
            console.log(data.get('category'))
            const response = await fetch("http://localhost:5000/addProduct", {
                method: "POST",
                headers: {
                    token: auth

                },
                body: data
            });
            console.log(response)
            const json = await response.json();
            console.log(json);

        } catch (error) {
            console.log(error.method + ": " + error.message)
        }
    }
}