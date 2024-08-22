import PropTypes from 'prop-types';
function SearchBar({handleCheckBox}) {

    return (
        <form className="p-4">
            <div><input onChange={handleSearch} type="search" className="border text-2xl" placeholder="Search..." /></div>
            <label htmlFor="inStock">
                <input onClick={handleCheckBox} type="checkbox" name="inStock" id="inStock" />
                Only search products in stock
            </label>
        </form>
    );
}
SearchBar.propTypes = {
    handleCheckBox: PropTypes.any,
    handleSearch: PropTypes.any
}
export default SearchBar;