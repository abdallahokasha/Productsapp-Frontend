import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { localBackendURL, remoteBackendURL } from '../urls';

class Home extends Component {
    constructor(props) {
        super();
        this.searchByKeys = this.searchByKeys.bind(this);
        this.handleInputSearchChange = this.handleInputSearchChange.bind(this);
        this.state = {
            inputNameText: '',
            inputBrandText: '',
            inputPriceText: '',
            searchResult:[],
        }
    }
    handleInputSearchChange(evt) {
        if (evt.target.id === "searchByName")
            this.setState({ inputNameText: evt.target.value });
        else if (evt.target.id === "searchByBrand")
            this.setState({ inputBrandText: evt.target.value });
        else if (evt.target.id === "searchByPrice")
            this.setState({ inputPriceText: evt.target.value });
    }
    searchByKeys() {
        var query = `?name=${this.state.inputNameText}&brand=${this.state.inputBrandText}&price=${this.state.inputPriceText}`
        axios.get(remoteBackendURL + '/products' + query)
            .then((res) => {
                console.log(res);
                this.setState({ searchResult: res.data});
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
                        <Grid container direction="column">
                            <Grid item xs={12}>
                                <h4>Search by one or multiple of these keys </h4>
                                <input id="searchByName" placeholder="name" type="text" onChange={this.handleInputSearchChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <input id="searchByBrand" placeholder="brand" type="text" onChange={this.handleInputSearchChange} />

                            </Grid>
                            <Grid item xs={12}>
                                <input id="searchByPrice" placeholder="price" type="text" onChange={this.handleInputSearchChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="row">
                                    <Grid item xs={6}>
                                        <div id="linkToList"> <Link to="/list"> List All Products </Link> </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <button className="roundedButton" onClick={this.searchByKeys}> Search </button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                {this.state.searchResult.map((product, i) => {
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
                    </Grid>
                </Grid>


            </div>
        );
    }
}

export default Home;
