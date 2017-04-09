import React from 'react';
import mainbg from './bg.jpg';

class Main extends React.Component {


    render() {


        return (

            <main>
                <img src={mainbg} alt="logo" className="main-bg"/>
                <p>Kupuj u Nas, bo najtaniej!
                    <br/>Woof Woof</p>
            </main>

        )
    }

}


export default Main;

