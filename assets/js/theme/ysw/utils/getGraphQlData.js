const getData = async ({ token, query }) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            query,
        }),
    };

    try {
        const response = await fetch('/graphql', options);
        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export default getData;
