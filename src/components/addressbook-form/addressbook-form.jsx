import "../addressbook-form/addressbook-form.scss";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import AddressBookService from "../../services/addressbook-service";
import { v1 as uuidv1 } from 'uuid';
var addressbook = new AddressBookService();
const AddressBookForm = (props) => {
    const navigate = useNavigate();
    let initialValue = {
        name: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        id: '',
        isUpdate: false,
        error: {
            phoneNumber: '',
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: ''
        }

    }

    const [formValue, setForm] = useState(initialValue);

    const changeValue = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value })
    }
    const validData = async () => {
        let isError = false;
        let error = {
            phoneNumber: '',
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: ''

        }
        const regName = /^[A-Z]{1}[A-Za-z]{2,}([\\s]?([a-zA-Z]{3,}))*$/
        if (formValue.name.length < 1 || !regName.test(formValue.name)) {
            error.name = 'name is wrong'
            isError = true;
        }
        const regPhoneNumber = /^[+]?([0-9]{2})?[789]{1}[0-9]{9}$/
        if (formValue.phoneNumber.length < 1 || !regPhoneNumber.test(formValue.phoneNumber)) {
            error.phoneNumber = 'phone Number is wrong'
            isError = true;
        }
        const regAddress = /^[a-zA-Z0-9]{3,}([\\s]?[a-zA-Z0-9]{3,})*$/
        if (formValue.address.length < 1 || !regAddress.test(formValue.address)) {
            error.address = 'address is required'
            isError = true;
        }
        const regZip = /^[0-9]{3}[\\s]?[0-9]{3}$/
        if (formValue.zipCode.length < 1 || !regZip.test(formValue.zipCode)) {
            error.zipCode = 'zipcode is required'
            isError = true;
        }

        if (formValue.city.length < 1) {
            error.city = 'city is required'
            isError = true;
        }
        if (formValue.state.length < 1) {
            error.state = 'state is required'
            isError = true;
        }

        await setForm({ ...formValue, error: error })
        return isError;
    }

    const save = async (event) => {
        event.preventDefault();
        console.log("save");

        if (await validData()) {
            console.log('error', formValue);
            return;
        }
        let object = {
            name: formValue.name,
            phoneNumber: formValue.phoneNumber,
            address: formValue.address,
            city: formValue.city,
            state: formValue.state,
            zipCode: formValue.zipCode,
            id: uuidv1(),
        }
        console.log(object)
        addressbook.addAddressBook(object).then(data => {
            console.log("data added successfully");
        }).catch(err => {
            console.log("error while adding data ", err);
        })
        navigate('/home')
    }

    const reset = () => {
        setForm({ ...initialValue, id: formValue.id, isUpdate: formValue.isUpdate })
        console.log(formValue)
    }

    return (
        <div>
            <header className="header-content header">
                <div className="logo-content">
                    <img src="assets/contact_logo.png" alt="address-book-logo" />
                    <div>
                        <span className="address-text">ADDRESS</span><br />
                        <span className="address-text address-book">BOOK</span>
                    </div>
                </div>
            </header>

            <div className="form-content">
                <form className="form" action="#">
                    <div className="form-head">
                        <h1 className="form-head-title">Person Address Form</h1>
                        <Link to="/home" class="close-button"><img src="../assets/cross.png" /></Link>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="name">Full Name</label>
                        <input className="input" type="text" id="name" name="name" onChange={changeValue} autocomplete="disable" required />
                        <div className="error" id="name-error">{formValue.error.name}</div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="phoneNumber">Phone Number</label>
                        <input className="input" type="tel" id="phoneNumber" name="phoneNumber" onChange={changeValue} autocomplete="disable" required />
                        <div className="error" id="phoneNumber-error">{formValue.error.phoneNumber}</div>
                    </div>
                    <div className="row-content">
                        <div className="text-row">
                            <label className="label text" htmlFor="address">Address</label>
                            <textarea id="address" className="input" name="address" onChange={changeValue} placeholder="" style={{ height: "100px" }} autocomplete="disable"></textarea>
                            <div className="error" id="address-error">{formValue.error.address}</div>


                        </div>
                    </div>
                    <div className="row-content location-row">
                        <div>
                            <label className="label text" htmlFor="city">City</label>
                            <select id="city" onChange={changeValue} name="city">
                                <option value="" disabled selected hidden>Select City</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Cochin">Cochin</option>
                            </select>
                            <div className="error" id="zip-error">{formValue.error.city}</div>

                        </div>
                        <div className="state-row">
                            <label className="label text" htmlFor="state">State</label>
                            <select id="state" onChange={changeValue} name="state">
                                <option value="" disabled selected hidden>Select State</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Maharastra">Maharastra</option>
                                <option value="Kerala">Kerala</option>
                            </select>
                            <div className="error" id="zip-error">{formValue.error.state}</div>
                        </div>
                        <div>
                            <label className="label text" htmlFor="zip">Zipcode</label>
                            <input className="input" type="text" id="zip" name="zipCode" onChange={changeValue} required autocomplete="disable" />
                            <div className="error" id="zip-error">{formValue.error.zipCode}</div>


                        </div>
                    </div>
                    <div className="buttonParent">
                        <div className="submit-reset">
                            <button type="submit" class="button submitButton" id="submitButton" onClick={save}>
                                Add
                            </button>
                            <button type="reset" class="resetButton button" id="resetButton" onclick="reset()"
                            >Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddressBookForm;