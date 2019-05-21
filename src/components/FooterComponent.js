import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-12 col-sm-6 col-md-4 row">
                    <div className="col-4">
                        Contact us:
                    </div>
                    <div className="col-8">
                        Email: ration@mail.ru
                        Tel.: +7(999)777-77-77
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 row">
                    <div className="col-5">
                        Follow us:
                    </div>
                    <div className="col-7">
                        <a className="icon" href="http://www.facebook.com/profile.php?id=">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </a>
                        <a className="icon" href="http://twitter.com/">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                        <a className="icon" href="http://instagram.com/">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                        <a className="icon" href="http://google.com/+">
                            <FontAwesomeIcon icon={['fab', 'google']} />
                        </a>
                    </div>
                </div>
            </div>        
        </div>    
        <div className="row justify-content-center">             
            <div className="col-auto mt-3">
                <p>© Copyright 2019</p>
            </div>
        </div>   
    </div>
    )
}

export default Footer;