import React from 'react';
import FaMobile from 'react-icons/lib/fa/mobile';
import FaBlind from 'react-icons/lib/fa/blind'
import FaSearch from 'react-icons/lib/fa/search';
import FaLock from 'react-icons/lib/fa/lock';

class Features extends React.Component {


    render() {



        return (



            <div className="features container-fluid">

                <h1>Poznaj funkcjonalności naszego serwisu:</h1>

                <div className="feature-item "><FaMobile /><br/><div className="p-background"><p>Urządzenia mobilne</p></div></div>
               <div className="feature-item "><FaBlind /><br/><div className="p-background"><p>Standardy WCAG 2.0</p></div></div>
               <div className="feature-item "><FaSearch /><br/><div className="p-background"><p>Wyszukiwarka produktów</p></div></div>
               <div className="feature-item "><FaLock /><br/><div className="p-background"><p>Bezpieczne zakupy</p></div></div>

            </div>




        )
    }

}


export default Features;

