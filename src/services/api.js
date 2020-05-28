const apiCall = () => {
    fetch("http://localhost:3001/expense/")
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            },
            (error) => {
                console.log(error)
            }
        )
};

export default apiCall;