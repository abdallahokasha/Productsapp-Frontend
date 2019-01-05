import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
import axios from 'axios';

// import fire from '../fire';

class ListProducts extends Component {
    constructor(props) {
        super();
        this.state = {
            allProducts: []
        }
    }

    componentDidMount() {
        axios.get('https://productsappn.herokuapp.com/products/list')
            .then((res) => {
                console.log(res);
                this.setState({ allProducts: res.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
{this.state.allProducts}
            </div>
        );
    }
}

export default ListProducts;