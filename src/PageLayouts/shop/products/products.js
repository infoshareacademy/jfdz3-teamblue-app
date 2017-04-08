import React from 'react';
import axios from 'axios';
import Categories from './Categories';


class Shop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    };


    componentDidMount() {
        axios.get('http://infoshareacademy.getsandbox.com/teamblue/data/products')
            .then(response => this.setState({data: response.data}));

    }

    render() {

            const { data } = this.state;

        return (

          <div className="products-container">

              <div className="categories">
                    <h2> Kategorie produktów </h2>


                 <div className="categories-items">
                  <p> Kot </p>
                      <p>Pies </p>
                          <p>Akcesoria </p>
                              <p>Odzież </p>
                                  <p>Karma sucha </p>
                                      <p>Karma mokra </p>
                     </div>


              </div>

              <div className="products-list">

                  <Categories
                      contacts={data}
                  />

              </div>



          </div>

        )
    }

}


export default Shop;

