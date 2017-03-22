import React from 'react';
import mainbg from './bg.jpg';

class Main extends React.Component {


    render() {


        return (

            <main>
                <img src={mainbg} alt="logo" className="main-bg"/>
                <p>Wof Wof - Kupuj u Nas!</p>
            </main>

        )
    }

}


export default Main;

