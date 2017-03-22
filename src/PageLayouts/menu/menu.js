import React from 'react';
import FaPaw from 'react-icons/lib/fa/paw';

class Nav extends React.Component {


    render() {

        return (



            <nav className="navbar-custom navbar  navbar-inverse">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" >
                        <span className="sr-only">Toggle navigation</span>
                      <FaPaw />
                      </button>

                </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                <ul className="nav navbar-nav">
                    <li><a href="index.html">Strona Główna</a></li>
                    <li className="about_us_menu"><a href="#oprodukcie">O Produkcie</a></li>
                    <li className="features_menu"><a href="#features">Funkcjonalności</a></li>
                    <li className="dropdown"><a href="#naszzespol" className="dropdown-toggle"
                                                role="button" >Nasz Zespół<span className="caret"/></a>
                        <ul className="dropdown-menu">
                            <li><a href="#sylwia">Sylwia</a></li>
                            <li><a href="#kajetan">Kajetan</a></li>
                            <li><a href="#natalia">Natalia</a></li>
                            <li><a href="#olga">Olga</a></li>
                        </ul>
                    </li>
                    <li className="dropdown" id="shop"><a href="#" className="dropdown-toggle"  role="button" >Sklep
                        <span className="caret"/></a>
                        <ul className="dropdown-menu">
                            <li><a href="">Psy</a></li>
                            <li><a href="">Koty</a></li>
                            <li><a href="">Ryby</a></li>
                            <li><a href="">Ptaki</a></li>
                            <li><a href="">Gady</a></li>
                        </ul>
                    </li>


                </ul>
            </div>
 </nav>




    )
    }

}


export default Nav;

