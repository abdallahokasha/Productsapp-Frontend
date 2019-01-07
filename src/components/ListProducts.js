import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { localBackendURL, remoteBackendURL } from '../urls';
// import fire from '../fire';

class ListProducts extends Component {
    constructor(props) {
        super();
        this.state = {
            allProducts: []
        }
    }
    componentDidMount() {
        axios.get(remoteBackendURL + '/products/list')
            .then((res) => {
                console.log(Object.values(res.data));
                this.setState({ allProducts: Object.values(res.data) })
                console.log(res.data.values)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Grid container direction="row">
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Link to="/"> Search for a product </Link>
                        {this.state.allProducts.map((product, i) => {
                            return (
                                <div className="viewProduct" key={i}>
                                    Name: {product.name}
                                    <br />
                                    Brand: {product.brand}
                                    <br />
                                    Price: {product.price}
                                </div>
                            );
                        })}
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default ListProducts;