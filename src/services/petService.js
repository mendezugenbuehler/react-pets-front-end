const BASE_URL = 'http://localhost:5173/pets'

const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

export {
    index,
};