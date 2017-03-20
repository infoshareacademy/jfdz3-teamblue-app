import React from 'react';


class Nav extends React.Component {


  render() {

        return (


         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                <ul className="nav navbar-nav">
                    <li><a href="index.html">Strona Główna</a></li>
                    <li className="about_us_menu"><a href="#oprodukcie">O Produkcie</a></li>
                    <li className="features_menu"><a href="#features">Funkcjonalności</a></li>
                    <li className="dropdown"><a href="#naszzespol" className="dropdown-toggle" data-toggle="dropdown"
                                            role="button" aria-haspopup="true" aria-expanded="false">Nasz Zespół<span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#sylwia">Sylwia</a></li>
                            <li><a href="#kajetan">Kajetan</a></li>
                            <li><a href="#natalia">Natalia</a></li>
                            <li><a href="#olga">Olga</a></li>
                        </ul>
                    </li>
                    <li className="dropdown" id="shop"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sklep
                        <span className="caret"></span></a>
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



        )
    }

}


export default Nav;

