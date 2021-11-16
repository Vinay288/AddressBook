import deleteIcon from '../../assets/icons/delete-black-18dp.svg'
import React, { useState } from 'react';
import editIcon from '../../assets/icons/create-black-18dp.svg'
import '../home/home.scss'
import { Link, useNavigate } from 'react-router-dom'
import AddressBookService from '../../services/addressbook-service';
var addbressbook = new AddressBookService

const Display = (props) => {
    const remove = (id) => {
        addbressbook.deleteContact(id)
        window.location.reload();
    }

    return (
        <table id="display" className="table">
            <tbody>
                <tr>
                    <th>Fullname</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
                {
                    props.contactArray && props.contactArray.map((element, ind) => (
                        <tr key={ind}>
                            <td>{element.name}</td>
                            <td>{element.address}</td>
                            <td>{element.city}</td>
                            <td>{element.state}</td>
                            <td>{element.zipCode}</td>
                            <td>{element.phoneNumber}</td>
                            <td><img onClick={() => remove(element.id)} src={deleteIcon} alt="delete" />
                                <Link to={"/form/" + (element.id)}> <img src={editIcon} alt="edit" /></Link>
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    );
}
export default Display;