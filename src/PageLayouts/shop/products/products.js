import React from 'react';
import axios from 'axios';
import Categories from './Categories';
import Paginator from 'react-paginate';

import ReactPaginate from 'react-paginate';

class Shop extends React.Component {

    elementsPerPage = 3;

    categories = ['Kot', 'Pies', 'Karma sucha', 'Karma mokra', 'Odzież', 'Akcesoria'];

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredData: [],
            currentPage: 1,
            filter: 0
        }
    };


    componentDidMount() {
        axios.get('http://infoshareacademy.getsandbox.com/teamblue/data/products')
            .then(response => this.setState({data: response.data, filteredData: response.data}));

    }

    filterData( filter ){
        if( filter === undefined ){
            this.setState({
                filter,
                filteredData: this.state.data
            });
            return true;
        }
        let filterVal = this.categories[ filter ];
        let data = this.state.data;
        let filteredData = data.filter( e => e.categories.indexOf( filterVal ) !== -1 );
        this.setState({
            filter,
            filteredData: filteredData
        })
    }

    changePage(e){
        this.setState({currentPage: e.target.innerHTML})
    }

    getPaginatedData(){
        let currentPage = this.state.currentPage -1;
        return this.state.filteredData.slice( currentPage * this.elementsPerPage, currentPage * this.elementsPerPage + this.elementsPerPage );
    }

    paginator(){
        let pageCount = Math.ceil( this.state.filteredData.length / this.elementsPerPage );
        let btns = [];
        let activeButton = {
            fontWeight: 'bold',
            color: 'gold',
            paddingLeft: '15px',
            paddingRight: '15px'
        }
        for( let i = 1; i <= pageCount; i++ ){
            btns.push( <button style={this.state.currentPage==i?activeButton:{}} key={i} onClick={ (e) => this.changePage(e) }>{i}</button> )
        }

        return <div>
            {btns}
        </div>
    }

    render() {
        return (

          <div className="products-container">

              <div className="categories">
                    <h2> Kategorie produktów </h2>


                 <div className="categories-items">
                     <ul>
                         <li style={{fontWeight:'bold'}}><a onClick={e => this.filterData()}> Wszystko </a></li>
                         <li><a onClick={e => this.filterData(0)}> Kot </a></li>
                         <li><a onClick={e => this.filterData(1)}>Pies </a></li>
                         <li><a onClick={e => this.filterData(5)}>Akcesoria </a></li>
                         <li><a onClick={e => this.filterData(4)}>Odzież </a></li>
                         <li><a onClick={e => this.filterData(2)}>Karma sucha </a></li>
                         <li><a onClick={e => this.filterData(3)}>Karma mokra </a></li>

                     </ul>
                     </div>


              </div>

              <div className="products-list">

                  <Categories
                      contacts={this.getPaginatedData()}

                  />

                  {this.paginator()}


              </div>



          </div>

        )

    }

}


export default Shop;

