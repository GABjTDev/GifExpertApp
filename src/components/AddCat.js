import { useState } from "react";
import PropTypes from 'prop-types';

const AddCat = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => setInputValue(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();

        if(inputValue.trim() === '') return;

        setCategories(cats => [inputValue, ...cats]);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
}

export default AddCat;

AddCat.propTypes = {
    setCategories: PropTypes.func.isRequired
}
