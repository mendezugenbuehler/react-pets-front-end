const BASE_URL = 'http://localhost:3000/pets';

const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

const update = async (formData, petId) => {
    try {
        const res = await fetch(`${BASE_URL}/${petId}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!res.ok) {
            const errorText = await res.text();  
            throw new Error(`Error: ${errorText}`);
        }
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

const deletePet = async (petId) => {
    try {
        const res = await fetch(`${BASE_URL}/${petId}`, {
            method: 'DELETE',
        });
        if (!res.ok) {
            throw new Error(`Error deleting pet with id: ${petId}`);
        }
        return res.json();
    } catch (err) {
        console.log('Error deleting pet:', err);
        return { err: err.message };
    }
};

export { deletePet, index, create, update };
