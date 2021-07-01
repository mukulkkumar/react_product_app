// uix/src/components/Forms.js

import React from 'react';

// Fewer things to note in this file. Forms function takes "props" as a parameter passed from Home container.
const Forms = (props) => {
    //  We return JSX
    return(
        <div className = "add">
            <h1>Add a Product </h1>

            {/* notes the {props.x} in each section here. These are the values we passed above. */}

            <form onSubmit={props.onSubmit}>
                <input name="title" type = "text" placeholder="Enter Title" value={props.title} onChange={props.onChange}/>
                <input name="description"type = "text" placeholder="Enter Description" value={props.description} onChange={props.onChange}/>
                <input name="price" type = "text" placeholder="Enter Price" value={props.price} onChange={props.onChange}/>
                <input type = "submit"/>
            </form>                
        </div>
    )
}

export default Forms;