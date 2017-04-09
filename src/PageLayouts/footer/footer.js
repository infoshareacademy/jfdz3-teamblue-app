import React from 'react';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';


class Footer extends React.Component {


    render() {


        return (

            <footer>

                <div className="footer-bg container-fluid">

                <div><p> Copyrights TeamBlue</p></div>
                <div>
                    <ul>
                        <li>
                            Regulamin
                        </li>
                        <li>
                            Warunki zwrotu
                        </li>
                        <li>
                            Dostawa
                        </li>
                    </ul>
                </div>

                <div className="social-icons"><FaFacebookOfficial /><FaGooglePlus /></div>

             </div>

            </footer>


        )
    }

}


export default Footer;

