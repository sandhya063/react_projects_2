import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import PropTypes from 'prop-types';
import React from "react";

function ProductTable({products}) {
    console.log(products);
    const categories =  [];
    products.forEach((product) => {
        const category = product.category;
        if (categories.indexOf(category) === -1) {
            categories.push(category);
        }

    });
    console.log(categories);
    return (
        <table className="w-full">
            <tbody>
            <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Price</th>
                </tr>
                {
                     
        categories.map((category, index) => (
           <React.Fragment key={index}>
            <ProductCategoryRow
             category={category} />
            {
                products.filter(product => product.category === category)
                .map((product, index) => 
                    <ProductRow
                 key={index}
                  name={product.name} 
                  price={product.price}
                   stocked={product.stocked} />)
            }
            </React.Fragment>
        ))
    }
    </tbody> 
        </table>
    )
}

export default ProductTable;