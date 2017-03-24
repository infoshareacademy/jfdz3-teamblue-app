import React from 'react';

class Search extends React.Component {


    render() {

        return (

        <div className="search-form form-group col-md-3">

            <form class="form-group">

             <input id="search" type="search" name="search" placeholder="Szukaj produktów..." />

                <button type="submit" className="btn">
                    <span className="glyphicon glyphicon-search"/></button>
            </form>

             </div>
        )
    }

}

export default Search;

