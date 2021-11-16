import '../home/home.scss'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Display from '../display/display';
import AddressBookService from '../../services/addressbook-service';
var addressbook = new AddressBookService();
const Home = (props) => {
    const [contactArray, setContactArray] = useState([])
    const getAllEmployees = () => {
        addressbook.getAllContacts().then(contact => {
            console.log("data after get", contact.data);
            setContactArray(...contactArray, contact.data)
        })
            .catch(err => {
                console.log("err after", err);
            })
    }

    return (
        <div>
            <header className="header-content header" onLoad={getAllEmployees}>
                <div class="logo-content">
                    <img src="assets/contact_logo.png" alt="logo" />
                    <div>
                        <span className="address-text">ADDRESS</span><br />
                        <span className="address-text address-book">BOOK</span>
                    </div>
                </div>
            </header>
            <div className="main-content">
                <div className="header-content">
                    <div className="address-detail-text">
                        Person Details
                        <div className="address-count">10</div>
                    </div>
                    <Link to="/" className="add-button">
                        <img src="assets/add_person.png" alt="" /></Link>
                </div>
                <div className="table-main">
                    <Display contactArray={contactArray} />
                </div>
            </div>
        </div>
    );
}
export default Home;