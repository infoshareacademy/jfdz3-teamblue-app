import React from 'react';
import FaMobile from 'react-icons/lib/fa/mobile';
import FaBlind from 'react-icons/lib/fa/blind'
import FaSearch from 'react-icons/lib/fa/search';
import FaLock from 'react-icons/lib/fa/lock';

class Features extends React.Component {


    render() {



        return (

            <div className="features">

               <div className="feature-item"><FaMobile /><br/><div className="p-background"><p>Urządzenia mobilne</p></div></div>
               <div className="feature-item"><FaBlind /><br/><p>Standardy WCAG 2.0</p></div>
               <div className="feature-item"><FaSearch /><br/><p>Wyszukiwarka produktów</p></div>
               <div className="feature-item"><FaLock /><br/><p>Bezpieczne zakupy</p></div>

            </div>




        )
    }

}


export default Features;

