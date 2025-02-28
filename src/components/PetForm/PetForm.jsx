import { useState, useEffect } from 'react';

const PetForm = (props) => {
    const initialState = {
        name: '',
        age: '',
        breed: ''
    };

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (props.selected) {
            setFormData({
                name: props.selected.name,
                age: props.selected.age,
                breed: props.selected.breed,
            });
        }
    }, [props.selected]);

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (props.selected) {
            props.handleUpdatePet(formData, props.selected._id);
        } else {
            props.handleAddPet(formData);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name </label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="age"> Age </label>
                <input
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="breed"> Breed </label>
                <input
                    id="breed"
                    name="breed"
                    value={formData.breed}
                    onChange={handleChange}
                />
                <button type="submit">
                    {props.selected ? 'Update Pet' : 'Add New Pet'}
                </button>
            </form>
        </div>
    );
};

export default PetForm;
