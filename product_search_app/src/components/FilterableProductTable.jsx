import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";

function FilterableProductTable() {
    const [inStock, setInStock] = useState(false);
    const [query, setQuery] = useState('');
    function handleCheckBox(event){
        const isChecked = event.target.checked;
        setInStock(isChecked);
        console.log(inStock);

    }
    function handleSearch(event) {
        const searchQuery = event.target.value;
        setQuery(searchQuery);
    }


    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }  

      ];
      const filteredProducts = products
      .filter(product => inStock ? product.stocked: true)
      .filter(product => product.name.toLowerCase().startsWith(query.toLowerCase()));
    return (
        <div className="w-96 border">
            <SearchBar handleCheckBox={handleCheckBox} handleSearch={handleSearch} />
            <ProductTable products={filteredProducts}/>
        </div>
    )
}

export default FilterableProductTable;