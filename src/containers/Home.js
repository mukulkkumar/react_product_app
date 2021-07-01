// uix/src/containers/Home.js

// our imports - we need react, a future Home.scss file, axios for our api calls, and future components called Forms/List.

import React from 'react';
import './Home.scss';
import axios from 'axios';
import Forms from '../components/Forms';
import List from '../components/List'

// We declare the Hompage class and extend Component to make sure we have state.

class Homepage extends React.Component {
    state = {
        products: [], // products is an empty array in state that we will populate with our api get call below.
        title: '', // title, description, and price are state placeholders for fields in our form
        description: '',
        price: '$'
    }

    // DRF_URL env var is optional - if you use this app as a docker image or kube container you can easily pass an env var with a different api url. Otherwise this will default to localhost

    DRF_URL = process.env.DRF_URL || 'http://localhost:8000'

    componentDidMount() {

        // on mount, the axios api call will call out to our api with a get() method

        axios.get(this.DRF_URL + '/api/')
            .then(res => {

                //then, it will log the data to console and set the state of our products array to the response data.

                console.log(res.data);

                this.setState({
                    products: res.data
                });
            });
    }

    // This onChange function takes an event parameter and then sets the state to the event target name/value (see the Forms app later in this post)

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {

        // this function takes an event and then sets our Form values to state. Then the axios post() method posts those vaules to our api and into our database. 
        const onSubmit = (e) => {
            const { title, description, price } = this.state;

            axios.post(this.DRF_URL + '/api/', { title, description, price })
                .then((result) => {
                });
        }

        // Delete calls axios delete() on our api's detail view with the id from the mapped element. it also logs a confirmation to our console and reloads the page
        const Delete = (id) => {
            console.log("this is deleted")
            axios.delete(this.DRF_URL + '/api/' + id, { id })
                .then((result) => {
                    window.location.reload();
                });
        }
        // and finally we have our JSX with the Forms (passing onSubmit, onChange, title, description, and price as props. And List with products array and delete function as props.
        return (
            <div className="homepage">
                <Forms
                    onSubmit={onSubmit}
                    onChange={this.onChange}
                    title={this.state.title}
                    description={this.state.description}
                    price={this.state.price}
                />
                <List
                    products={this.state.products}
                    delete={Delete}
                />
            </div>
        )
    }
}

//export the Homepage class

export default Homepage;