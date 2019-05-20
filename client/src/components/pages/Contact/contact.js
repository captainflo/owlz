import React from "react";
import './contact.css'
import Footer from '../../Footer/footer'
import Barre from '../../images/barre.png';
class Contact extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid jumbotron-contact fadeIn">
          <div className="container">
            <h1 className="display-4 text-center">Contact us</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className='text-contact text-center slideUp'>
                <p><i className="fas fa-address-book"></i> 151 NW 1st, Miami Beach, Florida</p>
                <p><i className="fas fa-phone-square"></i> 786-345-6754</p>
              </div>
            </div>
          </div>
          <div className="barre">
            <img src={Barre} alt="Logo" />
          </div>
        </div>
        
        <Footer/>
      </div>
    );
  }
}

export default Contact;
