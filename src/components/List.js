// uix/src/components/List.js

import React from 'react';

// Same here as above. List takes props as a function.
const List = (props) => {
    return(
        <div className = "list-items">

        {/* Here we are taking the products prop and mapping it to individual elements in this component. */}

        {props.products.map(product => {
            return(
                <div className = "product-tile">
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    {/* // when clicking the delete button, it calls the delete function in the Home container and passes the product id from the mapped array */}
                    <button onClick={() => { props.delete(product.id)}}>delete</button>
                </div>
            )

        })}
        </div>
    )
}

export default List;