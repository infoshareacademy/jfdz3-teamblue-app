import React from 'react';
import axios from 'axios';

class Shop extends React.Component {

    componentDidMount() {
        axios.get('http://infoshareacademy.getsandbox.com/teamblue/data/products')
            .then(response => this.setState({data: response.data}));
    }




    render() {


        return (

          <div className="products-container">

              <div className="categories">
                    <p> Kategorie produktów </p>


              </div>

              <div className="products-list">

              </div>

              ,

          </div>

        )
    }

}


export default Shop;

