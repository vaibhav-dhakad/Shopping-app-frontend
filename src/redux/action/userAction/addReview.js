export const addReview = (review) => {
    return async() => {
        try {
            const { rating, feedback, productId } = review;
            console.log(productId)


            let api = await fetch("http://localhost:5000/addReview", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: localStorage.getItem('token')
                },
                body: JSON.stringify({ rating, feedback, productId })
            });

            const res = await api.json();

            console.log(res);
        } catch (error) {
            console.log(error.message);
        }
    };
};